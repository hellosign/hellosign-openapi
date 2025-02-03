from datetime import date, datetime
from pprint import pprint

from dropbox_sign import ApiClient, ApiException, Configuration, api, models

configuration = Configuration()

with ApiClient(configuration) as api_client:
    template_add_user_request = models.TemplateAddUserRequest(
        email_address="george@dropboxsign.com",
    )

    try:
        response = api.TemplateApi(api_client).template_add_user(
            template_id="f57db65d3f933b5316d398057a36176831451a35",
            template_add_user_request=template_add_user_request,
        )

        pprint(response)
    except ApiException as e:
        print("Exception when calling Template#template_add_user: %s\n" % e)
