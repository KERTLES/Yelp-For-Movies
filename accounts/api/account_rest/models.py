from django.db import models
from django.urls import reverse
from datetime import datetime


class Account(models.Model):
    email = models.EmailField(unique=True)
    first_name = models.CharField(max_length=100, null=True)
    last_name = models.CharField(max_length=100, null=True)
    user_name = models.CharField(max_length=100, unique=True)
    password = models.CharField(max_length=100, unique=True)
    is_active= models.BooleanField(null=True)
