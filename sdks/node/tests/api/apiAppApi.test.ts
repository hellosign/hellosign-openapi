import 'jest';

import { ApiAppApi } from '../../api/';
import * as m from '../../model/';
import {
  getFixtureData,
  setExpectedResponse,
  diffJson,
} from '../test_utils';

const axios = require('axios');
const fs = require('fs');
const MockAdapter = require('axios-mock-adapter');

describe('ApiAppApiTest', () => {
  let mock: typeof MockAdapter;

  beforeEach(() => {
    mock = new MockAdapter(axios);
  });

  const api = new ApiAppApi();
  const rootFilePath = __dirname + '/../../test_fixtures';

  it('testCamelCaseGeneratesCorrectRequestPayload', () => {
    const userRequestData = {
      name: "My Production App",
      callbackUrl: "https://example.com/callback",
      domains: [
        "example.com"
      ],
      oauth: {
        callbackUrl: "https://example.com/oauth",
        scopes: [
          m.SubOAuth.ScopesEnum.BasicAccountInfo,
          m.SubOAuth.ScopesEnum.RequestSignature
        ]
      },
      options: {
        canInsertEverywhere: true
      },
      whiteLabelingOptions: {
        headerBackgroundColor: "#1A1A1A",
        legalVersion: m.SubWhiteLabelingOptions.LegalVersionEnum.Terms1,
        linkColor: "#00B3E6",
        pageBackgroundColor: "#F7F8F9",
        primaryButtonColor: "#00b3e6",
        primaryButtonColorHover: "#00B3E6",
        primaryButtonTextColor: "#ffffff",
        primaryButtonTextColorHover: "#FFFFFF",
        secondaryButtonColor: "#FFFFFF",
        secondaryButtonColorHover: "#FFFFFF",
        secondaryButtonTextColor: "#00B3E6",
        secondaryButtonTextColorHover: "#00B3E6",
        textColor1: "#808080",
        textColor2: "#FFFFFF"
      }
    };

    const actualRequestData = m.ApiAppCreateRequest.init({
      name: "My Production App",
      callback_url: "https://example.com/callback",
      domains: [
        "example.com"
      ],
      oauth: {
        callback_url: "https://example.com/oauth",
        scopes: [
          "basic_account_info",
          "request_signature"
        ]
      },
      options: {
        can_insert_everywhere: true
      },
      white_labeling_options: {
        header_background_color: "#1A1A1A",
        legal_version: "terms1",
        link_color: "#00B3E6",
        page_background_color: "#F7F8F9",
        primary_button_color: "#00b3e6",
        primary_button_color_hover: "#00B3E6",
        primary_button_text_color: "#ffffff",
        primary_button_text_color_hover: "#FFFFFF",
        secondary_button_color: "#FFFFFF",
        secondary_button_color_hover: "#FFFFFF",
        secondary_button_text_color: "#00B3E6",
        secondary_button_text_color_hover: "#00B3E6",
        text_color1: "#808080",
        text_color2: "#FFFFFF"
      }
    });

    setExpectedResponse(mock, {}, 200, undefined, actualRequestData);
    api.apiAppCreate(userRequestData);
  });

  it('testApiAppCreate', () => {
    const requestClass = 'ApiAppCreateRequest';
    const requestData = getFixtureData(requestClass)['default'];

    const responseClass = 'ApiAppGetResponse';
    const responseData = getFixtureData(responseClass)['default'];

    setExpectedResponse(mock, responseData, 200, 'multipart/form-data');

    const obj = m.ApiAppCreateRequest.init(requestData);
    obj.customLogoFile = fs.createReadStream(`${rootFilePath}/pdf-sample.pdf`);

    api.apiAppCreate(obj).then(response => {
      const diff = diffJson(
        response.body,
        m.ApiAppGetResponse.init(responseData),
      );

      expect(response.body.constructor.name).toBe(responseClass);
      expect(diff).toBeFalsy();
    }).catch(error => {
      throw new Error('Should not have thrown error: ' + error);
    });
  });

  it('testApiAppGet', () => {
    const clientId = '0dd3b823a682527788c4e40cb7b6f7e9';

    const responseClass = 'ApiAppGetResponse';
    const responseData = getFixtureData(responseClass)['default'];

    setExpectedResponse(mock, responseData, 200);

    api.apiAppGet(clientId).then(response => {
      const diff = diffJson(
        response.body,
        m.ApiAppGetResponse.init(responseData),
      );

      expect(response.body.constructor.name).toBe(responseClass);
      expect(diff).toBeFalsy();
    }).catch(error => {
      throw new Error('Should not have thrown error: ' + error);
    });
  });

  it('testApiAppUpdate', () => {
    const clientId = '0dd3b823a682527788c4e40cb7b6f7e9';

    const requestClass = 'ApiAppUpdateRequest';
    const requestData = getFixtureData(requestClass)['default'];

    const responseClass = 'ApiAppGetResponse';
    const responseData = getFixtureData(responseClass)['default'];

    setExpectedResponse(mock, responseData, 200);

    const obj = m.ApiAppUpdateRequest.init(requestData);
    obj.customLogoFile = fs.createReadStream(`${rootFilePath}/pdf-sample.pdf`);

    api.apiAppUpdate(clientId, obj).then(response => {
      const diff = diffJson(
        response.body,
        m.ApiAppGetResponse.init(responseData),
      );

      expect(response.body.constructor.name).toBe(responseClass);
      expect(diff).toBeFalsy();
    }).catch(error => {
      throw new Error('Should not have thrown error: ' + error);
    });
  });

  it.todo('testApiAppDelete');

  it('testApiAppList', () => {
    const page = 1;
    const pageSize = 20;

    const responseClass = 'ApiAppListResponse';
    const responseData = getFixtureData(responseClass)['default'];

    setExpectedResponse(mock, responseData, 200);

    api.apiAppList(page, pageSize).then(response => {
      const diff = diffJson(
        response.body,
        m.ApiAppListResponse.init(responseData),
      );

      expect(response.body.constructor.name).toBe(responseClass);
      expect(diff).toBeFalsy();
    }).catch(error => {
      throw new Error('Should not have thrown error: ' + error);
    });
  });
});
