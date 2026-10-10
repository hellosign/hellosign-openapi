from pprint import pprint

from dropbox_sign import ApiClient, ApiException, Configuration, api, models

configuration = Configuration(
    username="YOUR_API_KEY",
    # access_token="YOUR_ACCESS_TOKEN",
)

with ApiClient(configuration) as api_client:
    account_settings_update_request = models.AccountSettingsUpdateRequest(
        date_format=models.DateFormat.MM_SLASH_DD_SLASH_YYYY,
        required_signature_types=[
            models.RequiredSignatureType.DRAW,
            models.RequiredSignatureType.TYPE,
        ],
        should_enable_tamper_proof=False,
        unset=["company"],
    )

    try:
        response = api.AccountApi(api_client).account_settings_update(
            account_settings_update_request=account_settings_update_request,
        )

        pprint(response)
    except ApiException as e:
        print("Exception when calling AccountApi#account_settings_update: %s\n" % e)
