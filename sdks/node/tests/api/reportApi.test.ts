import 'jest';

import { ReportApi } from '../../api/apis';
import * as m from '../../model/models';
import {
  getFixtureData,
  setExpectedResponse,
  diffJson,
} from '../test_utils';

const axios = require('axios');
const MockAdapter = require('axios-mock-adapter');

describe('ReportApiTest', () => {
  let mock: typeof MockAdapter;

  beforeEach(() => {
    mock = new MockAdapter(axios);
  });

  const api = new ReportApi();

  it('testReportCreate', () => {
    const requestClass = 'ReportCreateRequest';
    const requestData = getFixtureData(requestClass)['default'];

    const responseClass = 'ReportCreateResponse';
    const responseData = getFixtureData(responseClass)['default'];

    setExpectedResponse(mock, responseData, 200);

    const obj = m.ReportCreateRequest.init(requestData);

    api.reportCreate(obj).then(response => {
      const diff = diffJson(
        response.body,
        m.ReportCreateResponse.init(responseData),
      );

      expect(response.body.constructor.name).toBe(responseClass);
      expect(diff).toBeFalsy();
    }).catch(error => {
      throw new Error('Should not have thrown error: ' + error);
    });
  });
});
