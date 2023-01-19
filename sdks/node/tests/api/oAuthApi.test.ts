import 'jest';

import { OAuthApi } from '../../api/apis';
import * as m from '../../model/models';
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
