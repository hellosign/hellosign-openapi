import "jest";
import * as DropboxSign from "@dropbox/sign";
import * as fs from "fs";

describe("signatureRequest", () => {
  let config: {
    BASE_URL: string,
    API_KEY: string,
    CLIENT_ID: string,
    USE_XDEBUG: boolean,
  };

  let headers = {};

  beforeEach(() => {
    const config_custom = require("./.config.json");
    const config_dist = require("./.config.dist.json");
    config = { ...config_dist, ...config_custom };

    if (config["USE_XDEBUG"]) {
      headers = {
        "Cookie": "XDEBUG_SESSION=xdebug",
      };
    }
  });

  test("testSend", () => {
    const signature_request_api = new DropboxSign.SignatureRequestApi();
    signature_request_api.username = config.API_KEY;
    signature_request_api.basePath = config.BASE_URL;
    signature_request_api.defaultHeaders = headers;

    const data: Partial<DropboxSign.SignatureRequestSendRequest> = require(
      "./../test_fixtures/SignatureRequestSendRequest.json",
    );
    data["files"] = [fs.createReadStream(__dirname + "/../test_fixtures/pdf-sample.pdf")];

    const send_request = DropboxSign.SignatureRequestSendRequest.init(data);

    return signature_request_api.signatureRequestSend(
      send_request,
    ).then(send_response => {
      const signature_request = send_response.body.signatureRequest;

      expect(send_request.formFieldsPerDocument![0].apiId)
        .toBe(signature_request.customFields![0].apiId);

      expect(send_request.signers![0].emailAddress)
        .toBe(signature_request.signatures![0].signerEmailAddress);
      expect(send_request.signers![1].emailAddress)
        .toBe(signature_request.signatures![1].signerEmailAddress);
      expect(send_request.signers![2].emailAddress)
        .toBe(signature_request.signatures![2].signerEmailAddress);

      return signature_request_api.signatureRequestGet(
        signature_request.signatureRequestId!,
      ).then(get_response => {
          expect(signature_request.signatureRequestId)
            .toBe(get_response.body.signatureRequest.signatureRequestId);
        }).catch(error => {
          throw new Error(`Should not have thrown: ${error.body}`);
        });
    }).catch(error => {
      throw new Error(`Should not have thrown: ${error.body}`);
    });
  });

  test("testCreateEmbedded", () => {
    const signature_request_api = new DropboxSign.SignatureRequestApi();
    signature_request_api.username = config.API_KEY;
    signature_request_api.basePath = config.BASE_URL;
    signature_request_api.defaultHeaders = headers;

    const data: Partial<DropboxSign.SignatureRequestCreateEmbeddedRequest> = require(
      "./../test_fixtures/SignatureRequestCreateEmbeddedRequest.json"
    );
    data["files"] = [fs.createReadStream(__dirname + "/../test_fixtures/pdf-sample.pdf")];
    data["clientId"] = config.CLIENT_ID;

    const send_request = DropboxSign.SignatureRequestCreateEmbeddedRequest.init(data);

    return signature_request_api.signatureRequestCreateEmbedded(
      send_request,
    ).then(send_response => {
      const signature_request = send_response.body.signatureRequest;

      expect(send_request.signers![0].emailAddress)
        .toBe(signature_request.signatures![0].signerEmailAddress);
      expect(send_request.signers![1].emailAddress)
        .toBe(signature_request.signatures![1].signerEmailAddress);
      expect(send_request.signers![2].emailAddress)
        .toBe(signature_request.signatures![2].signerEmailAddress);

      const embedded_api = new DropboxSign.EmbeddedApi();
      embedded_api.username = config.API_KEY;
      embedded_api.basePath = config.BASE_URL;
      embedded_api.defaultHeaders = headers;

      return embedded_api.embeddedSignUrl(
        signature_request.signatures![0].signatureId!,
      ).then(get_response => {
        expect(get_response.body.embedded.signUrl).toBeTruthy();
      }).catch(error => {
        throw new Error(`Should not have thrown: ${error.body}`);
      });
    }).catch(error => {
      throw new Error(`Should not have thrown: ${error.body}`);
    });
  });

  test.concurrent("testSendWithoutFileError", async () => {
    const config_custom = require("./.config.json");
    const config_dist = require("./.config.dist.json");
    config = { ...config_dist, ...config_custom };
    let headers = {};

    if (config["USE_XDEBUG"]) {
      headers = {
        "Cookie": "XDEBUG_SESSION=xdebug",
      };
    }

    const signature_request_api = new DropboxSign.SignatureRequestApi();
    signature_request_api.username = config.API_KEY;
    signature_request_api.basePath = config.BASE_URL;
    signature_request_api.defaultHeaders = headers;

    const data: Partial<DropboxSign.SignatureRequestSendRequest> = require(
      "./../test_fixtures/SignatureRequestSendRequest.json",
    );

    const request = DropboxSign.SignatureRequestSendRequest.init(data);

    return signature_request_api.signatureRequestSend(request).then(response => {
      expect(response).toBeFalsy();
    }).catch((error: DropboxSign.HttpError) => {
      expect(error.body.error.errorPath).toEqual("file");
    });
  });
});
