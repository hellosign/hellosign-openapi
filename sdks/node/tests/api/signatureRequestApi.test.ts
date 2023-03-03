import 'jest';

import { SignatureRequestApi } from '../../api/';
import * as m from '../../model/';
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

  it('testCamelCaseGeneratesCorrectRequestPayload', () => {
    const userRequestData = {
      allowDecline: true,
      ccs: [
        {
          role: "Accounting",
          emailAddress: "accounting@example.com"
        }
      ],
      clientId: "1a659d9ad95bccd307ecad78d72192f8",
      customFields: [
        {
          name: "Cost",
          value: "$20,000",
          editor: "Client",
          required: true
        }
      ],
      message: "Glad we could come to an agreement.",
      metadata: {
        field1: "value1"
      },
      signerList: [
        {
          signers: [
            {
              role: "Client",
              name: "George",
              emailAddress: "george@example.com",
              pin: "d79a3td",
              smsPhoneNumber: "123-123-1234"
            }
          ],
          customFields: [
            {
              name: "company",
              value: "ABC Corp"
            }
          ]
        },
        {
          signers: [
            {
              role: "Client",
              name: "Mary",
              emailAddress: "mary@example.com",
              pin: "gd9as5b",
              smsPhoneNumber: "432-432-4321"
            }
          ],
          customFields: [
            {
              name: "company",
              value: "123 LLC"
            }
          ]
        }
      ],
      signingRedirectUrl: "https://example.com/redirect",
      subject: "Purchase Order",
      templateIds: [
        "c26b8a16784a872da37ea946b9ddec7c1e11dff6"
      ],
      testMode: true,
      title: "My amazing title"
    };

    const actualRequestData = m.SignatureRequestBulkCreateEmbeddedWithTemplateRequest.init({
      allow_decline: true,
      ccs: [
        {
          role: "Accounting",
          email_address: "accounting@example.com"
        }
      ],
      client_id: "1a659d9ad95bccd307ecad78d72192f8",
      custom_fields: [
        {
          name: "Cost",
          value: "$20,000",
          editor: "Client",
          required: true
        }
      ],
      message: "Glad we could come to an agreement.",
      metadata: {
        field1: "value1"
      },
      signer_list: [
        {
          signers: [
            {
              role: "Client",
              name: "George",
              email_address: "george@example.com",
              pin: "d79a3td",
              sms_phone_number: "123-123-1234"
            }
          ],
          custom_fields: [
            {
              name: "company",
              value: "ABC Corp"
            }
          ]
        },
        {
          signers: [
            {
              role: "Client",
              name: "Mary",
              email_address: "mary@example.com",
              pin: "gd9as5b",
              sms_phone_number: "432-432-4321"
            }
          ],
          custom_fields: [
            {
              name: "company",
              value: "123 LLC"
            }
          ]
        }
      ],
      signing_redirect_url: "https://example.com/redirect",
      subject: "Purchase Order",
      template_ids: [
        "c26b8a16784a872da37ea946b9ddec7c1e11dff6"
      ],
      test_mode: true,
      title: "My amazing title"
    });

    setExpectedResponse(mock, {}, 200, undefined, actualRequestData);
    api.signatureRequestBulkCreateEmbeddedWithTemplate(userRequestData);
  });

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
