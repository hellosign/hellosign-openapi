from datetime import date, datetime
from pprint import pprint

from dropbox_sign import ApiClient, ApiException, Configuration, api, models

configuration = Configuration(
    username="YOUR_API_KEY",
    # access_token="YOUR_ACCESS_TOKEN",
)

with ApiClient(configuration) as api_client:
    field_options = models.SubFieldOptions(
        date_format="DD - MM - YYYY",
    )

    merge_fields_1 = models.SubMergeField(
        name="Full Name",
        type="text",
    )

    merge_fields_2 = models.SubMergeField(
        name="Is Registered?",
        type="checkbox",
    )

    merge_fields = [
        merge_fields_1,
        merge_fields_2,
    ]

    signer_roles_1 = models.SubTemplateRole(
        name="Client",
        order=0,
    )

    signer_roles_2 = models.SubTemplateRole(
        name="Witness",
        order=1,
    )

    signer_roles = [
        signer_roles_1,
        signer_roles_2,
    ]

    template_create_embedded_draft_request = models.TemplateCreateEmbeddedDraftRequest(
        client_id="37dee8d8440c66d54cfa05d92c160882",
        message="For your approval",
        subject="Please sign this document",
        test_mode=True,
        title="Test Template",
        file_urls=[
            "https://www.dropbox.com/s/ad9qnhbrjjn64tu/mutual-NDA-example.pdf?dl=1",
        ],
        cc_roles=[
            "Manager",
        ],
        field_options=field_options,
        merge_fields=merge_fields,
        signer_roles=signer_roles,
    )

    try:
        response = api.TemplateApi(api_client).template_create_embedded_draft(
            template_create_embedded_draft_request=template_create_embedded_draft_request,
        )

        pprint(response)
    except ApiException as e:
        print("Exception when calling Template#template_create_embedded_draft: %s\n" % e)
