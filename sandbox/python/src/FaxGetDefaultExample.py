from datetime import date, datetime
from pprint import pprint

from dropbox_sign import ApiClient, ApiException, Configuration, api, models

configuration = Configuration()

with ApiClient(configuration) as api_client:
    try:
        response = api.FaxApi(api_client).fax_get(
            fax_id="fa5c8a0b0f492d768749333ad6fcc214c111e967",
        )

        pprint(response)
    except ApiException as e:
        print("Exception when calling Fax#fax_get: %s\n" % e)
