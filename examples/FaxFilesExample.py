import json
from datetime import date, datetime
from pprint import pprint

from dropbox_sign import ApiClient, ApiException, Configuration, api, models

configuration = Configuration(
    username="YOUR_API_KEY",
)

with ApiClient(configuration) as api_client:
    try:
        response = api.FaxApi(api_client).fax_files(
            fax_id="fa5c8a0b0f492d768749333ad6fcc214c111e967",
        )

        open("./file_response", "wb").write(response.read())
    except ApiException as e:
        print("Exception when calling FaxApi#fax_files: %s\n" % e)
