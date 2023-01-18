import 'jest';

import { SignatureRequestApi } from '../../api/apis';
import * as m from '../../model/models';
import {
  getFixtureData,
  setExpectedResponse,
  diffJson,
} from '../test_utils';

const axios = require('axios');
const fs = require('fs');
const MockAdapter = require('axios-mock-adapter');

describe('SignatureRequestApiTest', () => {
  let mock: typeof MockAdapter;

  beforeEach(() => {
    mock = new MockAdapter(axios);
  });

  const api = new SignatureRequestApi();
  const rootFilePath = __dirname + '/../../test_fixtures';

  it('testSignatureRequestBulkCreateEmbeddedWithTemplate', () => {
    const requestClass = 'SignatureRequestBulkCreateEmbeddedWithTemplateRequest';
    const requestData = getFixtureData(requestClass)['default'];

    const responseClass = 'BulkSendJobSendResponse';
    const responseData = getFixtureData(responseClass)['default'];

    setExpectedResponse(mock, responseData, 200);

    const obj = m.SignatureRequestBulkCreateEmbeddedWithTemplateRequest.init(requestData);
    obj.signerFile = fs.createReadStream(`${rootFilePath}/bulk-send-sample.csv`);

    api.signatureRequestBulkCreateEmbeddedWithTemplate(obj).then(response => {
      const diff = diffJson(
        response.body,
        m.BulkSendJobSendResponse.init(responseData),
      );

      expect(response.body.constructor.name).toBe(responseClass);
      expect(diff).toBeFalsy();
    }).catch(error => {
      throw new Error('Should not have thrown error: ' + error);
    });
  });

  it('testSignatureRequestBulkSendWithTemplate', () => {
    const requestClass = 'SignatureRequestBulkSendWithTemplateRequest';
    const requestData = getFixtureData(requestClass)['default'];

    const responseClass = 'BulkSendJobSendResponse';
    const responseData = getFixtureData(responseClass)['default'];

    setExpectedResponse(mock, responseData, 200);

    const obj = m.SignatureRequestBulkSendWithTemplateRequest.init(requestData);
    obj.signerFile = fs.createReadStream(`${rootFilePath}/bulk-send-sample.csv`);

    api.signatureRequestBulkSendWithTemplate(obj).then(response => {
      const diff = diffJson(
        response.body,
        m.BulkSendJobSendResponse.init(responseData),
      );

      expect(response.body.constructor.name).toBe(responseClass);
      expect(diff).toBeFalsy();
    }).catch(error => {
      throw new Error('Should not have thrown error: ' + error);
    });
  });

  it.todo('testSignatureRequestCancel');

  it('testSignatureRequestCreateEmbedded', () => {
    const requestClass = 'SignatureRequestCreateEmbeddedRequest';
    const requestData = getFixtureData(requestClass)['default'];

    const responseClass = 'SignatureRequestGetResponse';
    const responseData = getFixtureData(responseClass)['default'];

    setExpectedResponse(mock, responseData, 200);

    const obj = m.SignatureRequestCreateEmbeddedRequest.init(requestData);
    obj.files = [fs.createReadStream(`${rootFilePath}/pdf-sample.pdf`)];

    api.signatureRequestCreateEmbedded(obj).then(response => {
      const diff = diffJson(
        response.body,
        m.SignatureRequestGetResponse.init(responseData),
      );

      expect(response.body.constructor.name).toBe(responseClass);
      expect(diff).toBeFalsy();
    }).catch(error => {
      throw new Error('Should not have thrown error: ' + error);
    });
  });

  it('testSignatureRequestCreateEmbeddedWithTemplate', () => {
    const requestClass = 'SignatureRequestCreateEmbeddedWithTemplateRequest';
    const requestData = getFixtureData(requestClass)['default'];

    const responseClass = 'SignatureRequestGetResponse';
    const responseData = getFixtureData(responseClass)['default'];

    setExpectedResponse(mock, responseData, 200);

    const obj = m.SignatureRequestCreateEmbeddedWithTemplateRequest.init(requestData);
    obj.files = [fs.createReadStream(`${rootFilePath}/pdf-sample.pdf`)];

    api.signatureRequestCreateEmbeddedWithTemplate(obj).then(response => {
      const diff = diffJson(
        response.body,
        m.SignatureRequestGetResponse.init(responseData),
      );

      expect(response.body.constructor.name).toBe(responseClass);
      expect(diff).toBeFalsy();
    }).catch(error => {
      throw new Error('Should not have thrown error: ' + error);
    });
  });

  it('testSignatureRequestFiles', () => {
    const signatureRequestId = 'fa5c8a0b0f492d768749333ad6fcc214c111e967';

    const responseClass = 'FileResponse';
    const responseData = getFixtureData(responseClass)['default'];

    setExpectedResponse(mock, responseData, 200);

    api.signatureRequestFilesAsFileUrl(
      signatureRequestId
    ).then(response => {
      const diff = diffJson(
        response.body,
        m.FileResponse.init(responseData),
      );

      expect(response.body.constructor.name).toBe(responseClass);
      expect(diff).toBeFalsy();
    }).catch(error => {
      throw new Error('Should not have thrown error: ' + error);
    });
  });

  it('testSignatureRequestGet', () => {
    const signatureRequestId = 'fa5c8a0b0f492d768749333ad6fcc214c111e967';

    const responseClass = 'SignatureRequestGetResponse';
    const responseData = getFixtureData(responseClass)['default'];

    setExpectedResponse(mock, responseData, 200);

    api.signatureRequestGet(signatureRequestId).then(response => {
      const diff = diffJson(
        response.body,
        m.SignatureRequestGetResponse.init(responseData),
      );

      expect(response.body.constructor.name).toBe(responseClass);
      expect(diff).toBeFalsy();
    }).catch(error => {
      throw new Error('Should not have thrown error: ' + error);
    });
  });

  it('testSignatureRequestList', () => {
    const accountId = 'all';

    const responseClass = 'SignatureRequestListResponse';
    const responseData = getFixtureData(responseClass)['default'];

    setExpectedResponse(mock, responseData, 200);

    api.signatureRequestList(accountId).then(response => {
      const diff = diffJson(
        response.body,
        m.SignatureRequestListResponse.init(responseData),
      );

      expect(response.body.constructor.name).toBe(responseClass);
      expect(diff).toBeFalsy();
    }).catch(error => {
      throw new Error('Should not have thrown error: ' + error);
    });
  });

  it('testSignatureRequestReleaseHold', () => {
    const signatureRequestId = 'fa5c8a0b0f492d768749333ad6fcc214c111e967';

    const responseClass = 'SignatureRequestGetResponse';
    const responseData = getFixtureData(responseClass)['default'];

    setExpectedResponse(mock, responseData, 200);

    api.signatureRequestReleaseHold(signatureRequestId).then(response => {
      const diff = diffJson(
        response.body,
        m.SignatureRequestGetResponse.init(responseData),
      );

      expect(response.body.constructor.name).toBe(responseClass);
      expect(diff).toBeFalsy();
    }).catch(error => {
      throw new Error('Should not have thrown error: ' + error);
    });
  });

  it('testSignatureRequestRemind', () => {
    const signatureRequestId = 'fa5c8a0b0f492d768749333ad6fcc214c111e967';

    const requestClass = 'SignatureRequestRemindRequest';
    const requestData = getFixtureData(requestClass)['default'];

    const responseClass = 'SignatureRequestGetResponse';
    const responseData = getFixtureData(responseClass)['default'];

    setExpectedResponse(mock, responseData, 200);

    const obj = m.SignatureRequestRemindRequest.init(requestData);

    api.signatureRequestRemind(signatureRequestId, obj).then(response => {
      const diff = diffJson(
        response.body,
        m.SignatureRequestGetResponse.init(responseData),
      );

      expect(response.body.constructor.name).toBe(responseClass);
      expect(diff).toBeFalsy();
    }).catch(error => {
      throw new Error('Should not have thrown error: ' + error);
    });
  });

  it.todo('testSignatureRequestRemove');

  it('testSignatureRequestSendRequest', () => {
    const requestClass = 'SignatureRequestSendRequest';
    const requestData = getFixtureData(requestClass)['default'];

    const responseClass = 'SignatureRequestGetResponse';
    const responseData = getFixtureData(responseClass)['default'];

    setExpectedResponse(mock, responseData, 200);

    const obj = m.SignatureRequestSendRequest.init(requestData);
    obj.files = [fs.createReadStream(`${rootFilePath}/pdf-sample.pdf`)];

    api.signatureRequestSend(obj).then(response => {
      const diff = diffJson(
        response.body,
        m.SignatureRequestGetResponse.init(responseData),
      );

      expect(response.body.constructor.name).toBe(responseClass);
      expect(diff).toBeFalsy();
    }).catch(error => {
      throw new Error('Should not have thrown error: ' + error);
    });
  });

  it('testSignatureRequestSendFileForcesMultipartFormData', () => {
    const requestClass = 'SignatureRequestSendRequest';
    const requestData = getFixtureData(requestClass)['default'];

    const responseClass = 'SignatureRequestGetResponse';
    const responseData = getFixtureData(responseClass)['default'];

    setExpectedResponse(mock, responseData, 200, 'multipart/form-data');

    const obj = m.SignatureRequestSendRequest.init(requestData);
    obj.files = [fs.createReadStream(`${rootFilePath}/pdf-sample.pdf`)];

    api.signatureRequestSend(obj).then(response => {
      const diff = diffJson(
        response.body,
        m.SignatureRequestGetResponse.init(responseData),
      );

      expect(response.body.constructor.name).toBe(responseClass);
      expect(diff).toBeFalsy();
    }).catch(error => {
      throw new Error('Should not have thrown error: ' + error);
    });
  });

  it('testSignatureRequestSendNoFileForcesApplicationJson', () => {
    const requestClass = 'SignatureRequestSendRequest';
    const requestData = getFixtureData(requestClass)['default'];

    const responseClass = 'SignatureRequestGetResponse';
    const responseData = getFixtureData(responseClass)['default'];

    setExpectedResponse(mock, responseData, 200, 'application/json');

    const obj = m.SignatureRequestSendRequest.init(requestData);

    api.signatureRequestSend(obj).then(response => {
      const diff = diffJson(
        response.body,
        m.SignatureRequestGetResponse.init(responseData),
      );

      expect(response.body.constructor.name).toBe(responseClass);
      expect(diff).toBeFalsy();
    }).catch(error => {
      throw new Error('Should not have thrown error: ' + error);
    });
  });

  it('testSignatureRequestSendWithTemplate', () => {
    const requestClass = 'SignatureRequestSendWithTemplateRequest';
    const requestData = getFixtureData(requestClass)['default'];

    const responseClass = 'SignatureRequestGetResponse';
    const responseData = getFixtureData(responseClass)['default'];

    setExpectedResponse(mock, responseData, 200, 'application/json');

    const obj = m.SignatureRequestSendWithTemplateRequest.init(requestData);

    api.signatureRequestSendWithTemplate(obj).then(response => {
      const diff = diffJson(
        response.body,
        m.SignatureRequestGetResponse.init(responseData),
      );

      expect(response.body.constructor.name).toBe(responseClass);
      expect(diff).toBeFalsy();
    }).catch(error => {
      throw new Error('Should not have thrown error: ' + error);
    });
  });

  it('testSignatureRequestUpdate', () => {
    const signatureRequestId = 'fa5c8a0b0f492d768749333ad6fcc214c111e967';

    const requestClass = 'SignatureRequestUpdateRequest';
    const requestData = getFixtureData(requestClass)['default'];

    const responseClass = 'SignatureRequestGetResponse';
    const responseData = getFixtureData(responseClass)['default'];

    setExpectedResponse(mock, responseData, 200, 'application/json');

    const obj = m.SignatureRequestUpdateRequest.init(requestData);

    api.signatureRequestUpdate(signatureRequestId, obj).then(response => {
      const diff = diffJson(
        response.body,
        m.SignatureRequestGetResponse.init(responseData),
      );

      expect(response.body.constructor.name).toBe(responseClass);
      expect(diff).toBeFalsy();
    }).catch(error => {
      throw new Error('Should not have thrown error: ' + error);
    });
  });
});
