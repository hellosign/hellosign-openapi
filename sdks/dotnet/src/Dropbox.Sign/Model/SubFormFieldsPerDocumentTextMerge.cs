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
    /// This class extends &#x60;SubFormFieldsPerDocumentBase&#x60;.
    /// </summary>
    [DataContract(Name = "SubFormFieldsPerDocumentTextMerge")]
    [JsonObject(ItemNullValueHandling = NullValueHandling.Ignore)]
    public partial class SubFormFieldsPerDocumentTextMerge : SubFormFieldsPerDocumentBase, IOpenApiTyped, IEquatable<SubFormFieldsPerDocumentTextMerge>, IValidatableObject
    {
        /// <summary>
        /// Font family for the field.
        /// </summary>
        /// <value>Font family for the field.</value>
        [JsonConverter(typeof(StringEnumConverter))]
        public enum FontFamilyEnum
        {
            /// <summary>
            /// Enum Helvetica for value: helvetica
            /// </summary>
            [EnumMember(Value = "helvetica")]
            Helvetica = 1,

            /// <summary>
            /// Enum Arial for value: arial
            /// </summary>
            [EnumMember(Value = "arial")]
            Arial = 2,

            /// <summary>
            /// Enum Courier for value: courier
            /// </summary>
            [EnumMember(Value = "courier")]
            Courier = 3,

            /// <summary>
            /// Enum Calibri for value: calibri
            /// </summary>
            [EnumMember(Value = "calibri")]
            Calibri = 4,

            /// <summary>
            /// Enum Cambria for value: cambria
            /// </summary>
            [EnumMember(Value = "cambria")]
            Cambria = 5,

            /// <summary>
            /// Enum Georgia for value: georgia
            /// </summary>
            [EnumMember(Value = "georgia")]
            Georgia = 6,

            /// <summary>
            /// Enum Times for value: times
            /// </summary>
            [EnumMember(Value = "times")]
            Times = 7,

            /// <summary>
            /// Enum Trebuchet for value: trebuchet
            /// </summary>
            [EnumMember(Value = "trebuchet")]
            Trebuchet = 8,

            /// <summary>
            /// Enum Verdana for value: verdana
            /// </summary>
            [EnumMember(Value = "verdana")]
            Verdana = 9,

            /// <summary>
            /// Enum Roboto for value: roboto
            /// </summary>
            [EnumMember(Value = "roboto")]
            Roboto = 10,

            /// <summary>
            /// Enum RobotoMono for value: robotoMono
            /// </summary>
            [EnumMember(Value = "robotoMono")]
            RobotoMono = 11,

            /// <summary>
            /// Enum NotoSans for value: notoSans
            /// </summary>
            [EnumMember(Value = "notoSans")]
            NotoSans = 12,

            /// <summary>
            /// Enum NotoSerif for value: notoSerif
            /// </summary>
            [EnumMember(Value = "notoSerif")]
            NotoSerif = 13,

            /// <summary>
            /// Enum NotoCJKJPRegular for value: notoCJK-JP-Regular
            /// </summary>
            [EnumMember(Value = "notoCJK-JP-Regular")]
            NotoCJKJPRegular = 14,

            /// <summary>
            /// Enum NotoHebrewRegular for value: notoHebrew-Regular
            /// </summary>
            [EnumMember(Value = "notoHebrew-Regular")]
            NotoHebrewRegular = 15,

            /// <summary>
            /// Enum NotoSanThaiMerged for value: notoSanThaiMerged
            /// </summary>
            [EnumMember(Value = "notoSanThaiMerged")]
            NotoSanThaiMerged = 16
        }


        /// <summary>
        /// Font family for the field.
        /// </summary>
        /// <value>Font family for the field.</value>
        [DataMember(Name = "font_family", EmitDefaultValue = true)]
        public FontFamilyEnum? FontFamily { get; set; }
        /// <summary>
        /// Initializes a new instance of the <see cref="SubFormFieldsPerDocumentTextMerge" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected SubFormFieldsPerDocumentTextMerge() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="SubFormFieldsPerDocumentTextMerge" /> class.
        /// </summary>
        /// <param name="type">A text field that has default text set using pre-filled data. Use the &#x60;SubFormFieldsPerDocumentTextMerge&#x60; class. (required) (default to &quot;text-merge&quot;).</param>
        /// <param name="fontFamily">Font family for the field..</param>
        /// <param name="fontSize">The initial px font size for the field contents. Can be any integer value between &#x60;7&#x60; and &#x60;49&#x60;.  **NOTE:** Font size may be reduced during processing in order to fit the contents within the dimensions of the field. (default to 12).</param>
        /// <param name="documentIndex">Represents the integer index of the &#x60;file&#x60; or &#x60;file_url&#x60; document the field should be attached to. (required).</param>
        /// <param name="apiId">An identifier for the field that is unique across all documents in the request. (required).</param>
        /// <param name="height">Size of the field in pixels. (required).</param>
        /// <param name="name">Display name for the field..</param>
        /// <param name="page">Page in the document where the field should be placed (requires documents be PDF files).  - When the page number parameter is supplied, the API will use the new coordinate system. - Check out the differences between both [coordinate systems](https://faq.hellosign.com/hc/en-us/articles/217115577) and how to use them..</param>
        /// <param name="required">Whether this field is required. (required).</param>
        /// <param name="signer">Signer index identified by the offset in the signers parameter (0-based indexing), indicating which signer should fill out the field.  **NOTE:** To set the value of the field as the preparer you must set this to &#x60;me_now&#x60;  **NOTE:** If type is &#x60;text-merge&#x60; or &#x60;checkbox-merge&#x60;, you must set this to sender in order to use pre-filled data. (required).</param>
        /// <param name="width">Size of the field in pixels. (required).</param>
        /// <param name="x">Location coordinates of the field in pixels. (required).</param>
        /// <param name="y">Location coordinates of the field in pixels. (required).</param>
        public SubFormFieldsPerDocumentTextMerge(string type = @"text-merge", FontFamilyEnum? fontFamily = default(FontFamilyEnum?), int fontSize = 12, int documentIndex = default(int), string apiId = default(string), int height = default(int), string name = default(string), int? page = default(int?), bool required = default(bool), Object signer = null, int width = default(int), int x = default(int), int y = default(int))
        {
            this.DocumentIndex = documentIndex;
            this.ApiId = apiId;
            this.Height = height;
            this.Required = required;
            this.Signer = Convert.ToString(signer);
            this.Width = width;
            this.X = x;
            this.Y = y;
            this.Name = name;
            this.Page = page;

            // to ensure "type" is required (not null)
            if (type == null)
            {
                throw new ArgumentNullException("type is a required property for SubFormFieldsPerDocumentTextMerge and cannot be null");
            }
            this.Type = type;
            this.FontFamily = fontFamily;
            this.FontSize = fontSize;
        }

        /// <summary>
        /// Attempt to instantiate and hydrate a new instance of this class
        /// </summary>
        /// <param name="jsonData">String of JSON data representing target object</param>
        public static SubFormFieldsPerDocumentTextMerge Init(string jsonData)
        {
            var obj = JsonConvert.DeserializeObject<SubFormFieldsPerDocumentTextMerge>(jsonData);

            if (obj == null)
            {
                throw new Exception("Unable to deserialize JSON to instance of SubFormFieldsPerDocumentTextMerge");
            }

            return obj;
        }

        /// <summary>
        /// A text field that has default text set using pre-filled data. Use the &#x60;SubFormFieldsPerDocumentTextMerge&#x60; class.
        /// </summary>
        /// <value>A text field that has default text set using pre-filled data. Use the &#x60;SubFormFieldsPerDocumentTextMerge&#x60; class.</value>
        [DataMember(Name = "type", IsRequired = true, EmitDefaultValue = true)]
        public string Type { get; set; }

        /// <summary>
        /// The initial px font size for the field contents. Can be any integer value between &#x60;7&#x60; and &#x60;49&#x60;.  **NOTE:** Font size may be reduced during processing in order to fit the contents within the dimensions of the field.
        /// </summary>
        /// <value>The initial px font size for the field contents. Can be any integer value between &#x60;7&#x60; and &#x60;49&#x60;.  **NOTE:** Font size may be reduced during processing in order to fit the contents within the dimensions of the field.</value>
        [DataMember(Name = "font_size", EmitDefaultValue = true)]
        public int FontSize { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class SubFormFieldsPerDocumentTextMerge {\n");
            sb.Append("  ").Append(base.ToString().Replace("\n", "\n  ")).Append("\n");
            sb.Append("  Type: ").Append(Type).Append("\n");
            sb.Append("  FontFamily: ").Append(FontFamily).Append("\n");
            sb.Append("  FontSize: ").Append(FontSize).Append("\n");
            sb.Append("}\n");
            return sb.ToString();
        }

        /// <summary>
        /// Returns the JSON string presentation of the object
        /// </summary>
        /// <returns>JSON string presentation of the object</returns>
        public override string ToJson()
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
            return this.Equals(input as SubFormFieldsPerDocumentTextMerge);
        }

        /// <summary>
        /// Returns true if SubFormFieldsPerDocumentTextMerge instances are equal
        /// </summary>
        /// <param name="input">Instance of SubFormFieldsPerDocumentTextMerge to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(SubFormFieldsPerDocumentTextMerge input)
        {
            if (input == null)
            {
                return false;
            }
            return base.Equals(input) &&
                (
                    this.Type == input.Type ||
                    (this.Type != null &&
                    this.Type.Equals(input.Type))
                ) && base.Equals(input) &&
                (
                    this.FontFamily == input.FontFamily ||
                    this.FontFamily.Equals(input.FontFamily)
                ) && base.Equals(input) &&
                (
                    this.FontSize == input.FontSize ||
                    this.FontSize.Equals(input.FontSize)
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
                int hashCode = base.GetHashCode();
                if (this.Type != null)
                {
                    hashCode = (hashCode * 59) + this.Type.GetHashCode();
                }
                hashCode = (hashCode * 59) + this.FontFamily.GetHashCode();
                hashCode = (hashCode * 59) + this.FontSize.GetHashCode();
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
            foreach (var x in BaseValidate(validationContext))
            {
                yield return x;
            }
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
                Name = "font_family",
                Property = "FontFamily",
                Type = "string",
                Value = FontFamily,
            });
            types.Add(new OpenApiType()
            {
                Name = "font_size",
                Property = "FontSize",
                Type = "int",
                Value = FontSize,
            });

            return types;
        }
    }

}
