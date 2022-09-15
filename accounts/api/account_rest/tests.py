from django.test import TestCase
from .views import api_list_accounts, api_show_account
from .models import Account
from django.urls import reverse
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
        self.account2 = 0

    def test_get_list_accounts(self): # tests if a list of accounts can be retrieved
        response = self.client.get(reverse('accounts_list'))
        content =response.json()
        self.assertEqual(response.status_code,200)
        for account in content["accounts"]:
            if account["first_name"] == self.account.first_name:
                self.assertEqual(account['id'], self.account.id)
                self.assertEqual(account["username"], "pyuisad")
                self.assertEqual(account['first_name'], 'matthew')

    def test_create_account(self): # tests if accounts can be created
        data = Account.objects.create(
        email= "batty@gmail.com",
	    first_name= "tham",
	    last_name= "Oshi",
	    username= "sticker",
	    password= "slammer"
        )
        testPut = self.client.post('/api/accounts/', data)
        testResponse = testPut.json()
        self.assertEqual(testResponse.status_code,200)
        response = self.client.get("/api/accounts/")
        content = response.json()
        for account in content["accounts"]:
            if account["first_name"] == "tham":
                self.assertEqual(account['id'], data.id)
                self.account2 = account['id']

        ## Test getting specific account
        response = self.client.get(f'/api/accounts/{self.account2}')
        content=response.json()
        self.assertEqual(content["username"], 'sticker')
    
    def test_UpdatingTheAccount(self):
        data = json.dumps({
        "email": "hekitty@gmail.com", 
        "first_name" : "matthew", 
        "last_name" : "Oshima", 
	    "password" : "tatasddasdime",
	    "username": "lucky"
        })
        response = self.client.put("/api/accounts/1", data, content_type="application/json")
        self.assertEqual(response.status_code, 200)
        response4 = self.client.get("/api/accounts/1")
        content = response4.json()
        self.assertEqual(content["username"], "lucky")
        self.assertEqual(content["first_name"], "matthew")