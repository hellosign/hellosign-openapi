from datetime import date, datetime
from pprint import pprint

from dropbox_sign import ApiClient, ApiException, Configuration, api, models

configuration = Configuration()

with ApiClient(configuration) as api_client:
    try:
        response = api.AccountApi(api_client).account_get()

        pprint(response)
    except ApiException as e:
        print("Exception when calling Account#account_get: %s\n" % e)
