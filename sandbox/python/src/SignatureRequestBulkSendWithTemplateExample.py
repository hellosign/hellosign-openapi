import json
from datetime import date, datetime
from pprint import pprint

from dropbox_sign import ApiClient, ApiException, Configuration, api, models

configuration = Configuration(
    username="YOUR_API_KEY",
    # access_token="YOUR_ACCESS_TOKEN",
)

with ApiClient(configuration) as api_client:
    signer_list_2_custom_fields_1 = models.SubBulkSignerListCustomField(
        name="company",
        value="123 LLC",
    )

    signer_list_2_custom_fields = [
        signer_list_2_custom_fields_1,
    ]

    signer_list_2_signers_1 = models.SubSignatureRequestTemplateSigner(
        role="Client",
        name="Mary",
        email_address="mary@example.com",
        pin="gd9as5b",
    )

    signer_list_2_signers = [
        signer_list_2_signers_1,
    ]

    signer_list_1_custom_fields_1 = models.SubBulkSignerListCustomField(
        name="company",
        value="ABC Corp",
    )

    signer_list_1_custom_fields = [
        signer_list_1_custom_fields_1,
    ]

    signer_list_1_signers_1 = models.SubSignatureRequestTemplateSigner(
        role="Client",
        name="George",
        email_address="george@example.com",
        pin="d79a3td",
    )

    signer_list_1_signers = [
        signer_list_1_signers_1,
    ]

    signer_list_1 = models.SubBulkSignerList(
        custom_fields=signer_list_1_custom_fields,
        signers=signer_list_1_signers,
    )

    signer_list_2 = models.SubBulkSignerList(
        custom_fields=signer_list_2_custom_fields,
        signers=signer_list_2_signers,
    )

    signer_list = [
        signer_list_1,
        signer_list_2,
    ]

    ccs_1 = models.SubCC(
        role="Accounting",
        email_address="accounting@example.com",
    )

    ccs = [
        ccs_1,
    ]

    signature_request_bulk_send_with_template_request = models.SignatureRequestBulkSendWithTemplateRequest(
        template_ids=[
            "c26b8a16784a872da37ea946b9ddec7c1e11dff6",
        ],
        message="Glad we could come to an agreement.",
        subject="Purchase Order",
        test_mode=True,
        signer_list=signer_list,
        ccs=ccs,
    )

    try:
        response = api.SignatureRequestApi(api_client).signature_request_bulk_send_with_template(
            signature_request_bulk_send_with_template_request=signature_request_bulk_send_with_template_request,
        )

        pprint(response)
    except ApiException as e:
        print("Exception when calling SignatureRequestApi#signature_request_bulk_send_with_template: %s\n" % e)
