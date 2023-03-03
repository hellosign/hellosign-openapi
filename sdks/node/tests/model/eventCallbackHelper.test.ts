import 'jest';
import { EventCallbackRequest, EventCallbackHelper } from '../../model';

import { getFixtureData } from '../test_utils';

describe('eventCallbackHelper', () => {
  const fixtureData = getFixtureData('EventCallbackHelper');
  const apiKey = '324e3b0840f065eb51f3fd63231d0d33daa35d4ed10d27718839e81737065782';
  const apiKeyRev = apiKey.split('').reverse().join('');

  for (const [key, data] of Object.entries(fixtureData)) {
    it(`event callback for type ${key} is valid`, () => {
      const obj = EventCallbackRequest.init(data);

      expect(EventCallbackHelper.isValid(apiKey, obj)).toBeTruthy();
      expect(EventCallbackHelper.isValid(apiKeyRev, obj)).toBeFalsy();
    });
  }
});
