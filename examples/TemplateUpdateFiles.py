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
    template_api = apis.TemplateApi(api_client)

    data = models.TemplateUpdateFilesRequest(
        files=[open("example_signature_request.pdf", "rb")],
    )

    template_id = "5de8179668f2033afac48da1868d0093bf133266"

    try:
        response = template_api.template_update_files(template_id, data)
        pprint(response)
    except ApiException as e:
        print("Exception when calling Dropbox Sign API: %s\n" % e)
