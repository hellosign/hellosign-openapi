/*
 * Dropbox Sign API
 *
 * Dropbox Sign v3 API
 *
 * The version of the OpenAPI document: 3.0.0
 * Contact: apisupport@hellosign.com
 * Generated by: https://github.com/openapitools/openapi-generator.git
 */


using System;
using System.Collections;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.IO;
using System.Runtime.Serialization;
using System.Text;
using System.Text.RegularExpressions;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using Newtonsoft.Json.Linq;
using System.ComponentModel.DataAnnotations;
using OpenAPIDateConverter = Dropbox.Sign.Client.OpenAPIDateConverter;

namespace Dropbox.Sign.Model
{
    /// <summary>
    /// FaxGetResponse
    /// </summary>
    [DataContract(Name = "FaxGetResponse")]
    [JsonObject(ItemNullValueHandling = NullValueHandling.Ignore)]
    public partial class FaxGetResponse : IEquatable<FaxGetResponse>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="FaxGetResponse" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected FaxGetResponse() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="FaxGetResponse" /> class.
        /// </summary>
        /// <param name="fax">fax (required).</param>
        /// <param name="warnings">A list of warnings..</param>
        public FaxGetResponse(FaxResponse fax = default(FaxResponse), List<WarningResponse> warnings = default(List<WarningResponse>))
        {

            // to ensure "fax" is required (not null)
            if (fax == null)
            {
                throw new ArgumentNullException("fax is a required property for FaxGetResponse and cannot be null");
            }
            this.Fax = fax;
            this.Warnings = warnings;
        }

        /// <summary>
        /// Attempt to instantiate and hydrate a new instance of this class
        /// </summary>
        /// <param name="jsonData">String of JSON data representing target object</param>
        public static FaxGetResponse Init(string jsonData)
        {
            var obj = JsonConvert.DeserializeObject<FaxGetResponse>(jsonData);

            if (obj == null)
            {
                throw new Exception("Unable to deserialize JSON to instance of FaxGetResponse");
            }

            return obj;
        }

        /// <summary>
        /// Gets or Sets Fax
        /// </summary>
        [DataMember(Name = "fax", IsRequired = true, EmitDefaultValue = true)]
        public FaxResponse Fax { get; set; }

        /// <summary>
        /// A list of warnings.
        /// </summary>
        /// <value>A list of warnings.</value>
        [DataMember(Name = "warnings", EmitDefaultValue = true)]
        public List<WarningResponse> Warnings { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class FaxGetResponse {\n");
            sb.Append("  Fax: ").Append(Fax).Append("\n");
            sb.Append("  Warnings: ").Append(Warnings).Append("\n");
            sb.Append("}\n");
            return sb.ToString();
        }

        /// <summary>
        /// Returns the JSON string presentation of the object
        /// </summary>
        /// <returns>JSON string presentation of the object</returns>
        public virtual string ToJson()
        {
            return Newtonsoft.Json.JsonConvert.SerializeObject(this, Newtonsoft.Json.Formatting.Indented);
        }

        /// <summary>
        /// Returns true if objects are equal
        /// </summary>
        /// <param name="input">Object to be compared</param>
        /// <returns>Boolean</returns>
        public override bool Equals(object input)
        {
            return this.Equals(input as FaxGetResponse);
        }

        /// <summary>
        /// Returns true if FaxGetResponse instances are equal
        /// </summary>
        /// <param name="input">Instance of FaxGetResponse to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(FaxGetResponse input)
        {
            if (input == null)
            {
                return false;
            }
            return
                (
                    this.Fax == input.Fax ||
                    (this.Fax != null &&
                    this.Fax.Equals(input.Fax))
                ) &&
                (
                    this.Warnings == input.Warnings ||
                    this.Warnings != null &&
                    input.Warnings != null &&
                    this.Warnings.SequenceEqual(input.Warnings)
                );
        }

        /// <summary>
        /// Gets the hash code
        /// </summary>
        /// <returns>Hash code</returns>
        public override int GetHashCode()
        {
            unchecked // Overflow is fine, just wrap
            {
                int hashCode = 41;
                if (this.Fax != null)
                {
                    hashCode = (hashCode * 59) + this.Fax.GetHashCode();
                }
                if (this.Warnings != null)
                {
                    hashCode = (hashCode * 59) + this.Warnings.GetHashCode();
                }
                return hashCode;
            }
        }

        /// <summary>
        /// To validate all properties of the instance
        /// </summary>
        /// <param name="validationContext">Validation context</param>
        /// <returns>Validation Result</returns>
        IEnumerable<ValidationResult> IValidatableObject.Validate(ValidationContext validationContext)
        {
            yield break;
        }
        public List<OpenApiType> GetOpenApiTypes()
        {
            var types = new List<OpenApiType>();
            types.Add(new OpenApiType()
            {
                Name = "fax",
                Property = "Fax",
                Type = "FaxResponse",
                Value = Fax,
            });
            types.Add(new OpenApiType()
            {
                Name = "warnings",
                Property = "Warnings",
                Type = "List<WarningResponse>",
                Value = Warnings,
            });

            return types;
        }
    }

}
