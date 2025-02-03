from datetime import date, datetime
from pprint import pprint

from dropbox_sign import ApiClient, ApiException, Configuration, api, models

configuration = Configuration()

with ApiClient(configuration) as api_client:
    template_update_files_request = models.TemplateUpdateFilesRequest(
        file_urls=[
            "https://www.dropbox.com/s/ad9qnhbrjjn64tu/mutual-NDA-example.pdf?dl=1",
        ],
    )

    try:
        response = api.TemplateApi(api_client).template_update_files(
            template_id="f57db65d3f933b5316d398057a36176831451a35",
            template_update_files_request=template_update_files_request,
        )

        pprint(response)
    except ApiException as e:
        print("Exception when calling Template#template_update_files: %s\n" % e)
