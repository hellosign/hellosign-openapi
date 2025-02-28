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
        response = api.EmbeddedApi(api_client).embedded_sign_url(
            signature_id="50e3542f738adfa7ddd4cbd4c00d2a8ab6e4194b",
        )

        pprint(response)
    except ApiException as e:
        print("Exception when calling EmbeddedApi#embedded_sign_url: %s\n" % e)
