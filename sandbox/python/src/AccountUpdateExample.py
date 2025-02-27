import json
from datetime import date, datetime
from pprint import pprint

from dropbox_sign import ApiClient, ApiException, Configuration, api, models

configuration = Configuration(
    username="YOUR_API_KEY",
    # access_token="YOUR_ACCESS_TOKEN",
)

with ApiClient(configuration) as api_client:
    account_update_request = models.AccountUpdateRequest(
        callback_url="https://www.example.com/callback",
        locale="en-US",
    )

    try:
        response = api.AccountApi(api_client).account_update(
            account_update_request=account_update_request,
        )

        pprint(response)
    except ApiException as e:
        print("Exception when calling AccountApi#account_update: %s\n" % e)
