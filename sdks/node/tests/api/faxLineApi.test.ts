import 'jest';

import { FaxLineApi } from '../../api/';
import * as m from '../../model/';
import {
  getFixtureData,
  setExpectedResponse,
  diffJson,
} from '../test_utils';

const axios = require('axios');
const fs = require('fs');
const MockAdapter = require('axios-mock-adapter');

describe('FaxLineApiTest', () => {
  let mock: typeof MockAdapter;

  beforeEach(() => {
    mock = new MockAdapter(axios);
  });

  const api = new FaxLineApi();
  const rootFilePath = __dirname + '/../../test_fixtures';

  it('testFaxLineCreate', () => {
    const requestClass = 'FaxLineCreateRequest';
    const requestData = getFixtureData(requestClass)['default'];

    const responseClass = 'FaxLineResponse';
    const responseData = getFixtureData(responseClass)['default'];

    setExpectedResponse(mock, responseData, 200);

    api.faxLineCreate(requestData).then(response => {
      const diff = diffJson(
        response.body,
        m.FaxLineResponse.init(responseData),
      );

      expect(response.body.constructor.name).toBe(responseClass);
      expect(diff).toBeFalsy();
    }).catch(error => {
      throw new Error('Should not have thrown error: ' + error);
    });
  });

  it('testFaxLineGet', () => {
    const faxLineNumber = '14155557897';

    const responseClass = 'FaxLineResponse';
    const responseData = getFixtureData(responseClass)['default'];

    setExpectedResponse(mock, responseData, 200);

    api.faxLineGet(faxLineNumber).then(response => {
      const diff = diffJson(
        response.body,
        m.FaxLineResponse.init(responseData),
      );

      expect(response.body.constructor.name).toBe(responseClass);
      expect(diff).toBeFalsy();
    }).catch(error => {
      throw new Error('Should not have thrown error: ' + error);
    });
  });

  it('testFaxLineList', () => {
    const responseClass = 'FaxLineListResponse';
    const responseData = getFixtureData(responseClass)['default'];

    setExpectedResponse(mock, responseData, 200);

    api.faxLineList().then(response => {
      const diff = diffJson(
        response.body,
        m.FaxLineListResponse.init(responseData),
      );

      expect(response.body.constructor.name).toBe(responseClass);
      expect(diff).toBeFalsy();
    }).catch(error => {
      throw new Error('Should not have thrown error: ' + error);
    });
  });
});
