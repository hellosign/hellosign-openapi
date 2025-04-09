import json
from datetime import date, datetime
from pprint import pprint

from dropbox_sign import ApiClient, ApiException, Configuration, api, models

configuration = Configuration(
    username="YOUR_API_KEY",
    # access_token="YOUR_ACCESS_TOKEN",
)

with ApiClient(configuration) as api_client:
    team_add_member_request = models.TeamAddMemberRequest(
        account_id="f57db65d3f933b5316d398057a36176831451a35",
    )

    try:
        response = api.TeamApi(api_client).team_add_member(
            team_add_member_request=team_add_member_request,
            team_id="4fea99bfcf2b26bfccf6cea3e127fb8bb74d8d9c",
        )

        pprint(response)
    except ApiException as e:
        print("Exception when calling TeamApi#team_add_member: %s\n" % e)
