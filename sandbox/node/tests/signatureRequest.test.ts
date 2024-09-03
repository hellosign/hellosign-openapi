// @ts-nocheck
import 'jest';
import * as DropboxSign from "@dropbox/sign";
import * as fs from 'fs';

describe('signatureRequest', () => {
  let config: {
    BASE_URL: string,
    API_KEY: string,
    CLIENT_ID: string,
    USE_XDEBUG: string,
  };

  beforeEach(() => {
    const config_custom = require("./.config.json");
    const config_dist = require("./.config.dist.json");
    config = { ...config_dist, ...config_custom };
  });

  it('testSend', () => {
    const signature_request_api = new DropboxSign.SignatureRequestApi();
    signature_request_api.username = config.API_KEY;
    signature_request_api.basePath = config.BASE_URL;

    const data: Partial<DropboxSign.SignatureRequestSendRequest> = require(
      "./../test_fixtures/SignatureRequestSendRequest.json",
    );
    data['files'] = [fs.createReadStream("./../test_fixtures/pdf-sample.pdf")];

    const request = DropboxSign.SignatureRequestSendRequest.init(data);

    signature_request_api.signatureRequestSend(request).then(response => {
      const signature_request = response.body.signatureRequest;

      expect(request.formFieldsPerDocument[0].apiId)
        .toBe(signature_request.customFields[0].apiId);

      expect(request.signers[0].emailAddress)
        .toBe(signature_request.signatures[0].signerEmailAddress);

      expect(request.signers[1].emailAddress)
        .toBe(signature_request.signatures[1].signerEmailAddress);

      expect(request.signers[2].emailAddress)
        .toBe(signature_request.signatures[2].signerEmailAddress);

      if (!signature_request.signatureRequestId) {
        fail();
      }

      signature_request_api.signatureRequestGet(signature_request.signatureRequestId)
        .then(get_response => {
          expect(signature_request.signatureRequestId)
            .toBe(get_response.body.signatureRequest.signatureRequestId);
        }).catch(error => {
          console.log(`Should not have thrown: ${error.body}`);
        });
    }).catch(error => {
      console.log(`Should not have thrown: ${error.body}`);
    });
  });

  it('testCreateEmbedded', () => {
    const signature_request_api = new DropboxSign.SignatureRequestApi();
    signature_request_api.username = config.API_KEY;
    signature_request_api.basePath = config.BASE_URL;

    const data: Partial<DropboxSign.SignatureRequestCreateEmbeddedRequest> = require(
      "./../test_fixtures/SignatureRequestCreateEmbeddedRequest.json"
    );
    data['files'] = [fs.createReadStream("./../test_fixtures/pdf-sample.pdf")];
    data['clientId'] = config.CLIENT_ID;

    const request = DropboxSign.SignatureRequestCreateEmbeddedRequest.init(data);

    signature_request_api.signatureRequestCreateEmbedded(request).then(response => {
      const signature_request = response.body.signatureRequest;

      expect(request.signers[0].emailAddress)
        .toBe(signature_request.signatures[0].signerEmailAddress);

      expect(request.signers[1].emailAddress)
        .toBe(signature_request.signatures[1].signerEmailAddress);

      expect(request.signers[2].emailAddress)
        .toBe(signature_request.signatures[2].signerEmailAddress);

      const embedded_api = new DropboxSign.EmbeddedApi();
      embedded_api.username = config.API_KEY;
      embedded_api.basePath = config.BASE_URL;

      embedded_api.embeddedSignUrl().then(response => {
        expect(response.body.embedded.signUrl).toBeTruthy();
      }).catch(error => {
        console.log(`Should not have thrown: ${error.body}`);
      });
    }).catch(error => {
      console.log(`Should not have thrown: ${error.body}`);
    });
  });

  it('testSendWithoutFileError', () => {
    const signature_request_api = new DropboxSign.SignatureRequestApi();
    signature_request_api.username = config.API_KEY;
    signature_request_api.basePath = config.BASE_URL;

    const data: Partial<DropboxSign.SignatureRequestSendRequest> = require(
      "./../test_fixtures/SignatureRequestSendRequest.json",
    );

    const request = DropboxSign.SignatureRequestSendRequest.init(data);

    signature_request_api.signatureRequestSend(request).then(response => {
      console.log(`Should have thrown: ${response.body}`);
    }).catch((error: DropboxSign.HttpError) => {
      expect(error.body.error.errorPath).toEqual('file');
    });
  });
});
