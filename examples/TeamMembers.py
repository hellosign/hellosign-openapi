from pprint import pprint

from dropbox_sign import \
    ApiClient, ApiException, Configuration, apis

configuration = Configuration(
    # Configure HTTP basic authorization: api_key
    username="YOUR_API_KEY",

    # or, configure Bearer (JWT) authorization: oauth2
    # access_token="YOUR_ACCESS_TOKEN",
)

with ApiClient(configuration) as api_client:
    team_api = apis.TeamApi(api_client)

    team_id = "4fea99bfcf2b26bfccf6cea3e127fb8bb74d8d9c"

    try:
        response = team_api.team_members(team_id)
        pprint(response)
    except ApiException as e:
        print("Exception when calling Dropbox Sign API: %s\n" % e)
