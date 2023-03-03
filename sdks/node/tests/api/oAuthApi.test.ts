import 'jest';

import { OAuthApi } from '../../api/';
import * as m from '../../model/';
import {
  getFixtureData,
  setExpectedResponse,
  diffJson,
} from '../test_utils';

const axios = require('axios');
const MockAdapter = require('axios-mock-adapter');

describe('OAuthApiTest', () => {
  let mock: typeof MockAdapter;

  beforeEach(() => {
    mock = new MockAdapter(axios);
  });

  const api = new OAuthApi();

  it('testCamelCaseGeneratesCorrectRequestPayload', () => {
    const userRequestData = {
      state: "900e06e2",
      code: "1b0d28d90c86c141",
      grantType: "authorization_code",
      clientId: "cc91c61d00f8bb2ece1428035716b",
      clientSecret: "1d14434088507ffa390e6f5528465"
    };

    const actualRequestData = m.OAuthTokenGenerateRequest.init({
      state: "900e06e2",
      code: "1b0d28d90c86c141",
      grant_type: "authorization_code",
      client_id: "cc91c61d00f8bb2ece1428035716b",
      client_secret: "1d14434088507ffa390e6f5528465"
    });

    setExpectedResponse(mock, {}, 200, undefined, actualRequestData);
    api.oauthTokenGenerate(userRequestData);
  });

  it('testTokenGenerate', () => {
    const requestClass = 'OAuthTokenGenerateRequest';
    const requestData = getFixtureData(requestClass)['default'];

    const responseClass = 'OAuthTokenResponse';
    const responseData = getFixtureData(responseClass)['default'];

    setExpectedResponse(mock, responseData, 200);

    const obj = m.OAuthTokenGenerateRequest.init(requestData);

    api.oauthTokenGenerate(obj).then(response => {
      const diff = diffJson(
        response.body,
        m.OAuthTokenResponse.init(responseData),
      );

      expect(response.body.constructor.name).toBe(responseClass);
      expect(diff).toBeFalsy();
    }).catch(error => {
      throw new Error('Should not have thrown error: ' + error);
    });
  });

  it('testTokenRefresh', () => {
    const requestClass = 'OAuthTokenRefreshRequest';
    const requestData = getFixtureData(requestClass)['default'];

    const responseClass = 'OAuthTokenResponse';
    const responseData = getFixtureData(responseClass)['default'];

    setExpectedResponse(mock, responseData, 200);

    const obj = m.OAuthTokenRefreshRequest.init(requestData);

    api.oauthTokenRefresh(obj).then(response => {
      const diff = diffJson(
        response.body,
        m.OAuthTokenResponse.init(responseData),
      );

      expect(response.body.constructor.name).toBe(responseClass);
      expect(diff).toBeFalsy();
    }).catch(error => {
      throw new Error('Should not have thrown error: ' + error);
    });
  });
});
