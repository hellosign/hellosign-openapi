const id = 'hs-custom';

/** @type {import('@redocly/openapi-core/src/config/config').CustomRulesConfig} */
const decorators = {
  oas3: {
    'remove-internal-schema-properties': () => {
      return {
        SchemaProperties: {
          leave(properties) {
            for (const propertyName of Object.keys(properties)) {
              if (propertyName === "sfdc_data") {
                delete properties[propertyName]
              }
            }
          }
        }
      }
    },
  },
};

module.exports = {
  id,
  decorators,
};