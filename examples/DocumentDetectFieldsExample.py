import json
from datetime import date, datetime
from pprint import pprint

from dropbox_sign import ApiClient, ApiException, Configuration, api, models

configuration = Configuration(
    username="YOUR_API_KEY",
    # access_token="YOUR_ACCESS_TOKEN",
)

with ApiClient(configuration) as api_client:
    document_field_detection_request = models.DocumentFieldDetectionRequest(
        detection_mode="annotations",
        file=open("./example_document.pdf", "rb").read(),
        page_range="all",
    )

    try:
        response = api.DocumentApi(api_client).document_detect_fields(
            document_field_detection_request=document_field_detection_request,
        )

        pprint(response)
    except ApiException as e:
        print("Exception when calling DocumentApi#document_detect_fields: %s\n" % e)
