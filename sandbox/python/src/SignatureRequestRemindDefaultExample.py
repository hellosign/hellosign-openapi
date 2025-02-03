from datetime import date, datetime
from pprint import pprint

from dropbox_sign import ApiClient, ApiException, Configuration, api, models

configuration = Configuration()

with ApiClient(configuration) as api_client:
    signature_request_remind_request = models.SignatureRequestRemindRequest(
        email_address="john@example.com",
    )

    try:
        response = api.SignatureRequestApi(api_client).signature_request_remind(
            signature_request_id="fa5c8a0b0f492d768749333ad6fcc214c111e967",
            signature_request_remind_request=signature_request_remind_request,
        )

        pprint(response)
    except ApiException as e:
        print("Exception when calling SignatureRequest#signature_request_remind: %s\n" % e)
