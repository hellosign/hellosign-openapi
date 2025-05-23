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
        api.ApiAppApi(api_client).api_app_delete(
            client_id="0dd3b823a682527788c4e40cb7b6f7e9",
        )
    except ApiException as e:
        print("Exception when calling ApiAppApi#api_app_delete: %s\n" % e)
