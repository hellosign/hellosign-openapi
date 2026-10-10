from pprint import pprint

from dropbox_sign import ApiClient, ApiException, Configuration, api, models

configuration = Configuration(
    username="YOUR_API_KEY",
    # access_token="YOUR_ACCESS_TOKEN",
)

with ApiClient(configuration) as api_client:
    team_settings_update_request = models.TeamSettingsUpdateRequest(
        data_residency=models.DataResidencySettingUpdate(
            value=models.DataResidency.EU,
        ),
        company=models.StringSettingUpdate(
            value="Northwind",
            lock_mode=models.TeamSettingLock.ORGANIZATION_ADMINS,
        ),
    )

    try:
        response = api.TeamApi(api_client).team_settings_update(
            team_settings_update_request=team_settings_update_request,
        )

        pprint(response)
    except ApiException as e:
        print("Exception when calling TeamApi#team_settings_update: %s\n" % e)
