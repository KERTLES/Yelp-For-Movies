
import django
import os
import sys
import time
import json
import requests

ACCOUNT_SERVICE_URL = os.environ['ACCOUNT_SERVICE_URL']

sys.path.append("")
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "reviews_project.settings")
django.setup()
from reviews_rest.models import UserVO


def get_users():
    url = f"{ACCOUNT_SERVICE_URL}/api/accounts/"
    response = requests.get(url)
    content = json.loads(response.content)
    for account in content["accounts"]:
        UserVO.objects.update_or_create(user_name=account["username"])


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
