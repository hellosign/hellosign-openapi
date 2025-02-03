from datetime import date, datetime
from pprint import pprint

from dropbox_sign import ApiClient, ApiException, Configuration, api, models

configuration = Configuration()

with ApiClient(configuration) as api_client:
    team_create_request = models.TeamCreateRequest(
        name="New Team Name",
    )

    try:
        response = api.TeamApi(api_client).team_create(
            team_create_request=team_create_request,
        )

        pprint(response)
    except ApiException as e:
        print("Exception when calling Team#team_create: %s\n" % e)
