from datetime import date, datetime
from pprint import pprint

from dropbox_sign import ApiClient, ApiException, Configuration, api, models

configuration = Configuration(
    username="YOUR_API_KEY",
    # access_token="YOUR_ACCESS_TOKEN",
)

with ApiClient(configuration) as api_client:
    try:
        response = api.SignatureRequestApi(api_client).signature_request_files(
            signature_request_id="fa5c8a0b0f492d768749333ad6fcc214c111e967",
            file_type="pdf",
        )

        open("file_response.zip", "wb").write(response.read())
    except ApiException as e:
        print("Exception when calling SignatureRequest#signature_request_files: %s\n" % e)
