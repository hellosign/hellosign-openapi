from datetime import date, datetime
from pprint import pprint

from dropbox_sign import ApiClient, ApiException, Configuration, api, models

configuration = Configuration()

with ApiClient(configuration) as api_client:
    try:
        response = api.TemplateApi(api_client).template_list(
            account_id=None,
            page=1,
            page_size=20,
            query=None,
        )

        pprint(response)
    except ApiException as e:
        print("Exception when calling Template#template_list: %s\n" % e)
