from django.urls import path
# from django.contrib.auth import views as auth_views
from account_rest.views import api_show_account, api_list_accounts, api_user_token, neo_authenticate, neo_logout, get_some_data
from django.contrib.auth import views as auth_views

urlpatterns = [
    # path("login/",auth_views.LoginView.as_view(), name="login"),
    path("login/", neo_authenticate, name="login"),
    path("logout/", neo_logout, name="logout"),
    path("accounts/", api_list_accounts, name="accounts_list"),
    path("accounts/<int:pk>", api_show_account, name="account_detail"),
    path("tokens/mine/", api_user_token, name="get_token")
    path("")
]
