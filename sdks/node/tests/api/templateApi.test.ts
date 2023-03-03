import 'jest';

import { TemplateApi } from '../../api/';
import * as m from '../../model/';
import {
  getFixtureData,
  setExpectedResponse,
  diffJson,
} from '../test_utils';

const axios = require('axios');
const fs = require('fs');
const MockAdapter = require('axios-mock-adapter');

describe('TemplateApiTest', () => {
  let mock: typeof MockAdapter;

  beforeEach(() => {
    mock = new MockAdapter(axios);
  });

  const api = new TemplateApi();
  const rootFilePath = __dirname + '/../../test_fixtures';

  it('testCamelCaseGeneratesCorrectRequestPayload', () => {
    const userRequestData = {
      allowCcs: true,
      allowReassign: true,
      attachments: [
        {
          name: "Attachment1",
          signerIndex: 1,
          instructions: "Upload your Driver's License",
          required: true
        }
      ],
      ccRoles: [
        "Manager"
      ],
      clientId: "37dee8d8440c66d54cfa05d92c160882",
      editorOptions: {
        allowEditSigners: true,
        allowEditDocuments: false
      },
      fieldOptions: {
        dateFormat: m.SubFieldOptions.DateFormatEnum.DD_MM_YYYY
      },
      fileUrls: [
        "https://app.hellosign.com/docs/example_signature_request.pdf"
      ],
      forceSignerRoles: false,
      forceSubjectMessage: false,
      formFieldGroups: [
        {
          groupId: "RadioGroup1",
          groupLabel: "Radio Group 1",
          requirement: "require_0-1"
        }
      ],
      formFieldRules: [
        {
          id: "rule_1",
          triggerOperator: "AND",
          triggers: [
            {
              id: "uniqueIdHere_1",
              operator: m.SubFormFieldRuleTrigger.OperatorEnum.Is,
              value: "foo"
            }
          ],
          actions: [
            {
              fieldId: "uniqueIdHere_2",
              hidden: true,
              type: m.SubFormFieldRuleAction.TypeEnum.FieldVisibility
            }
          ]
        }
      ],
      formFieldsPerDocument: [
        {
          documentIndex: 0,
          apiId: "uniqueIdHere_1",
          name: "",
          type: "text",
          x: 112,
          y: 328,
          width: 100,
          height: 16,
          required: true,
          signer: "0",
          page: 1,
          validationType: "numbers_only"
        },
        {
          documentIndex: 0,
          apiId: "uniqueIdHere_2",
          name: "",
          type: "signature",
          x: 530,
          y: 415,
          width: 120,
          height: 30,
          required: true,
          signer: "0",
          page: 1
        }
      ],
      mergeFields: [
        {
          name: "Full Name",
          type: m.SubMergeField.TypeEnum.Text
        },
        {
          name: "Is Registered?",
          type: m.SubMergeField.TypeEnum.Checkbox
        }
      ],
      message: "For your approval",
      metadata: {
        custom_id: 1234,
        custom_text: "NDA #9"
      },
      showPreview: true,
      showProgressStepper: true,
      signerRoles: [
        {
          name: "Client",
          order: 0
        },
        {
          name: "Witness",
          order: 1
        }
      ],
      skipMeNow: true,
      subject: "Please sign this document",
      testMode: true,
      title: "Test Template",
      usePreexistingFields: true
    };

    const actualRequestData = m.TemplateCreateEmbeddedDraftRequest.init({
      allow_ccs: true,
      allow_reassign: true,
      attachments: [
        {
          name: "Attachment1",
          signer_index: 1,
          instructions: "Upload your Driver's License",
          required: true
        }
      ],
      cc_roles: [
        "Manager"
      ],
      client_id: "37dee8d8440c66d54cfa05d92c160882",
      editor_options: {
        allow_edit_signers: true,
        allow_edit_documents: false
      },
      field_options: {
        date_format: "DD - MM - YYYY"
      },
      file_urls: [
        "https://app.hellosign.com/docs/example_signature_request.pdf"
      ],
      force_signer_roles: false,
      force_subject_message: false,
      form_field_groups: [
        {
          group_id: "RadioGroup1",
          group_label: "Radio Group 1",
          requirement: "require_0-1"
        }
      ],
      form_field_rules: [
        {
          id: "rule_1",
          trigger_operator: "AND",
          triggers: [
            {
              id: "uniqueIdHere_1",
              operator: "is",
              value: "foo"
            }
          ],
          actions: [
            {
              field_id: "uniqueIdHere_2",
              hidden: true,
              type: "change-field-visibility"
            }
          ]
        }
      ],
      form_fields_per_document: [
        {
          document_index: 0,
          api_id: "uniqueIdHere_1",
          name: "",
          type: "text",
          x: 112,
          y: 328,
          width: 100,
          height: 16,
          required: true,
          signer: "0",
          page: 1,
          validation_type: "numbers_only"
        },
        {
          document_index: 0,
          api_id: "uniqueIdHere_2",
          name: "",
          type: "signature",
          x: 530,
          y: 415,
          width: 120,
          height: 30,
          required: true,
          signer: "0",
          page: 1
        }
      ],
      merge_fields: [
        {
          name: "Full Name",
          type: "text"
        },
        {
          name: "Is Registered?",
          type: "checkbox"
        }
      ],
      message: "For your approval",
      metadata: {
        custom_id: 1234,
        custom_text: "NDA #9"
      },
      show_preview: true,
      show_progress_stepper: true,
      signer_roles: [
        {
          name: "Client",
          order: 0
        },
        {
          name: "Witness",
          order: 1
        }
      ],
      skip_me_now: true,
      subject: "Please sign this document",
      test_mode: true,
      title: "Test Template",
      use_preexisting_fields: true
    });

    setExpectedResponse(mock, {}, 200, undefined, actualRequestData);
    api.templateCreateEmbeddedDraft(userRequestData);
  });

  it('testTemplateAddUser', () => {
    const templateId = 'f57db65d3f933b5316d398057a36176831451a35';
    const requestClass = 'TemplateAddUserRequest';
    const requestData = getFixtureData(requestClass)['default'];

    const responseClass = 'TemplateGetResponse';
    const responseData = getFixtureData(responseClass)['default'];

    setExpectedResponse(mock, responseData, 200);

    const obj = m.TemplateAddUserRequest.init(requestData);

    api.templateAddUser(templateId, obj).then(response => {
      const diff = diffJson(
        response.body,
        m.TemplateGetResponse.init(responseData),
      );

      expect(response.body.constructor.name).toBe(responseClass);
      expect(diff).toBeFalsy();
    }).catch(error => {
      throw new Error('Should not have thrown error: ' + error);
    });
  });

  it('testTemplateCreateEmbeddedDraft', () => {
    const requestClass = 'TemplateCreateEmbeddedDraftRequest';
    const requestData = getFixtureData(requestClass)['default'];

    const responseClass = 'TemplateCreateEmbeddedDraftResponse';
    const responseData = getFixtureData(responseClass)['default'];

    setExpectedResponse(mock, responseData, 200);

    const obj = m.TemplateCreateEmbeddedDraftRequest.init(requestData);
    obj.files = [fs.createReadStream(`${rootFilePath}/pdf-sample.pdf`)];

    api.templateCreateEmbeddedDraft(obj).then(response => {
      const diff = diffJson(
        response.body,
        m.TemplateCreateEmbeddedDraftResponse.init(responseData),
      );

      expect(response.body.constructor.name).toBe(responseClass);
      expect(diff).toBeFalsy();
    }).catch(error => {
      throw new Error('Should not have thrown error: ' + error);
    });
  });

  it.todo('testTemplateDelete');

  it('testTemplateFiles', () => {
    const templateId = 'f57db65d3f933b5316d398057a36176831451a35';

    const responseClass = 'FileResponse';
    const responseData = getFixtureData(responseClass)['default'];

    setExpectedResponse(mock, responseData, 200);

    api.templateFilesAsFileUrl(templateId).then(response => {
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

  it('testTemplateGet', () => {
    const templateId = 'f57db65d3f933b5316d398057a36176831451a35';

    const responseClass = 'TemplateGetResponse';
    const responseData = getFixtureData(responseClass)['default'];

    setExpectedResponse(mock, responseData, 200);

    api.templateGet(templateId).then(response => {
      const diff = diffJson(
        response.body,
        m.TemplateGetResponse.init(responseData),
      );

      expect(response.body.constructor.name).toBe(responseClass);
      expect(diff).toBeFalsy();
    }).catch(error => {
      throw new Error('Should not have thrown error: ' + error);
    });
  });

  it('testTemplateList', () => {
    const accountId = 'all';

    const responseClass = 'TemplateListResponse';
    const responseData = getFixtureData(responseClass)['default'];

    setExpectedResponse(mock, responseData, 200);

    api.templateList(accountId).then(response => {
      const diff = diffJson(
        response.body,
        m.TemplateListResponse.init(responseData),
      );

      expect(response.body.constructor.name).toBe(responseClass);
      expect(diff).toBeFalsy();
    }).catch(error => {
      throw new Error('Should not have thrown error: ' + error);
    });
  });

  it('testTemplateRemoveUser', () => {
    const templateId = '21f920ec2b7f4b6bb64d3ed79f26303843046536';

    const requestClass = 'TemplateRemoveUserRequest';
    const requestData = getFixtureData(requestClass)['default'];

    const responseClass = 'TemplateGetResponse';
    const responseData = getFixtureData(responseClass)['default'];

    setExpectedResponse(mock, responseData, 200);

    const obj = m.TemplateRemoveUserRequest.init(requestData);

    api.templateRemoveUser(templateId, obj).then(response => {
      const diff = diffJson(
        response.body,
        m.TemplateGetResponse.init(responseData),
      );

      expect(response.body.constructor.name).toBe(responseClass);
      expect(diff).toBeFalsy();
    }).catch(error => {
      throw new Error('Should not have thrown error: ' + error);
    });
  });

  it('testTemplateUpdateFiles', () => {
    const templateId = '21f920ec2b7f4b6bb64d3ed79f26303843046536';

    const requestClass = 'TemplateUpdateFilesRequest';
    const requestData = getFixtureData(requestClass)['default'];

    const responseClass = 'TemplateUpdateFilesResponse';
    const responseData = getFixtureData(responseClass)['default'];

    setExpectedResponse(mock, responseData, 200);

    const obj = m.TemplateUpdateFilesRequest.init(requestData);
    obj.files = [fs.createReadStream(`${rootFilePath}/pdf-sample.pdf`)];

    api.templateUpdateFiles(templateId, obj).then(response => {
      const diff = diffJson(
        response.body,
        m.TemplateUpdateFilesResponse.init(responseData),
      );

      expect(response.body.constructor.name).toBe(responseClass);
      expect(diff).toBeFalsy();
    }).catch(error => {
      throw new Error('Should not have thrown error: ' + error);
    });
  });
});
