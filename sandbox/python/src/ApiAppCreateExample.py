import json
from datetime import date, datetime
from pprint import pprint

from dropbox_sign import ApiClient, ApiException, Configuration, api, models

configuration = Configuration(
    username="YOUR_API_KEY",
    # access_token="YOUR_ACCESS_TOKEN",
)

with ApiClient(configuration) as api_client:
    oauth = models.SubOAuth(
        callback_url="https://example.com/oauth",
        scopes=[
            "basic_account_info",
            "request_signature",
        ],
    )

    white_labeling_options = models.SubWhiteLabelingOptions(
        primary_button_color="#00b3e6",
        primary_button_text_color="#ffffff",
    )

    api_app_create_request = models.ApiAppCreateRequest(
        name="My Production App",
        domains=[
            "example.com",
        ],
        custom_logo_file=open("CustomLogoFile.png", "rb").read(),
        oauth=oauth,
        white_labeling_options=white_labeling_options,
    )

    try:
        response = api.ApiAppApi(api_client).api_app_create(
            api_app_create_request=api_app_create_request,
        )

        pprint(response)
    except ApiException as e:
        print("Exception when calling ApiAppApi#api_app_create: %s\n" % e)
