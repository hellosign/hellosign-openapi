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
using JsonSubTypes;
using System.ComponentModel.DataAnnotations;
using OpenAPIDateConverter = Dropbox.Sign.Client.OpenAPIDateConverter;

namespace Dropbox.Sign.Model
{
    /// <summary>
    /// An array of Form Field objects containing the name and type of each named field.
    /// </summary>
    [DataContract(Name = "TemplateResponseDocumentFormFieldBase")]
    [JsonConverter(typeof(JsonSubtypes), "Type")]
    [JsonSubtypes.KnownSubType(typeof(TemplateResponseDocumentFormFieldCheckbox), "checkbox")]
    [JsonSubtypes.KnownSubType(typeof(TemplateResponseDocumentFormFieldDateSigned), "date_signed")]
    [JsonSubtypes.KnownSubType(typeof(TemplateResponseDocumentFormFieldDropdown), "dropdown")]
    [JsonSubtypes.KnownSubType(typeof(TemplateResponseDocumentFormFieldHyperlink), "hyperlink")]
    [JsonSubtypes.KnownSubType(typeof(TemplateResponseDocumentFormFieldInitials), "initials")]
    [JsonSubtypes.KnownSubType(typeof(TemplateResponseDocumentFormFieldRadio), "radio")]
    [JsonSubtypes.KnownSubType(typeof(TemplateResponseDocumentFormFieldSignature), "signature")]
    [JsonSubtypes.KnownSubType(typeof(TemplateResponseDocumentFormFieldText), "text")]
    [JsonObject(ItemNullValueHandling = NullValueHandling.Ignore)]
    public partial class TemplateResponseDocumentFormFieldBase : IEquatable<TemplateResponseDocumentFormFieldBase>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="TemplateResponseDocumentFormFieldBase" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected TemplateResponseDocumentFormFieldBase() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="TemplateResponseDocumentFormFieldBase" /> class.
        /// </summary>
        /// <param name="apiId">A unique id for the form field..</param>
        /// <param name="name">The name of the form field..</param>
        /// <param name="type">type (required).</param>
        /// <param name="signer">The signer of the Form Field..</param>
        /// <param name="x">The horizontal offset in pixels for this form field..</param>
        /// <param name="y">The vertical offset in pixels for this form field..</param>
        /// <param name="width">The width in pixels of this form field..</param>
        /// <param name="height">The height in pixels of this form field..</param>
        /// <param name="required">Boolean showing whether or not this field is required..</param>
        public TemplateResponseDocumentFormFieldBase(string apiId = default(string), string name = default(string), string type = default(string), Object signer = null, int x = default(int), int y = default(int), int width = default(int), int height = default(int), bool required = default(bool))
        {

            // to ensure "type" is required (not null)
            if (type == null)
            {
                throw new ArgumentNullException("type is a required property for TemplateResponseDocumentFormFieldBase and cannot be null");
            }
            this.Type = type;
            this.ApiId = apiId;
            this.Name = name;
            this.Signer = Convert.ToString(signer);
            this.X = x;
            this.Y = y;
            this.Width = width;
            this.Height = height;
            this.Required = required;
        }

        /// <summary>
        /// Attempt to instantiate and hydrate a new instance of this class
        /// </summary>
        /// <param name="jsonData">String of JSON data representing target object</param>
        public static TemplateResponseDocumentFormFieldBase Init(string jsonData)
        {
            var obj = JsonConvert.DeserializeObject<TemplateResponseDocumentFormFieldBase>(jsonData);

            if (obj == null)
            {
                throw new Exception("Unable to deserialize JSON to instance of TemplateResponseDocumentFormFieldBase");
            }

            return obj;
        }

        /// <summary>
        /// Gets or Sets Type
        /// </summary>
        [DataMember(Name = "type", IsRequired = true, EmitDefaultValue = true)]
        public string Type { get; set; }

        /// <summary>
        /// A unique id for the form field.
        /// </summary>
        /// <value>A unique id for the form field.</value>
        [DataMember(Name = "api_id", EmitDefaultValue = true)]
        public string ApiId { get; set; }

        /// <summary>
        /// The name of the form field.
        /// </summary>
        /// <value>The name of the form field.</value>
        [DataMember(Name = "name", EmitDefaultValue = true)]
        public string Name { get; set; }

        /// <summary>
        /// The signer of the Form Field.
        /// </summary>
        /// <value>The signer of the Form Field.</value>
        [DataMember(Name = "signer", EmitDefaultValue = true)]
        public object Signer
        {
            get => this._signer;
            set => this._signer = Convert.ToString(value);
        }

        private string _signer;
        /// <summary>
        /// The horizontal offset in pixels for this form field.
        /// </summary>
        /// <value>The horizontal offset in pixels for this form field.</value>
        [DataMember(Name = "x", EmitDefaultValue = true)]
        public int X { get; set; }

        /// <summary>
        /// The vertical offset in pixels for this form field.
        /// </summary>
        /// <value>The vertical offset in pixels for this form field.</value>
        [DataMember(Name = "y", EmitDefaultValue = true)]
        public int Y { get; set; }

        /// <summary>
        /// The width in pixels of this form field.
        /// </summary>
        /// <value>The width in pixels of this form field.</value>
        [DataMember(Name = "width", EmitDefaultValue = true)]
        public int Width { get; set; }

        /// <summary>
        /// The height in pixels of this form field.
        /// </summary>
        /// <value>The height in pixels of this form field.</value>
        [DataMember(Name = "height", EmitDefaultValue = true)]
        public int Height { get; set; }

        /// <summary>
        /// Boolean showing whether or not this field is required.
        /// </summary>
        /// <value>Boolean showing whether or not this field is required.</value>
        [DataMember(Name = "required", EmitDefaultValue = true)]
        public bool Required { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class TemplateResponseDocumentFormFieldBase {\n");
            sb.Append("  Type: ").Append(Type).Append("\n");
            sb.Append("  ApiId: ").Append(ApiId).Append("\n");
            sb.Append("  Name: ").Append(Name).Append("\n");
            sb.Append("  Signer: ").Append(Signer).Append("\n");
            sb.Append("  X: ").Append(X).Append("\n");
            sb.Append("  Y: ").Append(Y).Append("\n");
            sb.Append("  Width: ").Append(Width).Append("\n");
            sb.Append("  Height: ").Append(Height).Append("\n");
            sb.Append("  Required: ").Append(Required).Append("\n");
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
            return this.Equals(input as TemplateResponseDocumentFormFieldBase);
        }

        /// <summary>
        /// Returns true if TemplateResponseDocumentFormFieldBase instances are equal
        /// </summary>
        /// <param name="input">Instance of TemplateResponseDocumentFormFieldBase to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(TemplateResponseDocumentFormFieldBase input)
        {
            if (input == null)
            {
                return false;
            }
            return
                (
                    this.Type == input.Type ||
                    (this.Type != null &&
                    this.Type.Equals(input.Type))
                ) &&
                (
                    this.ApiId == input.ApiId ||
                    (this.ApiId != null &&
                    this.ApiId.Equals(input.ApiId))
                ) &&
                (
                    this.Name == input.Name ||
                    (this.Name != null &&
                    this.Name.Equals(input.Name))
                ) &&
                (
                    this.Signer == input.Signer ||
                    (this.Signer != null &&
                    this.Signer.Equals(input.Signer))
                ) &&
                (
                    this.X == input.X ||
                    this.X.Equals(input.X)
                ) &&
                (
                    this.Y == input.Y ||
                    this.Y.Equals(input.Y)
                ) &&
                (
                    this.Width == input.Width ||
                    this.Width.Equals(input.Width)
                ) &&
                (
                    this.Height == input.Height ||
                    this.Height.Equals(input.Height)
                ) &&
                (
                    this.Required == input.Required ||
                    this.Required.Equals(input.Required)
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
                if (this.Type != null)
                {
                    hashCode = (hashCode * 59) + this.Type.GetHashCode();
                }
                if (this.ApiId != null)
                {
                    hashCode = (hashCode * 59) + this.ApiId.GetHashCode();
                }
                if (this.Name != null)
                {
                    hashCode = (hashCode * 59) + this.Name.GetHashCode();
                }
                if (this.Signer != null)
                {
                    hashCode = (hashCode * 59) + this.Signer.GetHashCode();
                }
                hashCode = (hashCode * 59) + this.X.GetHashCode();
                hashCode = (hashCode * 59) + this.Y.GetHashCode();
                hashCode = (hashCode * 59) + this.Width.GetHashCode();
                hashCode = (hashCode * 59) + this.Height.GetHashCode();
                hashCode = (hashCode * 59) + this.Required.GetHashCode();
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
            return this.BaseValidate(validationContext);
        }

        /// <summary>
        /// To validate all properties of the instance
        /// </summary>
        /// <param name="validationContext">Validation context</param>
        /// <returns>Validation Result</returns>
        protected IEnumerable<ValidationResult> BaseValidate(ValidationContext validationContext)
        {
            yield break;
        }
        public List<OpenApiType> GetOpenApiTypes()
        {
            var types = new List<OpenApiType>();
            types.Add(new OpenApiType()
            {
                Name = "type",
                Property = "Type",
                Type = "string",
                Value = Type,
            });
            types.Add(new OpenApiType()
            {
                Name = "api_id",
                Property = "ApiId",
                Type = "string",
                Value = ApiId,
            });
            types.Add(new OpenApiType()
            {
                Name = "name",
                Property = "Name",
                Type = "string",
                Value = Name,
            });
            types.Add(new OpenApiType()
            {
                Name = "signer",
                Property = "Signer",
                Type = "string",
                Value = Signer,
            });
            types.Add(new OpenApiType()
            {
                Name = "x",
                Property = "X",
                Type = "int",
                Value = X,
            });
            types.Add(new OpenApiType()
            {
                Name = "y",
                Property = "Y",
                Type = "int",
                Value = Y,
            });
            types.Add(new OpenApiType()
            {
                Name = "width",
                Property = "Width",
                Type = "int",
                Value = Width,
            });
            types.Add(new OpenApiType()
            {
                Name = "height",
                Property = "Height",
                Type = "int",
                Value = Height,
            });
            types.Add(new OpenApiType()
            {
                Name = "required",
                Property = "Required",
                Type = "bool",
                Value = Required,
            });

            return types;
        }
    }

}
