import json
from datetime import date, datetime
from pprint import pprint

from dropbox_sign import ApiClient, ApiException, Configuration, api, models

configuration = Configuration(
    username="YOUR_API_KEY",
    # access_token="YOUR_ACCESS_TOKEN",
)

with ApiClient(configuration) as api_client:
    signer_experience = models.SubSignerExperience(
        form_view="disabled",
    )

    form_fields_1 = models.SubUpdateFormField(
        api_id="uniqueIdHere_1",
        name="New name 1",
    )

    form_fields_2 = models.SubUpdateFormField(
        api_id="uniqueIdHere_2",
        name="New name 2",
    )

    form_fields = [
        form_fields_1,
        form_fields_2,
    ]

    template_update_request = models.TemplateUpdateRequest(
        title="Test Title",
        subject="Test Subject",
        message="Test Message",
        cc_roles=[
            "CC Role 1",
            "CC Role 2",
        ],
        signer_experience=signer_experience,
        form_fields=form_fields,
    )

    try:
        response = api.TemplateApi(api_client).template_update(
            template_id="f57db65d3f933b5316d398057a36176831451a35",
            template_update_request=template_update_request,
        )

        pprint(response)
    except ApiException as e:
        print("Exception when calling TemplateApi#template_update: %s\n" % e)
