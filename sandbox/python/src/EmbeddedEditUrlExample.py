import json
from datetime import date, datetime
from pprint import pprint

from dropbox_sign import ApiClient, ApiException, Configuration, api, models

configuration = Configuration(
    username="YOUR_API_KEY",
    # access_token="YOUR_ACCESS_TOKEN",
)

with ApiClient(configuration) as api_client:
    merge_fields = [
    ]

    embedded_edit_url_request = models.EmbeddedEditUrlRequest(
        cc_roles=[
            "",
        ],
        merge_fields=merge_fields,
    )

    try:
        response = api.EmbeddedApi(api_client).embedded_edit_url(
            template_id="f57db65d3f933b5316d398057a36176831451a35",
            embedded_edit_url_request=embedded_edit_url_request,
        )

        pprint(response)
    except ApiException as e:
        print("Exception when calling EmbeddedApi#embedded_edit_url: %s\n" % e)
