const { addCustomBadge } = require('./decorators/add-custom-badge');
const id = 'hs-decorators';

/** @type {import('@redocly/cli').DecoratorsConfig} */
const decorators = {
    oas3: {
        'add-custom-badge': addCustomBadge,
    },
};

module.exports = {
    id,
    decorators,
};
