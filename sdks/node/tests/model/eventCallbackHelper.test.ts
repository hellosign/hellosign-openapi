import 'jest';
import { EventCallbackRequest, EventCallbackHelper } from '../../model';

import { getFixtureData } from '../test_utils';

describe('eventCallbackHelper', () => {
  const apiKey = '324e3b0840f065eb51f3fd63231d0d33daa35d4ed10d27718839e81737065782';
  const apiKeyRev = apiKey.split('').reverse().join('');

  const account_keys = getFixtureData('EventCallbackHelper_AccountCallbacks');
  for (const [key, data] of Object.entries(account_keys)) {
    it(`account event callback for type ${key} is valid`, () => {
      const obj = EventCallbackRequest.init(data);

      expect(EventCallbackHelper.isValid(apiKey, obj)).toBeTruthy();
      expect(EventCallbackHelper.isValid(apiKeyRev, obj)).toBeFalsy();
      expect(EventCallbackHelper.getCallbackType(obj))
        .toEqual(EventCallbackHelper.EVENT_TYPE_ACCOUNT_CALLBACK);
    });
  }

  const app_keys = getFixtureData('EventCallbackHelper_AppCallbacks');
  for (const [key, data] of Object.entries(app_keys)) {
    it(`app event callback for type ${key} is valid`, () => {
      const obj = EventCallbackRequest.init(data);

      expect(EventCallbackHelper.isValid(apiKey, obj)).toBeTruthy();
      expect(EventCallbackHelper.isValid(apiKeyRev, obj)).toBeFalsy();
      expect(EventCallbackHelper.getCallbackType(obj))
        .toEqual(EventCallbackHelper.EVENT_TYPE_APP_CALLBACK);
    });
  }
});
