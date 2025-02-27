import json
from datetime import date, datetime
from pprint import pprint

from dropbox_sign import ApiClient, ApiException, Configuration, api, models

configuration = Configuration(
    username="YOUR_API_KEY",
    # access_token="YOUR_ACCESS_TOKEN",
)

with ApiClient(configuration) as api_client:
    try:
        api.TeamApi(api_client).team_delete()
    except ApiException as e:
        print("Exception when calling TeamApi#team_delete: %s\n" % e)
