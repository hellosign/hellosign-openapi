
/** @type {import('@redocly/cli').OasDecorator} */

/* 
  This plugin adds beta information to request schema fields.
  It's classified as a "decorator", which means the logic
  below gets run with the Redocly linter _after_ bundling.
*/
const addBetaToRequestField = () => {
    return {
        SchemaProperties: {
            leave(properties) {
                for (const [field, fieldProperties] of Object.entries(properties)) {
                    // Bail early if field isn't beta
                    const isBetaField = fieldProperties.hasOwnProperty('x-beta');
                    if (!isBetaField) { return false };
                    // Handle closed beta by adding disclaimer to field description in OAS
                    if (fieldProperties['x-beta'] === "closed") {
                        const closedBetaInfo = 
                            fieldProperties.description +
                            "\n" +
                            "<div class='beta-closed'>This parameter isn't available quite yet. <a href='apisupport@hellosign.com?subject=Request for Beta feature'>Contact us</a> if you'd like to test the beta version.</div>";
                        fieldProperties.description = closedBetaInfo;
                        return fieldProperties;
                    }
                    // Future: handle other types of beta releases
                }
            }
        }
    }
}

module.exports =  { addBetaToRequestField }

