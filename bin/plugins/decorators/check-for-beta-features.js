const englishStrings = require('../../../translations/en-plugin.json');
/** @type {import('@redocly/cli').OasDecorator} */
/* 
  This plugin adds beta information to request schema fields.
  It's classified as a "decorator", which means the logic
  below gets run with the Redocly linter _after_ bundling.
*/

// Helper function
const addClosedBetaCopy = (description) => {
    const { betaClosed } = englishStrings
    const descriptionWithBeta = 
        description +
        "\n" +
        `<div class='beta-disclaimer'><span class='beta-badge field'>beta</span><br />${betaClosed.disclaimer} <a href='mailto:apisupport@hellosign.com?subject=${betaClosed.subjectForEmail}'>${betaClosed.emailLink}</a> ${betaClosed.disclaimerContinued}</div>`;
    
        return descriptionWithBeta;
}

// Decorator with Type extensions to Request Schema and Operation
const setBetaDescriptions = () => {
    return {
        SchemaProperties: {
            leave(properties) {
                for (const [field, fieldProperties] of Object.entries(properties)) {
                    // Bail early if field isn't beta
                    const isBetaField = fieldProperties.hasOwnProperty('x-beta');
                    if (!isBetaField) { continue };
                    if (fieldProperties['x-beta'] === "closed") {
                        // Add disclaimers to beta Field description
                        const descriptionWithBeta = addClosedBetaCopy(fieldProperties.description);
                        fieldProperties.description = descriptionWithBeta;
                    }
                }
                return properties;
            }
        },
        Operation: {
            leave(operationSchema) {
                const isBetaOperation = operationSchema.hasOwnProperty('x-beta');
                if (isBetaOperation && operationSchema['x-beta'] === "closed"){
                    // Add disclaimers to beta Operation description
                    const descriptionWithBeta = addClosedBetaCopy(operationSchema.description);
                    operationSchema.description = descriptionWithBeta;
                }
                if (operationSchema.parameters) { 
                    const queryParameters = operationSchema.parameters
                    queryParameters.forEach(param => {
                        const isBetaParam = param.hasOwnProperty('x-beta');
                        // Bail if not beta parameter
                        if (!isBetaParam) { return };
                        if (param['x-beta'] === "closed") {
                            // Add disclaimers to beta Parameter description
                            const descriptionWithBeta = addClosedBetaCopy(param.description);
                            param.description = descriptionWithBeta;
                        }
                        return param;
                    });
                    operationSchema.parameters = queryParameters
                };
                return operationSchema;
            }
        }
    }
}

module.exports =  { setBetaDescriptions }

