from django.db import models
from django.urls import reverse
from datetime import datetime


class AccountVO(models.Model):
    email = models.EmailField(unique=True)
    user_name = models.CharField(max_length=100)
    password = models.CharField(max_length=100)
    is_active= models.BooleanField(null=True)
