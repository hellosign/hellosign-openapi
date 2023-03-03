import 'jest';

import { ReportApi } from '../../api/';
import * as m from '../../model/';
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

  it('testCamelCaseGeneratesCorrectRequestPayload', () => {
    const userRequestData = {
      startDate: "09/01/2020",
      endDate: "09/01/2020",
      reportType: [
        m.ReportCreateRequest.ReportTypeEnum.UserActivity,
        m.ReportCreateRequest.ReportTypeEnum.DocumentStatus
      ]
    };

    const actualRequestData = m.ReportCreateRequest.init({
      start_date: "09/01/2020",
      end_date: "09/01/2020",
      report_type: [
        "user_activity",
        "document_status"
      ]
    });

    setExpectedResponse(mock, {}, 200, undefined, actualRequestData);
    api.reportCreate(userRequestData);
  });

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
