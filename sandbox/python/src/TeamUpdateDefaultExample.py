from datetime import date, datetime
from pprint import pprint

from dropbox_sign import ApiClient, ApiException, Configuration, api, models

configuration = Configuration()

with ApiClient(configuration) as api_client:
    team_update_request = models.TeamUpdateRequest(
        name="New Team Name",
    )

    try:
        response = api.TeamApi(api_client).team_update(
            team_update_request=team_update_request,
        )

        pprint(response)
    except ApiException as e:
        print("Exception when calling Team#team_update: %s\n" % e)
