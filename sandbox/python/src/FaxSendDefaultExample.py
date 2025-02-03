from datetime import date, datetime
from pprint import pprint

from dropbox_sign import ApiClient, ApiException, Configuration, api, models

configuration = Configuration()

with ApiClient(configuration) as api_client:
    fax_send_request = models.FaxSendRequest(
        recipient="16690000001",
        sender="16690000000",
        test_mode=True,
        cover_page_to="Jill Fax",
        cover_page_from="Faxer Faxerson",
        cover_page_message="I'm sending you a fax!",
        title="This is what the fax is about!",
        file_urls=[
            "https://api.hellosign.com/v3/fax/files/2b388914e3ae3b738bd4e2ee2850c677e6dc53d2",
        ],
    )

    try:
        response = api.FaxApi(api_client).fax_send(
            fax_send_request=fax_send_request,
        )

        pprint(response)
    except ApiException as e:
        print("Exception when calling Fax#fax_send: %s\n" % e)
