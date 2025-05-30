import json
from datetime import date, datetime
from pprint import pprint

from dropbox_sign import ApiClient, ApiException, Configuration, api, models

configuration = Configuration(
    username="YOUR_API_KEY",
    # access_token="YOUR_ACCESS_TOKEN",
)

with ApiClient(configuration) as api_client:
    account_create_request = models.AccountCreateRequest(
        email_address="newuser@dropboxsign.com",
        client_id="cc91c61d00f8bb2ece1428035716b",
        client_secret="1d14434088507ffa390e6f5528465",
    )

    try:
        response = api.AccountApi(api_client).account_create(
            account_create_request=account_create_request,
        )

        pprint(response)
    except ApiException as e:
        print("Exception when calling AccountApi#account_create: %s\n" % e)
