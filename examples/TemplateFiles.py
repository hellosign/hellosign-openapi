from pprint import pprint

from dropbox_sign import \
    ApiClient, ApiException, Configuration, apis

configuration = Configuration(
    # Configure HTTP basic authorization: api_key
    username="YOUR_API_KEY",

    # or, configure Bearer (JWT) authorization: oauth2
    # access_token="YOUR_ACCESS_TOKEN",
)

with ApiClient(configuration) as api_client:
    template_api = apis.TemplateApi(api_client)

    template_id = "5de8179668f2033afac48da1868d0093bf133266"

    try:
        response = template_api.template_files(template_id, file_type="pdf")
        open('file_response.pdf', 'wb').write(response.read())
    except ApiException as e:
        print("Exception when calling Dropbox Sign API: %s\n" % e)
