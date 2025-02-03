from datetime import date, datetime
from pprint import pprint

from dropbox_sign import ApiClient, ApiException, Configuration, api, models

configuration = Configuration()

with ApiClient(configuration) as api_client:
    try:
        response = api.ApiAppApi(api_client).api_app_get(
            client_id="0dd3b823a682527788c4e40cb7b6f7e9",
        )

        pprint(response)
    except ApiException as e:
        print("Exception when calling ApiApp#api_app_get: %s\n" % e)
