import json
from datetime import date, datetime
from pprint import pprint

from dropbox_sign import ApiClient, ApiException, Configuration, api, models

configuration = Configuration(
    username="YOUR_API_KEY",
    # access_token="YOUR_ACCESS_TOKEN",
)

with ApiClient(configuration) as api_client:
    signing_options = models.SubSigningOptions(
        default_type="draw",
        draw=True,
        phone=False,
        type=True,
        upload=True,
    )

    signer_experience = models.SubSignerExperience(
        form_view="disabled",
    )

    signers_1 = models.SubSignatureRequestTemplateSigner(
        role="Client",
        name="George",
        email_address="george@example.com",
    )

    signers = [
        signers_1,
    ]

    signature_request_create_embedded_with_template_request = models.SignatureRequestCreateEmbeddedWithTemplateRequest(
        client_id="b6b8e7deaf8f0b95c029dca049356d4a2cf9710a",
        template_ids=[
            "c26b8a16784a872da37ea946b9ddec7c1e11dff6",
        ],
        message="Glad we could come to an agreement.",
        subject="Purchase Order",
        test_mode=True,
        signing_options=signing_options,
        signer_experience=signer_experience,
        signers=signers,
    )

    try:
        response = api.SignatureRequestApi(api_client).signature_request_create_embedded_with_template(
            signature_request_create_embedded_with_template_request=signature_request_create_embedded_with_template_request,
        )

        pprint(response)
    except ApiException as e:
        print("Exception when calling SignatureRequestApi#signature_request_create_embedded_with_template: %s\n" % e)
