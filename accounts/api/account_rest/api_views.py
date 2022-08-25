from django.db import IntegrityError
from django.http import HttpResponse, JsonResponse
from django.views.decorators.http import require_http_methods
import json
import pika

from common.json import ModelEncoder
from .models import Account

class AccountListEncoder(ModelEncoder):
    model = Account
    properties = ["email", "id"]


class AccountInfoModelEncoder(ModelEncoder):
    model = Account
    properties = [
        "email",
        "first_name",
        "last_name",
        "user_name",
        "password",
        "is_active"]



def send_account_data(account):
    parameters = pika.ConnectionParameters(host="rabbitmq")
    connection = pika.BlockingConnection(parameters)
    channel = connection.channel()
    channel.exchange_declare(exchange="account_info", exchange_type="fanout")

    message = json.dumps(account, cls=AccountInfoModelEncoder)
    channel.basic_publish(
        exchange="account_info",
        routing_key="",
        body=message,
    )
    connection.close()


def create_user(json_content):
    try:
        content = json.loads(json_content)
    except json.JSONDecodeError:
        return 400, {"message": "Bad JSON"}, None

    required_properties = [
        "email",
        "user_name",
        "password",
        "is_active",
    ]
    missing_properties = []
    for required_property in required_properties:
        if (
            required_property not in content
            or len(content[required_property]) == 0
        ):
            missing_properties.append(required_property)
    if missing_properties:
        response_content = {
            "message": "missing properties",
            "properties": missing_properties,
        }
        return 400, response_content, None

    try:
        account = Account.objects.create_user(
            username=content["user_name"],
            email=content["email"],
            password=content["password"],
            is_active=content["is_active"],
        )
        return 200, account, account
    except IntegrityError as e:
        return 409, {"message": str(e)}, None
    except ValueError as e:
        return 400, {"message": str(e)}, None


@require_http_methods(["GET", "POST"])
def api_list_accounts(request, account_vo_id=None):
    if request.method == "GET":
        users = Account.objects.all()
        return JsonResponse(
            {"accounts": users},
            encoder=AccountListEncoder,
        )
    else:
        content = json.loads(request.body)
        account = Account.objects.create(**content)
        nusername = content["user_name"]
        npassword = content["password"]
        nfirstname = content["first_name"]
        nlastname= content["last_name"]
        nemail = content["email"]
        new_user = Account.objects.create_user(
            username=nusername,
            password=npassword,
            email=nemail,
            first_name=nfirstname,
            last_name=nlastname,
        )
        new_user.save()
        login(request, new_user)
        return JsonResponse(
            account,
            encoder=AccountInfoModelEncoder,
            safe=False,
        )


@require_http_methods(["GET", "PUT", "DELETE"])
def api_account_detail(request, email):
    try:
        account = Account.objects.filter(is_active=True).get(email=email)
    except Account.DoesNotExist:
        print("Account.DoesNotExist", email)
        if request.method == "GET":
            response = JsonResponse({"message": email})
            response.status_code = 404
            return response
        else:
            account = None

    if request.method == "GET":
        return JsonResponse(
            account,
            encoder=AccountListEncoder,
            safe=False,
        )
    elif request.method == "PUT":
        try:
            content = json.loads(request.body)
        except json.JSONDecodeError:
            response = JsonResponse({"message": "Bad JSON"})
            response.status_code = 400
            return response

        if "email" in content:
            del content["email"]
        if "username" in content:
            del content["user_name"]
        if account is not None:
            for property in content:
                if property != "password" and hasattr(account, property):
                    setattr(account, property, content[property])
                elif property == "password":
                    account.set_password(content["password"])
            status = 200
            response_content = account
        else:
            status, response_content, account = create_user(request.body)
        if account:
            account.save()
            send_account_data(account)
        response = JsonResponse(
            response_content,
            encoder=AccountListEncoder,
            safe=False,
        )
        response.status_code = status
        return response
    else:
        account.is_active = False
        account.save()
        send_account_data(account)
        response = HttpResponse()
        response.status_code = 204
        return response
    