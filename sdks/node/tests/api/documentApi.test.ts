import "jest";

import { DocumentApi } from "../../api/";
import * as m from "../../model/";
import { setExpectedResponse } from "../test_utils";

const axios = require("axios");
const MockAdapter = require("axios-mock-adapter");

describe("DocumentApiTest", () => {
  let mock: typeof MockAdapter;

  beforeEach(() => {
    mock = new MockAdapter(axios);
  });

  const api = new DocumentApi();

  it("serializes a file URL request as JSON", async () => {
    const request = m.DocumentFieldDetectionRequest.init({
      detection_mode: "text_tags",
      file_url: "https://example.com/document.pdf",
      page_range: "0-2,5",
    });

    setExpectedResponse(mock, {}, 200, "application/json", request);

    await api.documentDetectFields(request);
  });

  it("serializes an uploaded file and options as multipart form data", async () => {
    mock.onPost(/hellosign.com/).reply((config) => {
      expect(config.headers["Content-Type"]).toContain("multipart/form-data");

      const payload = config.data.getBuffer().toString();
      expect(payload).toContain('name="detection_mode"');
      expect(payload).toContain("annotations");
      expect(payload).toContain('name="file"');
      expect(payload).toContain("%PDF");
      expect(payload).toContain('name="page_range"');
      expect(payload).toContain("all");

      return [200, {}];
    });

    const request = m.DocumentFieldDetectionRequest.init({
      detection_mode: "annotations",
      file: Buffer.from("%PDF"),
      page_range: "all",
    });

    await api.documentDetectFields(request);
  });
});
