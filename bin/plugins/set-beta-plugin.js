const { setBetaDescriptions } = require('./decorators/check-for-beta-features');
const id = 'hs-beta-fields';

/** @type {import('@redocly/cli').CustomRulesConfig} */
const decorators = {
    oas3: {
        'check-schema-for-beta-features': setBetaDescriptions,
    },
};

module.exports = {
    id,
    decorators,
};
