import 'jest';

import { TeamApi } from '../../api/apis';
import * as m from '../../model/models';
import {
  getFixtureData,
  setExpectedResponse,
  diffJson,
} from '../test_utils';

const axios = require('axios');
const MockAdapter = require('axios-mock-adapter');

describe('TeamApiTest', () => {
  let mock: typeof MockAdapter;

  beforeEach(() => {
    mock = new MockAdapter(axios);
  });

  const api = new TeamApi();

  it('testTeamAddMember', () => {
    const requestClass = 'TeamAddMemberRequest';
    const requestData = getFixtureData(requestClass)['default'];

    const responseClass = 'TeamGetResponse';
    const responseData = getFixtureData(responseClass)['default'];

    setExpectedResponse(mock, responseData, 200);

    const obj = m.TeamAddMemberRequest.init(requestData);

    api.teamAddMember(obj).then(response => {
      const diff = diffJson(
        response.body,
        m.TeamGetResponse.init(responseData),
      );

      expect(response.body.constructor.name).toBe(responseClass);
      expect(diff).toBeFalsy();
    }).catch(error => {
      throw new Error('Should not have thrown error: ' + error);
    });
  });

  it('testTeamCreate', () => {
    const requestClass = 'TeamCreateRequest';
    const requestData = getFixtureData(requestClass)['default'];

    const responseClass = 'TeamGetResponse';
    const responseData = getFixtureData(responseClass)['default'];

    setExpectedResponse(mock, responseData, 200);

    const obj = m.TeamCreateRequest.init(requestData);

    api.teamCreate(obj).then(response => {
      const diff = diffJson(
        response.body,
        m.TeamGetResponse.init(responseData),
      );

      expect(response.body.constructor.name).toBe(responseClass);
      expect(diff).toBeFalsy();
    }).catch(error => {
      throw new Error('Should not have thrown error: ' + error);
    });
  });

  it.todo('testTeamDelete');

  it('testTeamGet', () => {
    const responseClass = 'TeamGetResponse';
    const responseData = getFixtureData(responseClass)['default'];

    setExpectedResponse(mock, responseData, 200);

    api.teamGet().then(response => {
      const diff = diffJson(
        response.body,
        m.TeamGetResponse.init(responseData),
      );

      expect(response.body.constructor.name).toBe(responseClass);
      expect(diff).toBeFalsy();
    }).catch(error => {
      throw new Error('Should not have thrown error: ' + error);
    });
  });

  it('testTeamUpdate', () => {
    const requestClass = 'TeamUpdateRequest';
    const requestData = getFixtureData(requestClass)['default'];

    const responseClass = 'TeamGetResponse';
    const responseData = getFixtureData(responseClass)['default'];

    setExpectedResponse(mock, responseData, 200);

    const obj = m.TeamUpdateRequest.init(requestData);

    api.teamUpdate(obj).then(response => {
      const diff = diffJson(
        response.body,
        m.TeamGetResponse.init(responseData),
      );

      expect(response.body.constructor.name).toBe(responseClass);
      expect(diff).toBeFalsy();
    }).catch(error => {
      throw new Error('Should not have thrown error: ' + error);
    });
  });

  it('testTeamRemoveMember', () => {
    const requestClass = 'TeamRemoveMemberRequest';
    const requestData = getFixtureData(requestClass)['default'];

    const responseClass = 'TeamGetResponse';
    const responseData = getFixtureData(responseClass)['default'];

    setExpectedResponse(mock, responseData, 200);

    const obj = m.TeamRemoveMemberRequest.init(requestData);

    api.teamRemoveMember(obj).then(response => {
      const diff = diffJson(
        response.body,
        m.TeamGetResponse.init(responseData),
      );

      expect(response.body.constructor.name).toBe(responseClass);
      expect(diff).toBeFalsy();
    }).catch(error => {
      throw new Error('Should not have thrown error: ' + error);
    });
  });
});
