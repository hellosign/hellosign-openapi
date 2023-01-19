import json
import unittest

from dropbox_sign import EventCallbackHelper
from dropbox_sign.models import EventCallbackRequest
from test_utils import get_fixture_data


class TestEventCallbackHelper(unittest.TestCase):
    def test_is_valid(self):
        fixture_data = get_fixture_data('EventCallbackHelper')

        api_key = '324e3b0840f065eb51f3fd63231d0d33daa35d4ed10d27718839e81737065782'
        api_key_rev = api_key[::-1]

        for key, value in fixture_data.items():
            obj = EventCallbackRequest.init(value)

            self.assertTrue(EventCallbackHelper.is_valid(api_key, obj))
            self.assertFalse(EventCallbackHelper.is_valid(api_key_rev, obj))


if __name__ == '__main__':
    unittest.main()
