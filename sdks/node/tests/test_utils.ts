import * as jsonDiff from 'json-diff';
import MockAdapter = require("axios-mock-adapter");
import { ObjectSerializer } from '../model';

export const getFixtureData = (file: string): Object => {
  return require(`../test_fixtures/${file}.json`);
};

export const setExpectedResponse = (
  mock: MockAdapter,
  responseBody: Object,
  statusCode: number,
  contentType?: string,
  expectedRequestData?: Object|string,
): MockAdapter => mock.onAny(/hellosign.com/)
  .reply((config) => {
    if (contentType) {
      if (contentType === 'multipart/form-data') {
        // @ts-ignore
        expect(config.headers['Content-Type'].includes('multipart/form-data')).toBeTruthy();
      } else {
        // @ts-ignore
        expect(config.headers['Content-Type'].includes(contentType)).toBeTruthy();
      }
    }

    if (expectedRequestData) {
      let compare = expectedRequestData;

      if (typeof expectedRequestData === 'object') {
        compare = JSON.stringify(
          ObjectSerializer.serialize(
            expectedRequestData,
            expectedRequestData.constructor.name,
          )
        );
      }

      const diff = diffJson(
        config.data,
        compare,
      );

      expect(diff).toBeFalsy();
    }

    return [statusCode, responseBody];
  });

export const diffJson = (
  val1: any,
  val2: any
) => jsonDiff.diffString(val1, val2, { color: false });
