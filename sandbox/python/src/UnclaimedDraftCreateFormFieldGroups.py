from datetime import date, datetime
from pprint import pprint

from dropbox_sign import ApiClient, ApiException, Configuration, api, models

configuration = Configuration(
    username="YOUR_API_KEY",
    # access_token="YOUR_ACCESS_TOKEN",
)

with ApiClient(configuration) as api_client:
    form_field_groups_1 = models.SubFormFieldGroup(
        group_id="RadioItemGroup1",
        group_label="Radio Item Group 1",
        requirement="require_0-1",
    )

    form_field_groups = [
        form_field_groups_1,
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

    unclaimed_draft_create_request = models.UnclaimedDraftCreateRequest(
        type="request_signature",
        test_mode=False,
        file_urls=[
            "https://www.dropbox.com/s/ad9qnhbrjjn64tu/mutual-NDA-example.pdf?dl=1",
        ],
        form_field_groups=form_field_groups,
        form_fields_per_document=form_fields_per_document,
    )

    try:
        response = api.UnclaimedDraftApi(api_client).unclaimed_draft_create(
            unclaimed_draft_create_request=unclaimed_draft_create_request,
        )

        pprint(response)
    except ApiException as e:
        print("Exception when calling UnclaimedDraft#unclaimed_draft_create: %s\n" % e)
