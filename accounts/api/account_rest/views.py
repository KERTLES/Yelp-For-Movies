from django.shortcuts import render, redirect
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth import login
from django.contrib.auth.models import User

# Create your views here.

from django.http import JsonResponse

from .models import AccountVO
from common.json import ModelEncoder
from django.views.decorators.http import require_http_methods
import json

class AccountListEncoder(ModelEncoder):
    model = AccountVO
    properties = ["user_name"]


class AccountDetailEncoder(ModelEncoder):
    model = AccountVO
    properties = [
        "email",
        "user_name",
        "password",
        "is_active",
    ]

@require_http_methods(["GET", "POST"])
def api_list_accounts(request, account_vo_id=None):
    if request.method == "GET":
        attendees = AccountVO.objects.filter(id=account_vo_id)
        return JsonResponse(
            {"attendees": attendees},
            encoder=AccountListEncoder,
        )
    else:
        content = json.loads(request.body)
        account = AccountVO.objects.create(**content)
        return JsonResponse(
            account,
            encoder=AccountDetailEncoder,
            safe=False,
        )


@require_http_methods(["DELETE", "PUT", "GET"])
def api_show_account(request, pk):
    if request.method == "GET":
        account = AccountVO.objects.get(id=pk)
        return JsonResponse(
            account, encoder=AccountDetailEncoder, safe=False
        )
    elif request.method == "DELETE":
        count, _ = AccountVO.objects.filter(id=pk).delete()
        return JsonResponse({"deleted": count > 0})
    else:
        content = json.loads(request.body)
        AccountVO.objects.filter(id=pk).update(**content)

        account = AccountVO.objects.get(id=pk)
        return JsonResponse(
            account,
            encoder=AccountDetailEncoder,
            safe=False,
        )



def SignUpForm(request):
    if request.method == "POST":
        form = UserCreationForm(request.POST)
        if form.is_valid():
            nusername = request.POST.get("username")
            npassword = request.POST.get("password")
            new_user = User.objects.create_user(
                username=nusername, password=npassword
            )
            new_user.save()
            login(request, new_user)
            return redirect("home")
    else:
        form = UserCreationForm()
    context = {
        "form": form,
    }
    return render(request, "registration/signup.html", context)

