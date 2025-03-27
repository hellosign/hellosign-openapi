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
        response = api.TemplateApi(api_client).template_list(
            page=1,
            page_size=20,
        )

        pprint(response)
    except ApiException as e:
        print("Exception when calling TemplateApi#template_list: %s\n" % e)
