from datetime import date, datetime
from pprint import pprint

from dropbox_sign import ApiClient, ApiException, Configuration, api, models

configuration = Configuration()

with ApiClient(configuration) as api_client:
    field_options = models.SubFieldOptions(
        date_format="DD - MM - YYYY",
    )

    signing_options = models.SubSigningOptions(
        default_type="draw",
        draw=True,
        phone=False,
        type=True,
        upload=True,
    )

    signers_1 = models.SubSignatureRequestSigner(
        name="Jack",
        email_address="jack@example.com",
        order=0,
    )

    signers_2 = models.SubSignatureRequestSigner(
        name="Jill",
        email_address="jill@example.com",
        order=1,
    )

    signers = [
        signers_1,
        signers_2,
    ]

    signature_request_send_request = models.SignatureRequestSendRequest(
        message="Please sign this NDA and then we can discuss more. Let me know if you\nhave any questions.",
        subject="The NDA we talked about",
        test_mode=True,
        title="NDA with Acme Co.",
        file_urls=[
            "https://www.dropbox.com/s/ad9qnhbrjjn64tu/mutual-NDA-example.pdf?dl=1",
        ],
        cc_email_addresses=[
            "lawyer1@dropboxsign.com",
            "lawyer2@dropboxsign.com",
        ],
        metadata={
            "custom_id": 1234,
            "custom_text": "NDA #9",
        },
        field_options=field_options,
        signing_options=signing_options,
        signers=signers,
    )

    try:
        response = api.SignatureRequestApi(api_client).signature_request_send(
            signature_request_send_request=signature_request_send_request,
        )

        pprint(response)
    except ApiException as e:
        print("Exception when calling SignatureRequest#signature_request_send: %s\n" % e)
