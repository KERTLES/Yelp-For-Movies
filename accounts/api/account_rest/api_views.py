from django.shortcuts import render, redirect
from django.contrib.auth import login, authenticate
from django.http import HttpResponse, HttpResponseRedirect
from django.urls import reverse
from django.contrib.auth.forms import UserCreationForm
from django.http import JsonResponse
from .models import Account
from common.json import ModelEncoder
from django.views.decorators.http import require_http_methods
import json
from django.db import IntegrityError

class AccountListEncoder(ModelEncoder):
    model = Account
    properties = [
        "username",
        "id",
        ]

class AccountDetailEncoder(ModelEncoder):
    model = Account
    properties = [
        "email",
        "first_name",
        "last_name",
        "username",
        "password",
        "is_active",
        "date_joined",
    ]

@require_http_methods(["GET"])
def api_user_token(request):
    if "jwt_access_token" in request.COOKIES:
        token = request.COOKIES["jwt_access_token"]
        if token:
            return JsonResponse({"token": token})
    response = JsonResponse({"token": None})
    return response

@require_http_methods(["GET", "POST"])
def api_list_accounts(request):
    if request.method == "GET":
        attendees = Account.objects.all()
        return JsonResponse(
            {"accounts": attendees},
            encoder=AccountListEncoder,
        )
    else:
        try:
            content = json.loads(request.body)
            nusername = content["username"]
            npassword = content["password"]
            nfirstname = content["first_name"]
            nlastname = content["last_name"]
            nemail= content["email"]
            account = Account.objects.create_user(
                username=nusername, password=npassword, email=nemail, first_name = nfirstname, last_name = nlastname
            )
            account.save()
            login(request, account)
            return JsonResponse(
                account,
                encoder=AccountDetailEncoder,
                safe=False,
            )
        except:
            response = JsonResponse(
                {"message": "Some credentials are not unique. Please try again to place new credentials."}
            )
            response.status_code = 400
            return response

@require_http_methods(["DELETE", "PUT", "GET"])
def api_show_account(request, pk):
    if request.method == "GET":
        account = Account.objects.get(id=pk)
        return JsonResponse(
            account, encoder=AccountDetailEncoder, safe=False
        )
    elif request.method == "DELETE":
        count, _ = Account.objects.filter(id=pk).delete()
        Account.objects.filter(id = pk).delete()
        return JsonResponse({"deleted": count > 0})
    else:
        content = json.loads(request.body)
        Account.objects.filter(id=pk).update(**content)

        account = Account.objects.get(id=pk)
        return JsonResponse(
            account,
            encoder=AccountDetailEncoder,
            safe=False,
        )
@require_http_methods(["POST"])
def neo_authenticate(request):
    nusername = request.POST['username']
    npassword = request.POST['password']
    print(nusername + ":" + npassword)
    user = authenticate(request, username=nusername, password=npassword)
    if user is not None:
        print(user)
        login(request, user)
        print(request.user.is_authenticated)
        return HttpResponse('got it')
    else:
        response = JsonResponse(
        {"message": "Some credentials are not unique. Please try again to place new credentials."}
        )
        response.status_code = 400
        return response

# def SignUpForm(request):
#     if request.method == "POST":
#         form = UserCreationForm(request.POST)
#         if form.is_valid():
#             nusername = request.POST.get("user_name")
#             npassword = request.POST.get("password")
#             new_user = Account.objects.create_user(
#                 username=nusername, password=npassword
#             )
#             new_user.save()
#             login(request, new_user)
#     else:
#         print("error")
    
# TEST SIGN UP FORM
# def create_user(json_content):
#     try:
#         content = json.loads(json_content)
#     except json.JSONDecodeError:
#         return 400, {"message": "Bad JSON"}, None

#     required_properties = [
#         "username",
#         "email",
#         "password",
#         "first_name",
#         "last_name",
#     ]
#     missing_properties = []
#     for required_property in required_properties:
#         if (
#             required_property not in content
#             or len(content[required_property]) == 0
#         ):
#             missing_properties.append(required_property)
#     if missing_properties:
#         response_content = {
#             "message": "missing properties",
#             "properties": missing_properties,
#         }
#         return 400, response_content, None

#     try:
#         account = Account.objects.create_user(
#             username=content["username"],
#             email=content["email"],
#             password=content["password"],
#             first_name=content["first_name"],
#             last_name=content["last_name"],
#         )
#         return 200, account, account
#     except IntegrityError as e:
#         return 409, {"message": str(e)}, None
#     except ValueError as e:
#         return 400, {"message": str(e)}, None