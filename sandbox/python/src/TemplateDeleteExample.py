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
        api.TemplateApi(api_client).template_delete(
            template_id="f57db65d3f933b5316d398057a36176831451a35",
        )
    except ApiException as e:
        print("Exception when calling TemplateApi#template_delete: %s\n" % e)
