import json
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

    form_fields_per_document_1 = models.SubFormFieldsPerDocumentRadio(
        document_index=0,
        api_id="uniqueIdHere_1",
        type="radio",
        required=False,
        signer="0",
        width=18,
        height=18,
        x=112,
        y=328,
        group="RadioItemGroup1",
        is_checked=True,
        name="",
        page=1,
    )

    form_fields_per_document_2 = models.SubFormFieldsPerDocumentRadio(
        document_index=0,
        api_id="uniqueIdHere_2",
        type="radio",
        required=False,
        signer="0",
        width=18,
        height=18,
        x=112,
        y=370,
        group="RadioItemGroup1",
        is_checked=False,
        name="",
        page=1,
    )

    form_fields_per_document = [
        form_fields_per_document_1,
        form_fields_per_document_2,
    ]

    form_field_groups_1 = models.SubFormFieldGroup(
        group_id="RadioItemGroup1",
        group_label="Radio Item Group 1",
        requirement="require_0-1",
    )

    form_field_groups = [
        form_field_groups_1,
    ]

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

    template_create_request = models.TemplateCreateRequest(
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
        signer_roles=signer_roles,
        form_fields_per_document=form_fields_per_document,
        form_field_groups=form_field_groups,
        merge_fields=merge_fields,
    )

    try:
        response = api.TemplateApi(api_client).template_create(
            template_create_request=template_create_request,
        )

        pprint(response)
    except ApiException as e:
        print("Exception when calling TemplateApi#template_create: %s\n" % e)
