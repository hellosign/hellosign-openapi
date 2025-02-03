from datetime import date, datetime
from pprint import pprint

from dropbox_sign import ApiClient, ApiException, Configuration, api, models

configuration = Configuration()

with ApiClient(configuration) as api_client:
    try:
        response = api.TeamApi(api_client).team_sub_teams(
            team_id="4fea99bfcf2b26bfccf6cea3e127fb8bb74d8d9c",
            page=1,
            page_size=20,
        )

        pprint(response)
    except ApiException as e:
        print("Exception when calling Team#team_sub_teams: %s\n" % e)
