from pprint import pprint

from hellosign_sdk import \
    ApiClient, ApiException, Configuration, apis, models

configuration = Configuration(
    # Configure HTTP basic authorization: api_key
    username="YOUR_API_KEY",

    # or, configure Bearer (JWT) authorization: oauth2
    # access_token="YOUR_ACCESS_TOKEN",
)

with ApiClient(configuration) as api_client:
    api = apis.TemplateApi(api_client)

    data = models.TemplateUpdateFilesRequest(
        file_url=["https://app.hellosign.com/docs/example_signature_request.pdf"],
    )

    template_id = "5de8179668f2033afac48da1868d0093bf133266"

    try:
        response = api.template_update_files(template_id, data)
        pprint(response)
    except ApiException as e:
        print("Exception when calling HelloSign API: %s\n" % e)
