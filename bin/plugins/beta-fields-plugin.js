const { addBetaToFields } = require('./decorators/check-beta-fields');
const id = 'hs-beta-fields';

/** @type {import('@redocly/cli').CustomRulesConfig} */
const decorators = {
    oas3: {
        'check-request-schema-for-beta': addBetaToFields,
    },
};

module.exports = {
    id,
    decorators,
};