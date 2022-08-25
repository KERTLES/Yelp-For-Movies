from django.urls import path, include
from .api_views import SignUpForm, api_account_detail, api_list_accounts, api_user_token, authenticate

urlpatterns = [
    path("login/", authenticate, name="login"),
    path("signup/", SignUpForm, name="signup"),
    path("accounts/", api_list_accounts, name="accounts_list"),
    path("accounts/<int:pk>", api_account_detail, name="account_detail"),
    path("tokens/mine/", api_user_token, name="get_token")
]
