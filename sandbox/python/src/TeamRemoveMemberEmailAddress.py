from datetime import date, datetime
from pprint import pprint

from dropbox_sign import ApiClient, ApiException, Configuration, api, models

configuration = Configuration()

with ApiClient(configuration) as api_client:
    team_remove_member_request = models.TeamRemoveMemberRequest(
        email_address="teammate@dropboxsign.com",
        new_owner_email_address="new_teammate@dropboxsign.com",
    )

    try:
        response = api.TeamApi(api_client).team_remove_member(
            team_remove_member_request=team_remove_member_request,
        )

        pprint(response)
    except ApiException as e:
        print("Exception when calling Team#team_remove_member: %s\n" % e)
