import 'jest';

import { FaxApi } from '../../api/';
import * as m from '../../model/';
import {
  getFixtureData,
  setExpectedResponse,
  diffJson,
} from '../test_utils';

const axios = require('axios');
const fs = require('fs');
const MockAdapter = require('axios-mock-adapter');

describe('FaxApiTest', () => {
  let mock: typeof MockAdapter;

  beforeEach(() => {
    mock = new MockAdapter(axios);
  });

  const api = new FaxApi();
  const rootFilePath = __dirname + '/../../test_fixtures';

  it('testFaxSend', () => {
    const requestClass = 'FaxSendRequest';
    const requestData = getFixtureData(requestClass)['default'];

    const responseClass = 'FaxGetResponse';
    const responseData = getFixtureData(responseClass)['default'];

    setExpectedResponse(mock, responseData, 200);

    const obj = m.FaxSendRequest.init(requestData);
    obj.files = [fs.createReadStream(`${rootFilePath}/pdf-sample.pdf`)];

    api.faxSend(obj).then(response => {
      const diff = diffJson(
        response.body,
        m.FaxGetResponse.init(responseData),
      );

      expect(response.body.constructor.name).toBe(responseClass);
      expect(diff).toBeFalsy();
    }).catch(error => {
      throw new Error('Should not have thrown error: ' + error);
    });
  });

  it('testFaxGet', () => {
    const faxId = 'c2e9691c85d9d6fa6ae773842e3680b2b8650f1d';

    const responseClass = 'FaxGetResponse';
    const responseData = getFixtureData(responseClass)['default'];

    setExpectedResponse(mock, responseData, 200);

    api.faxGet(faxId).then(response => {
      const diff = diffJson(
        response.body,
        m.FaxGetResponse.init(responseData),
      );

      expect(response.body.constructor.name).toBe(responseClass);
      expect(diff).toBeFalsy();
    }).catch(error => {
      throw new Error('Should not have thrown error: ' + error);
    });
  });

  it('testFaxList', () => {
    const responseClass = 'FaxListResponse';
    const responseData = getFixtureData(responseClass)['default'];

    setExpectedResponse(mock, responseData, 200);

    api.faxList().then(response => {
      const diff = diffJson(
        response.body,
        m.FaxListResponse.init(responseData),
      );

      expect(response.body.constructor.name).toBe(responseClass);
      expect(diff).toBeFalsy();
    }).catch(error => {
      throw new Error('Should not have thrown error: ' + error);
    });
  });
});
