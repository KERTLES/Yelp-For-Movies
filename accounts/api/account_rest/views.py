from django.shortcuts import render, redirect
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth import login
from django.contrib.auth.models import User

# Create your views here.

from django.http import JsonResponse

from .models import Account
from common.json import ModelEncoder
from django.views.decorators.http import require_http_methods
import json

class AccountListEncoder(ModelEncoder):
    model = Account
    properties = ["user_name", "id"]


class AccountDetailEncoder(ModelEncoder):
    model = Account
    properties = [
        "email",
        "first_name",
        "last_name",
        "user_name",
        "password",
        "is_active",
    ]

@require_http_methods(["GET", "POST"])
def api_list_accounts(request):
    if request.method == "GET":
        attendees = Account.objects.all()
        return JsonResponse(
            {"accounts": attendees},
            encoder=AccountListEncoder,
        )
    else:
        content = json.loads(request.body)
        account = Account.objects.create(**content)
        nusername = content["user_name"]
        npassword = content["password"]
        nfirstname = content["first_name"]
        nlastname = content["last_name"]
        nemail= content["email"]
        new_user = User.objects.create_user(
            username=nusername, password=npassword, email=nemail, first_name = nfirstname, last_name = nlastname
        )
        new_user.save()
        login(request, new_user)
        return JsonResponse(
            account,
            encoder=AccountDetailEncoder,
            safe=False,
        )

@require_http_methods(["DELETE", "PUT", "GET"])
def api_show_account(request, pk):
    if request.method == "GET":
        account = Account.objects.get(id=pk)
        return JsonResponse(
            account, encoder=AccountDetailEncoder, safe=False
        )
    elif request.method == "DELETE":
        count, _ = Account.objects.filter(id=pk).delete()
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



def SignUpForm(request):
    if request.method == "POST":
        form = UserCreationForm(request.POST)
        if form.is_valid():
            nusername = request.POST.get("user_name")
            npassword = request.POST.get("password")
            new_user = User.objects.create_user(
                username=nusername, password=npassword
            )
            new_user.save()
            login(request, new_user)
    else:
        form = UserCreationForm()
    return JsonResponse(
        request,
        encoder=AccountDetailEncoder,
        safe=False,
    )
