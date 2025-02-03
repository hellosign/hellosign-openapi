from datetime import date, datetime
from pprint import pprint

from dropbox_sign import ApiClient, ApiException, Configuration, api, models

configuration = Configuration()

with ApiClient(configuration) as api_client:
    try:
        response = api.TemplateApi(api_client).template_files(
            template_id="f57db65d3f933b5316d398057a36176831451a35",
            file_type=None,
        )

        open("file_response.zip", "wb").write(response.read())
    except ApiException as e:
        print("Exception when calling Template#template_files: %s\n" % e)
