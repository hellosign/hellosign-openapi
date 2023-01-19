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

    signer_list_1_signer = models.SubSignatureRequestTemplateSigner(
        role="Client",
        name="George",
        email_address="george@example.com",
        pin="d79a3td",
    )

    signer_list_1_custom_fields = models.SubBulkSignerListCustomField(
        name="company",
        value="ABC Corp",
    )

    signer_list_1 = models.SubBulkSignerList(
        signers=[signer_list_1_signer],
        custom_fields=[signer_list_1_custom_fields],
    )

    signer_list_2_signer = models.SubSignatureRequestTemplateSigner(
        role="Client",
        name="Mary",
        email_address="mary@example.com",
        pin="gd9as5b",
    )

    signer_list_2_custom_fields = models.SubBulkSignerListCustomField(
        name="company",
        value="123 LLC",
    )

    signer_list_2 = models.SubBulkSignerList(
        signers=[signer_list_2_signer],
        custom_fields=[signer_list_2_custom_fields],
    )

    cc_1 = models.SubCC(
        role="Accounting",
        email_address="accounting@example.com",
    )

    data = models.SignatureRequestBulkCreateEmbeddedWithTemplateRequest(
        client_id="1a659d9ad95bccd307ecad78d72192f8",
        template_ids=["c26b8a16784a872da37ea946b9ddec7c1e11dff6"],
        subject="Purchase Order",
        message="Glad we could come to an agreement.",
        signer_list=[signer_list_1, signer_list_2],
        ccs=[cc_1],
        test_mode=True,
    )

    try:
        response = signature_request_api.signature_request_bulk_create_embedded_with_template(data)
        pprint(response)
    except ApiException as e:
        print("Exception when calling Dropbox Sign API: %s\n" % e)
