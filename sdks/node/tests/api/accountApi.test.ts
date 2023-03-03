import 'jest';

import { AccountApi } from '../../api/';
import * as m from '../../model/';
import {
  getFixtureData,
  setExpectedResponse,
  diffJson,
} from '../test_utils';

const axios = require('axios');
const MockAdapter = require('axios-mock-adapter');

describe('AccountApiTest', () => {
  let mock: typeof MockAdapter;

  beforeEach(() => {
    mock = new MockAdapter(axios);
  });

  const api = new AccountApi();

  it('testHttpCodeRange', () => {
    const requestClass = 'AccountVerifyRequest';
    const requestData = getFixtureData(requestClass)['default'];

    const responseClass = 'ErrorResponse';
    const responseData = getFixtureData(responseClass)['default'];

    const code = Math.round(Math.random() * (499 - 400)) + 400;
    setExpectedResponse(mock, responseData, code);

    const obj = m.AccountVerifyRequest.init(requestData);

    api.accountVerify(obj).then(response => {
      throw new Error('Should have thrown error: ' + response);
    }).catch(error => {
      expect(error.body.constructor.name).toBe(responseClass);
    });
  });

  it('testCamelCaseGeneratesCorrectRequestPayload', () => {
    const userRequestData = {
      emailAddress: "newuser@dropboxsign.com",
      clientId: "cc91c61d00f8bb2ece1428035716b",
      clientSecret: "1d14434088507ffa390e6f5528465"
    };

    const actualRequestData = m.AccountCreateRequest.init({
      email_address: "newuser@dropboxsign.com",
      client_id: "cc91c61d00f8bb2ece1428035716b",
      client_secret: "1d14434088507ffa390e6f5528465"
    });

    setExpectedResponse(mock, {}, 200, undefined, actualRequestData);
    api.accountCreate(userRequestData);
  });

  it('testAccountCreate', () => {
    const requestClass = 'AccountCreateRequest';
    const requestData = getFixtureData(requestClass)['default'];

    const responseClass = 'AccountCreateResponse';
    const responseData = getFixtureData(responseClass)['default'];

    setExpectedResponse(mock, responseData, 200);

    const obj = m.AccountCreateRequest.init(requestData);

    api.accountCreate(obj).then(response => {
      const diff = diffJson(
        response.body,
        m.AccountCreateResponse.init(responseData),
      );

      expect(response.body.constructor.name).toBe(responseClass);
      expect(diff).toBeFalsy();
    }).catch(error => {
      throw new Error('Should not have thrown error: ' + error);
    });
  });

  it('testAccountGet', () => {
    const responseClass = 'AccountGetResponse';
    const responseData = getFixtureData(responseClass)['default'];

    setExpectedResponse(mock, responseData, 200);

    api.accountGet(undefined, "jack@example.com").then(response => {
      const diff = diffJson(
        response.body,
        m.AccountGetResponse.init(responseData),
      );

      expect(response.body.constructor.name).toBe(responseClass);
      expect(diff).toBeFalsy();
    }).catch(error => {
      throw new Error('Should not have thrown error: ' + error);
    });
  });

  it('testAccountUpdate', () => {
    const requestClass = 'AccountUpdateRequest';
    const requestData = getFixtureData(requestClass)['default'];

    const responseClass = 'AccountGetResponse';
    const responseData = getFixtureData(responseClass)['default'];

    setExpectedResponse(mock, responseData, 200);

    const obj = m.AccountUpdateRequest.init(requestData);

    api.accountUpdate(obj).then(response => {
      const diff = diffJson(
        response.body,
        m.AccountGetResponse.init(responseData),
      );

      expect(response.body.constructor.name).toBe(responseClass);
      expect(diff).toBeFalsy();
    }).catch(error => {
      throw new Error('Should not have thrown error: ' + error);
    });
  });

  it('testAccountVerify', () => {
    const requestClass = 'AccountVerifyRequest';
    const requestData = getFixtureData(requestClass)['default'];

    const responseClass = 'AccountVerifyResponse';
    const responseData = getFixtureData(responseClass)['default'];

    setExpectedResponse(mock, responseData, 200);

    const obj = m.AccountVerifyRequest.init(requestData);

    api.accountVerify(obj).then(response => {
      const diff = diffJson(
        response.body,
        m.AccountVerifyResponse.init(responseData),
      );

      expect(response.body.constructor.name).toBe(responseClass);
      expect(diff).toBeFalsy();
    }).catch(error => {
      throw new Error('Should not have thrown error: ' + error);
    });
  });
});
