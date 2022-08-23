from django.db import models
from django.urls import reverse
from datetime import datetime


class AccountVO(models.Model):
    email = models.EmailField()
    first_name = models.CharField(max_length=100, null=True)
    last_name = models.CharField(max_length=100, null=True)
    user_name = models.CharField(max_length=100)
    password = models.CharField(max_length=100)
    is_active = models.BooleanField(null=True)
