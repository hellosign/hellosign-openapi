import 'jest';

import { EmbeddedApi } from '../../api/';
import * as m from '../../model/';
import {
  getFixtureData,
  setExpectedResponse,
  diffJson,
} from '../test_utils';
import { SubMergeField } from '../../model/';

const axios = require('axios');
const MockAdapter = require('axios-mock-adapter');

describe('EmbeddedApiTest', () => {
  let mock: typeof MockAdapter;

  beforeEach(() => {
    mock = new MockAdapter(axios);
  });

  const api = new EmbeddedApi();

  it('testCamelCaseGeneratesCorrectRequestPayload', () => {
    const userRequestData = {
      allowEditCcs: true,
      ccRoles: [
        ""
      ],
      editorOptions: {
        allowEditSigners: true,
        allowEditDocuments: false
      },
      forceSignerRoles: true,
      forceSubjectMessage: true,
      mergeFields: [
        {
          name: "field1",
          type: m.SubMergeField.TypeEnum.Text
        },
        {
          name: "field1",
          type: m.SubMergeField.TypeEnum.Checkbox
        }
      ],
      previewOnly: true,
      showPreview: true,
      showProgressStepper: true,
      testMode: true
    };

    const actualRequestData = m.EmbeddedEditUrlRequest.init({
      allow_edit_ccs: true,
      cc_roles: [
        ""
      ],
      editor_options: {
        allow_edit_signers: true,
        allow_edit_documents: false
      },
      force_signer_roles: true,
      force_subject_message: true,
      merge_fields: [
        {
          name: "field1",
          type: "text"
        },
        {
          name: "field1",
          type: "checkbox"
        }
      ],
      preview_only: true,
      show_preview: true,
      show_progress_stepper: true,
      test_mode: true
    });

    setExpectedResponse(mock, {}, 200, undefined, actualRequestData);
    api.embeddedEditUrl('5de8179668f2033afac48da1868d0093bf133266', userRequestData);
  });

  it('testEmbeddedEditUrl', () => {
    const templateId = '5de8179668f2033afac48da1868d0093bf133266';

    const requestClass = 'EmbeddedEditUrlRequest';
    const requestData = getFixtureData(requestClass)['default'];

    const responseClass = 'EmbeddedEditUrlResponse';
    const responseData = getFixtureData(responseClass)['default'];

    setExpectedResponse(mock, responseData, 200);

    const obj = m.EmbeddedEditUrlRequest.init(requestData);

    api.embeddedEditUrl(templateId, obj).then(response => {
      const diff = diffJson(
        response.body,
        m.EmbeddedEditUrlResponse.init(responseData),
      );

      expect(response.body.constructor.name).toBe(responseClass);
      expect(diff).toBeFalsy();
    }).catch(error => {
      throw new Error('Should not have thrown error: ' + error);
    });
  });

  it('testEmbeddedSignUrl', () => {
    const signatureId = '50e3542f738adfa7ddd4cbd4c00d2a8ab6e4194b';

    const responseClass = 'EmbeddedSignUrlResponse';
    const responseData = getFixtureData(responseClass)['default'];

    setExpectedResponse(mock, responseData, 200);

    api.embeddedSignUrl(signatureId).then(response => {
      const diff = diffJson(
        response.body,
        m.EmbeddedSignUrlResponse.init(responseData),
      );

      expect(response.body.constructor.name).toBe(responseClass);
      expect(diff).toBeFalsy();
    }).catch(error => {
      throw new Error('Should not have thrown error: ' + error);
    });
  });
});
