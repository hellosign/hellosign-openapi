from pprint import pprint

from dropbox_sign import \
    ApiClient, ApiException, Configuration, apis, models

configuration = Configuration(
    # Configure HTTP basic authorization: api_key
    username="YOUR_API_KEY",

    # or, configure Bearer (JWT) authorization: oauth2
    # access_token="YOUR_ACCESS_TOKEN",
)

with ApiClient(configuration) as api_client:
    signature_request_api = apis.SignatureRequestApi(api_client)

    signer_1 = models.SubSignatureRequestSigner(
        email_address="jack@example.com",
        name="Jack",
        order=0,
    )

    signer_2 = models.SubSignatureRequestSigner(
        email_address="jill@example.com",
        name="Jill",
        order=1,
    )

    signing_options = models.SubSigningOptions(
        draw=True,
        type=True,
        upload=True,
        phone=True,
        default_type="draw",
    )

    field_options = models.SubFieldOptions(
        date_format="DD - MM - YYYY",
    )

    data = models.SignatureRequestSendRequest(
        title="NDA with Acme Co.",
        subject="The NDA we talked about",
        message="Please sign this NDA and then we can discuss more. Let me know if you have any questions.",
        signers=[signer_1, signer_2],
        cc_email_addresses=[
            "lawyer1@dropboxsign.com",
            "lawyer2@dropboxsign.com",
        ],
        files=[open("example_signature_request.pdf", "rb")],
        metadata={
            "custom_id": 1234,
            "custom_text": "NDA #9",
        },
        signing_options=signing_options,
        field_options=field_options,
        test_mode=True,
    )

    try:
        response = signature_request_api.signature_request_send(data)
        pprint(response)
    except ApiException as e:
        print("Exception when calling Dropbox Sign API: %s\n" % e)
