import 'jest';
import {
  ObjectSerializer,
  SignatureRequestSendRequest,
} from '../../model/models';
import {
  getFixtureData,
  diffJson,
} from '../test_utils';

describe('SubFormFieldsPerDocument', () => {
  const fixtureData = getFixtureData('SubFormFieldsPerDocument');

  for (const [type, data] of Object.entries(fixtureData)) {
    it(`SubFormFieldsPerDocument of type ${type} is instantiated`, () => {
      const payload = { form_fields_per_document: [data] };

      const obj = SignatureRequestSendRequest.init(payload);
      const serialized = ObjectSerializer.serialize(obj, 'SignatureRequestSendRequest')

      const resultFormFieldsPerDocument = obj?.formFieldsPerDocument;
      // @ts-ignore
      const result = resultFormFieldsPerDocument[0];

      const diff = diffJson(data, serialized.form_fields_per_document[0]);

      expect(result.constructor.name).toBe(type)
      expect(diff).toBeFalsy();
    });
  }
});
