from pprint import pprint

from dropbox_sign import ApiClient, ApiException, Configuration, api

configuration = Configuration(
    username="YOUR_API_KEY",
    # access_token="YOUR_ACCESS_TOKEN",
)

with ApiClient(configuration) as api_client:
    try:
        response = api.AccountApi(api_client).account_settings_get()
        company = response.settings.company

        pprint(response)
        pprint({
            "account_id": response.account_id,
            "company": {
                "value": company.value,
                "is_inherited": company.is_inherited,
                "source": company.source,
                "type": company.type,
                "writable": company.writable,
                "lock": {
                    "mode": company.lock.mode,
                    "source": company.lock.source,
                },
            },
            "warnings": response.warnings,
        })
    except ApiException as e:
        print("Exception when calling AccountApi#account_settings_get: %s\n" % e)
