from pprint import pprint

from dropbox_sign import ApiClient, ApiException, Configuration, api, models

configuration = Configuration(
    username="YOUR_API_KEY",
)

with ApiClient(configuration) as api_client:
    editor_options = models.SubEditorPageOptions(
        force_upload_page=False,
        force_editor_page=True,
        force_review_page=True,
    )
    fax_draft_create_request = models.FaxDraftCreateRequest(
        client_id="b6b8e7deaf8f0b95c029dca049356d4a2cf9710a",
        file_urls=[
            "https://www.dropbox.com/s/ad9qnhbrjjn64tu/mutual-NDA-example.pdf?dl=1",
        ],
        recipients=["+14155552671"],
        editor_options=editor_options,
        test_mode=True,
    )

    try:
        response = api.FaxApi(api_client).fax_draft_create(
            fax_draft_create_request=fax_draft_create_request,
        )

        pprint(response)
    except ApiException as e:
        print("Exception when calling FaxApi#fax_draft_create: %s\n" % e)
