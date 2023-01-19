import 'jest';

import { UnclaimedDraftApi } from '../../api/apis';
import * as m from '../../model/models';
import {
  getFixtureData,
  setExpectedResponse,
  diffJson,
} from '../test_utils';

const axios = require('axios');
const fs = require('fs');
const MockAdapter = require('axios-mock-adapter');

describe('UnclaimedDraftApiTest', () => {
  let mock: typeof MockAdapter;

  beforeEach(() => {
    mock = new MockAdapter(axios);
  });

  const api = new UnclaimedDraftApi();
  const rootFilePath = __dirname + '/../../test_fixtures';

  it('testUnclaimedDraftCreate', () => {
    const requestClass = 'UnclaimedDraftCreateRequest';
    const requestData = getFixtureData(requestClass)['default'];

    const responseClass = 'UnclaimedDraftCreateResponse';
    const responseData = getFixtureData(responseClass)['default'];

    setExpectedResponse(mock, responseData, 200);

    const obj = m.UnclaimedDraftCreateRequest.init(requestData);
    obj.files = [fs.createReadStream(`${rootFilePath}/pdf-sample.pdf`)];

    api.unclaimedDraftCreate(obj).then(response => {
      const diff = diffJson(
        response.body,
        m.UnclaimedDraftCreateResponse.init(responseData),
      );

      expect(response.body.constructor.name).toBe(responseClass);
      expect(diff).toBeFalsy();
    }).catch(error => {
      throw new Error('Should not have thrown error: ' + error);
    });
  });

  it('testUnclaimedDraftCreateEmbedded', () => {
    const requestClass = 'UnclaimedDraftCreateEmbeddedRequest';
    const requestData = getFixtureData(requestClass)['default'];

    const responseClass = 'UnclaimedDraftCreateResponse';
    const responseData = getFixtureData(responseClass)['default'];

    setExpectedResponse(mock, responseData, 200);

    const obj = m.UnclaimedDraftCreateEmbeddedRequest.init(requestData);
    obj.files = [fs.createReadStream(`${rootFilePath}/pdf-sample.pdf`)];

    api.unclaimedDraftCreateEmbedded(obj).then(response => {
      const diff = diffJson(
        response.body,
        m.UnclaimedDraftCreateResponse.init(responseData),
      );

      expect(response.body.constructor.name).toBe(responseClass);
      expect(diff).toBeFalsy();
    }).catch(error => {
      throw new Error('Should not have thrown error: ' + error);
    });
  });

  it('testUnclaimedDraftCreateEmbeddedWithTemplate', () => {
    const requestClass = 'UnclaimedDraftCreateEmbeddedWithTemplateRequest';
    const requestData = getFixtureData(requestClass)['default'];

    const responseClass = 'UnclaimedDraftCreateResponse';
    const responseData = getFixtureData(responseClass)['default'];

    setExpectedResponse(mock, responseData, 200);

    const obj = m.UnclaimedDraftCreateEmbeddedWithTemplateRequest.init(requestData);

    api.unclaimedDraftCreateEmbeddedWithTemplate(obj).then(response => {
      const diff = diffJson(
        response.body,
        m.UnclaimedDraftCreateResponse.init(responseData),
      );

      expect(response.body.constructor.name).toBe(responseClass);
      expect(diff).toBeFalsy();
    }).catch(error => {
      throw new Error('Should not have thrown error: ' + error);
    });
  });

  it('testUnclaimedDraftEditAndResend', () => {
    const signatureRequestId = '2f9781e1a83jdja934d808c153c2e1d3df6f8f2f';

    const requestClass = 'UnclaimedDraftEditAndResendRequest';
    const requestData = getFixtureData(requestClass)['default'];

    const responseClass = 'UnclaimedDraftCreateResponse';
    const responseData = getFixtureData(responseClass)['default'];

    setExpectedResponse(mock, responseData, 200);

    const obj = m.UnclaimedDraftEditAndResendRequest.init(requestData);

    api.unclaimedDraftEditAndResend(signatureRequestId, obj).then(response => {
      const diff = diffJson(
        response.body,
        m.UnclaimedDraftCreateResponse.init(responseData),
      );

      expect(response.body.constructor.name).toBe(responseClass);
      expect(diff).toBeFalsy();
    }).catch(error => {
      throw new Error('Should not have thrown error: ' + error);
    });
  });
});
