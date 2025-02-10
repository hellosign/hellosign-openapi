from datetime import date, datetime
from pprint import pprint

from dropbox_sign import ApiClient, ApiException, Configuration, api, models

configuration = Configuration(
    username="YOUR_API_KEY",
)

with ApiClient(configuration) as api_client:
    try:
        api.SignatureRequestApi(api_client).signature_request_remove(
            signature_request_id="fa5c8a0b0f492d768749333ad6fcc214c111e967",
        )
    except ApiException as e:
        print("Exception when calling SignatureRequest#signature_request_remove: %s\n" % e)
