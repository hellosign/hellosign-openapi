from datetime import date, datetime
from pprint import pprint

from dropbox_sign import ApiClient, ApiException, Configuration, api, models

configuration = Configuration()

with ApiClient(configuration) as api_client:
    try:
        response = api.TeamApi(api_client).team_invites(
            email_address=None,
        )

        pprint(response)
    except ApiException as e:
        print("Exception when calling Team#team_invites: %s\n" % e)
