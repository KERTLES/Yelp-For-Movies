import django
import os
import sys
import time
import json
import requests

from reviews_rest.models import UserVO

def get_users():
    print("reviews poller running")
    url = f"{os.environ['ACCOUNT_SERVICE_URL']}/api/accounts/"

    response = requests.get(url)
    
    # try:
    content = json.loads(response.content)
    # except:
    

    for account in content["accounts"]:
        UserVO.objects.update_or_create(user_name=account["username"])
        
    print(UserVO.objects.all())