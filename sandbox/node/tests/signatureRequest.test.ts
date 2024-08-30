import 'jest';
import * as DropboxSign from "@dropbox/sign";
import * as fs from 'fs';

describe('signatureRequest', () => {
  let env_merged: {
    BASE_URL: string,
    API_KEY: string,
    CLIENT_ID: string,
    USE_XDEBUG: string,
  };

  beforeEach(() => {
    const env = require("./.env.json");
    const env_dist = require("./.env.dist.json");
    env_merged = { ...env_dist, ...env };
  });

  it('testSend', () => {
    const signature_request_api = new DropboxSign.SignatureRequestApi();
    signature_request_api.username = env_merged.API_KEY;
    signature_request_api.basePath = env_merged.BASE_URL;

    const data = require("./../test_fixtures/SignatureRequestSendRequest.json");
    data['files'] = [fs.createReadStream("./../test_fixtures/pdf-sample.pdf")];

    const request = DropboxSign.SignatureRequestSendRequest.init(data);

    signature_request_api.signatureRequestSend(data).then(response => {
      const signature_request = response.body.signatureRequest;

      if (
        !request.formFieldsPerDocument
        || !request.formFieldsPerDocument.at(0)
        || !signature_request.customFields
        || !signature_request.customFields.at(0)
      ) {
        fail();
      }

      expect(request.formFieldsPerDocument[0].apiId)
        .toBe(signature_request.customFields[0].apiId);

      if (
        !request.signers
        || !request.signers.at(0)
        || !signature_request.signatures
        || !signature_request.signatures.at(0)
      ) {
        fail();
      }

      expect(request.signers[0].emailAddress)
        .toBe(signature_request.signatures[0].signerEmailAddress);

      if (
        !request.signers
        || !request.signers.at(1)
        || !signature_request.signatures
        || !signature_request.signatures.at(1)
      ) {
        fail();
      }

      expect(request.signers[1].emailAddress)
        .toBe(signature_request.signatures[1].signerEmailAddress);

      if (
        !request.signers
        || !request.signers.at(2)
        || !signature_request.signatures
        || !signature_request.signatures.at(2)
      ) {
        fail();
      }

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
});
