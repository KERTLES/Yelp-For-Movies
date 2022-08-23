from django.contrib import admin

from .models import AccountVO

@admin.register(AccountVO)
class AccountAdmin(admin.ModelAdmin):
    pass

