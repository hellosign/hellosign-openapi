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
        `<div class='beta-closed-field-description'>${betaClosed.disclaimer} <a href='mailto:apisupport@hellosign.com?subject=${betaClosed.subjectForEmail}'>${betaClosed.emailLink}</a> ${betaClosed.disclaimerContinued}</div>`;
        "<div class='beta-closed-field-description'>This parameter isn't available quite yet. <a href='apisupport@hellosign.com?subject=Request for Beta feature'>Contact us</a> if you'd like to test the beta version.</div>";
    
        return descriptionWithBeta;
}

// Decorator with Type extensions to Request Schema and Operation
const addBetaToRequestField = () => {
    return {
        SchemaProperties: {
            leave(properties) {
                for (const [field, fieldProperties] of Object.entries(properties)) {
                    // Bail early if field isn't beta
                    const isBetaField = fieldProperties.hasOwnProperty('x-beta');
                    if (!isBetaField) { continue };

                    if (fieldProperties['x-beta'] === "closed") {
                        // Add disclaimers to beta field description
                        const closedBetaDescription = addClosedBetaCopy(fieldProperties.description);
                        fieldProperties.description = closedBetaDescription;
                    }
                    // Future: handle other types of beta releases
                }
                return properties;
            }
        },
        Operation: {
            leave(operationSchema) {
                // const hasQueryParameters = properties.parameters?.length > 0;
                if (operationSchema.parameters) { 
                    const queryParameters = operationSchema.parameters
                    queryParameters.forEach(param => {
                        const isBetaField = param.hasOwnProperty('x-beta');
                        // Bail if not beta field
                        if (!isBetaField) { return };
                        if (param['x-beta'] === "closed") {
                            // Add disclaimers to beta field description
                            const closedBetaDescription = addClosedBetaCopy(param.description);
                            param.description = closedBetaDescription;
                        }
                        return param;
                    });
                    operationSchema.parameters = queryParameters;
                    return operationSchema;
                };
                
                
                // for (const [field, fieldProperties] of Object.entries(properties)) {
                //     if (fieldProperties.parameters) {
                //         console.log("field:" + field)
                //         console.log("field properties:" + fieldProperties.parameters)
                //     }
                    
                // }
            }
        }
    }
}

module.exports =  { addBetaToRequestField }

