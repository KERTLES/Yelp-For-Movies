from django.shortcuts import render, redirect
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth import login
from django.contrib.auth.models import User

# Create your views here.


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

