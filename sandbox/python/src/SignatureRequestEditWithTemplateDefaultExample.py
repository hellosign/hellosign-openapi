from datetime import date, datetime
from pprint import pprint

from dropbox_sign import ApiClient, ApiException, Configuration, api, models

configuration = Configuration()

with ApiClient(configuration) as api_client:
    signing_options = models.SubSigningOptions(
        default_type="draw",
        draw=True,
        phone=False,
        type=True,
        upload=True,
    )

    signers_1 = models.SubSignatureRequestTemplateSigner(
        role="Client",
        name="George",
        email_address="george@example.com",
    )

    signers = [
        signers_1,
    ]

    ccs_1 = models.SubCC(
        role="Accounting",
        email_address="accounting@example.com",
    )

    ccs = [
        ccs_1,
    ]

    custom_fields_1 = models.SubCustomField(
        name="Cost",
        editor="Client",
        required=True,
        value="$20,000",
    )

    custom_fields = [
        custom_fields_1,
    ]

    signature_request_edit_with_template_request = models.SignatureRequestEditWithTemplateRequest(
        template_ids=[
            "61a832ff0d8423f91d503e76bfbcc750f7417c78",
        ],
        message="Glad we could come to an agreement.",
        subject="Purchase Order",
        test_mode=True,
        signing_options=signing_options,
        signers=signers,
        ccs=ccs,
        custom_fields=custom_fields,
    )

    try:
        response = api.SignatureRequestApi(api_client).signature_request_edit_with_template(
            signature_request_id="fa5c8a0b0f492d768749333ad6fcc214c111e967",
            signature_request_edit_with_template_request=signature_request_edit_with_template_request,
        )

        pprint(response)
    except ApiException as e:
        print("Exception when calling SignatureRequest#signature_request_edit_with_template: %s\n" % e)
