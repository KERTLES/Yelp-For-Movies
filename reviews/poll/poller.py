
import django
import os
import sys
import time
import json
import requests

sys.path.append("")
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "reviews_project.settings")
django.setup()
from reviews_rest.models import UserVO


def get_users():
    # url = f"{os.environ['ACCOUNT_SERVICE_URL']}/api/accounts/"

    response = requests.get("http://account-api:8000/api/accounts/")
 
    print(response)
    
    # try:
    content = json.loads(response.content)
    # except:
    print(content)
    

    for account in content["accounts"]:
        UserVO.objects.update_or_create(user_name=account["first_name"])


def poll():
    while True:
        print('Reviews poller polling for data')
        try:
            get_users()
            pass
        except Exception as e:
            print(e, file=sys.stderr)
        time.sleep(60)


if __name__ == "__main__":
    poll()
