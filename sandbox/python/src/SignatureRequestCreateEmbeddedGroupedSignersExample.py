from datetime import date, datetime
from pprint import pprint

from dropbox_sign import ApiClient, ApiException, Configuration, api, models

configuration = Configuration(
    username="YOUR_API_KEY",
    # access_token="YOUR_ACCESS_TOKEN",
)

with ApiClient(configuration) as api_client:
    grouped_signers_2_signers_1 = models.SubSignatureRequestSigner(
        name="Bob",
        email_address="bob@example.com",
    )

    grouped_signers_2_signers_2 = models.SubSignatureRequestSigner(
        name="Charlie",
        email_address="charlie@example.com",
    )

    grouped_signers_2_signers = [
        grouped_signers_2_signers_1,
        grouped_signers_2_signers_2,
    ]

    grouped_signers_1_signers_1 = models.SubSignatureRequestSigner(
        name="Jack",
        email_address="jack@example.com",
    )

    grouped_signers_1_signers_2 = models.SubSignatureRequestSigner(
        name="Jill",
        email_address="jill@example.com",
    )

    grouped_signers_1_signers = [
        grouped_signers_1_signers_1,
        grouped_signers_1_signers_2,
    ]

    signing_options = models.SubSigningOptions(
        default_type="draw",
        draw=True,
        phone=False,
        type=True,
        upload=True,
    )

    grouped_signers_1 = models.SubSignatureRequestGroupedSigners(
        group="Group #1",
        order=0,
        signers=grouped_signers_1_signers,
    )

    grouped_signers_2 = models.SubSignatureRequestGroupedSigners(
        group="Group #2",
        order=1,
        signers=grouped_signers_2_signers,
    )

    grouped_signers = [
        grouped_signers_1,
        grouped_signers_2,
    ]

    signature_request_create_embedded_request = models.SignatureRequestCreateEmbeddedRequest(
        client_id="b6b8e7deaf8f0b95c029dca049356d4a2cf9710a",
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
        signing_options=signing_options,
        grouped_signers=grouped_signers,
    )

    try:
        response = api.SignatureRequestApi(api_client).signature_request_create_embedded(
            signature_request_create_embedded_request=signature_request_create_embedded_request,
        )

        pprint(response)
    except ApiException as e:
        print("Exception when calling SignatureRequest#signature_request_create_embedded: %s\n" % e)
