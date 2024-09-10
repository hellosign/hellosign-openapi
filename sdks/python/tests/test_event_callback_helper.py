import json
import unittest

from dropbox_sign import EventCallbackHelper
from dropbox_sign.models import EventCallbackRequest
from test_utils import get_fixture_data


class TestEventCallbackHelper(unittest.TestCase):
    def test_is_valid(self):
        api_key = "324e3b0840f065eb51f3fd63231d0d33daa35d4ed10d27718839e81737065782"
        api_key_rev = api_key[::-1]

        account_data = get_fixture_data("EventCallbackHelper_AccountCallbacks")

        for key, value in account_data.items():
            obj = EventCallbackRequest.init(value)

            self.assertTrue(EventCallbackHelper.is_valid(api_key, obj))
            self.assertFalse(EventCallbackHelper.is_valid(api_key_rev, obj))
            self.assertEqual(
                EventCallbackHelper.EVENT_TYPE_ACCOUNT_CALLBACK,
                EventCallbackHelper.get_callback_type(obj),
            )

        app_data = get_fixture_data("EventCallbackHelper_AppCallbacks")

        for key, value in app_data.items():
            obj = EventCallbackRequest.init(value)

            self.assertTrue(EventCallbackHelper.is_valid(api_key, obj))
            self.assertFalse(EventCallbackHelper.is_valid(api_key_rev, obj))
            self.assertEqual(
                EventCallbackHelper.EVENT_TYPE_APP_CALLBACK,
                EventCallbackHelper.get_callback_type(obj),
            )


if __name__ == "__main__":
    unittest.main()
