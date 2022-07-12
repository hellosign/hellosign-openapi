const ReplaceServersURL = require('./decorators/replace-servers-url');
const id = 'environment';
/** @type {import('@redocly/cli').CustomRulesConfig} */
const decorators = {
    oas3: {
        'replace-servers-url': ReplaceServersURL,
    },
};

module.exports = {
    id,
    decorators,
};