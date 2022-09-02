from django.test import TestCase
from .views import api_list_accounts, api_show_account
from .models import Account
import json
import os

# Create your tests here.

class accountsTester(TestCase):
    def setUp(self):
        self.account = Account.objects.create(
        email= "hekitty@gmail.com", 
        first_name = "matthew", 
        last_name = "Oshima", 
        username= "pyuisad",
	    password = "tatasddasdime")
    def test_get_list_accounts(self): # tests if a list of accounts can be retrieved
        response = self.client.get("/api/accounts/")
        content =response.json()
        self.assertEqual(response.status_code,200)
        for account in content["accounts"]:
            if account["first_name"] == self.account.first_name:
                self.assertEqual(account['id'], self.account.id)
    
    def test_create_account(self): # tests if accounts can be created
        data ={
        "email": "batty@gmail.com",
	    "first_name": "tham",
	    "last_name": "Oshi",
	    "username": "sticker",
	    "password": "slammer"
        }

        self.assertEqual(data, {
        "email": "batty@gmail.com",
	    "first_name": "tham",
	    "last_name": "Oshi",
	    "username": "sticker",
	    "password": "slammer"
        })
        response = self.client.post("/api/accounts/", data, content_type = "application/json",)
        # data.response.json()
        response2 = self.client.get("/api/accounts/")
        content=response2.json()
        for account in content["accounts"]:
            if account["first_name"] == "tham":
                self.assertEqual(account['id'], 2)

    def test_get_specific_account(self):
        response3=self.client.get('/api/accounts/1')
        content = response3.json()
        self.assertEqual(content['username'], "pyuisad")
    
    def test_update_account(self):
        data = {
        "email":"hekitty@gmail.com", 
        "first_name" : "matthew", 
        "last_name" : "Oshima", 
	    "password" : "tatasddasdime",
	    "username": "lucky"
        }
        self.client.put('/api/accounts/1',data ,content_type="application/json")
        response4 = self.client.get('/api/accounts/1')
        content = response4.json()
        self.assertEqual(content['username'], "lucky")
        self.assertEqual(content['first_name'], "matthew")