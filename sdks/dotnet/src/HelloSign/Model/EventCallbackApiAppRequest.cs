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
using OpenAPIDateConverter = HelloSign.Client.OpenAPIDateConverter;

namespace HelloSign.Model
{
    /// <summary>
    /// EventCallbackApiAppRequest
    /// </summary>
    [DataContract(Name = "EventCallbackApiAppRequest")]
    [JsonObject(ItemNullValueHandling = NullValueHandling.Ignore)]
    public partial class EventCallbackApiAppRequest : IOpenApiTyped, IEquatable<EventCallbackApiAppRequest>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="EventCallbackApiAppRequest" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected EventCallbackApiAppRequest() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="EventCallbackApiAppRequest" /> class.
        /// </summary>
        /// <param name="json">json (required).</param>
        public EventCallbackApiAppRequest(EventCallbackApiAppRequestPayload json = default(EventCallbackApiAppRequestPayload))
        {
            
            // to ensure "json" is required (not null)
            if (json == null)
            {
                throw new ArgumentNullException("json is a required property for EventCallbackApiAppRequest and cannot be null");
            }
            this.Json = json;
        }

        /// <summary>
        /// Gets or Sets Json
        /// </summary>
        [DataMember(Name = "json", IsRequired = true, EmitDefaultValue = true)]
        public EventCallbackApiAppRequestPayload Json { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class EventCallbackApiAppRequest {\n");
            sb.Append("  Json: ").Append(Json).Append("\n");
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
            return this.Equals(input as EventCallbackApiAppRequest);
        }

        /// <summary>
        /// Returns true if EventCallbackApiAppRequest instances are equal
        /// </summary>
        /// <param name="input">Instance of EventCallbackApiAppRequest to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(EventCallbackApiAppRequest input)
        {
            if (input == null)
            {
                return false;
            }
            return 
                (
                    this.Json == input.Json ||
                    (this.Json != null &&
                    this.Json.Equals(input.Json))
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
                if (this.Json != null)
                {
                    hashCode = (hashCode * 59) + this.Json.GetHashCode();
                }
                return hashCode;
            }
        }

        public List<OpenApiType> GetOpenApiTypes()
        {
            var types = new List<OpenApiType>();
            types.Add(new OpenApiType(){
                Name = "json",
                Property = "Json",
                Type = "EventCallbackApiAppRequestPayload",
                Value = Json,
            });

            return types;
        }

        /// <summary>
        /// To validate all properties of the instance
        /// </summary>
        /// <param name="validationContext">Validation context</param>
        /// <returns>Validation Result</returns>
        public IEnumerable<System.ComponentModel.DataAnnotations.ValidationResult> Validate(ValidationContext validationContext)
        {
            yield break;
        }
    }

}