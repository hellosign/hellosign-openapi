import json
from datetime import date, datetime
from pprint import pprint

from dropbox_sign import ApiClient, ApiException, Configuration, api, models

configuration = Configuration(
    username="YOUR_API_KEY",
)

with ApiClient(configuration) as api_client:
    fax_line_remove_user_request = models.FaxLineRemoveUserRequest(
        number="[FAX_NUMBER]",
        email_address="member@dropboxsign.com",
    )

    try:
        response = api.FaxLineApi(api_client).fax_line_remove_user(
            fax_line_remove_user_request=fax_line_remove_user_request,
        )

        pprint(response)
    except ApiException as e:
        print("Exception when calling FaxLineApi#fax_line_remove_user: %s\n" % e)
