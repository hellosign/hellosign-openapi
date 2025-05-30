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
    /// Contains information about the templates you and your team have created.
    /// </summary>
    [DataContract(Name = "TemplateResponse")]
    [JsonObject(ItemNullValueHandling = NullValueHandling.Ignore)]
    public partial class TemplateResponse : IEquatable<TemplateResponse>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="TemplateResponse" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected TemplateResponse() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="TemplateResponse" /> class.
        /// </summary>
        /// <param name="templateId">The id of the Template..</param>
        /// <param name="title">The title of the Template. This will also be the default subject of the message sent to signers when using this Template to send a SignatureRequest. This can be overridden when sending the SignatureRequest..</param>
        /// <param name="message">The default message that will be sent to signers when using this Template to send a SignatureRequest. This can be overridden when sending the SignatureRequest..</param>
        /// <param name="updatedAt">Time the template was last updated..</param>
        /// <param name="isEmbedded">&#x60;true&#x60; if this template was created using an embedded flow, &#x60;false&#x60; if it was created on our website. Will be &#x60;null&#x60; when you are not the creator of the Template..</param>
        /// <param name="isCreator">&#x60;true&#x60; if you are the owner of this template, &#x60;false&#x60; if it&#39;s been shared with you by a team member..</param>
        /// <param name="canEdit">Indicates whether edit rights have been granted to you by the owner (always &#x60;true&#x60; if that&#39;s you)..</param>
        /// <param name="isLocked">Indicates whether the template is locked. If &#x60;true&#x60;, then the template was created outside your quota and can only be used in &#x60;test_mode&#x60;. If &#x60;false&#x60;, then the template is within your quota and can be used to create signature requests..</param>
        /// <param name="metadata">The metadata attached to the template..</param>
        /// <param name="signerRoles">An array of the designated signer roles that must be specified when sending a SignatureRequest using this Template..</param>
        /// <param name="ccRoles">An array of the designated CC roles that must be specified when sending a SignatureRequest using this Template..</param>
        /// <param name="documents">An array describing each document associated with this Template. Includes form field data for each document..</param>
        /// <param name="customFields">Deprecated. Use &#x60;custom_fields&#x60; inside the [documents](https://developers.hellosign.com/api/reference/operation/templateGet/#!c&#x3D;200&amp;path&#x3D;template/documents&amp;t&#x3D;response) array instead..</param>
        /// <param name="namedFormFields">Deprecated. Use &#x60;form_fields&#x60; inside the [documents](https://developers.hellosign.com/api/reference/operation/templateGet/#!c&#x3D;200&amp;path&#x3D;template/documents&amp;t&#x3D;response) array instead..</param>
        /// <param name="accounts">An array of the Accounts that can use this Template..</param>
        /// <param name="attachments">Signer attachments..</param>
        public TemplateResponse(string templateId = default(string), string title = default(string), string message = default(string), int updatedAt = default(int), bool? isEmbedded = default(bool?), bool isCreator = default(bool), bool canEdit = default(bool), bool isLocked = default(bool), Dictionary<string, Object> metadata = default(Dictionary<string, Object>), List<TemplateResponseSignerRole> signerRoles = default(List<TemplateResponseSignerRole>), List<TemplateResponseCCRole> ccRoles = default(List<TemplateResponseCCRole>), List<TemplateResponseDocument> documents = default(List<TemplateResponseDocument>), List<TemplateResponseDocumentCustomFieldBase> customFields = default(List<TemplateResponseDocumentCustomFieldBase>), List<TemplateResponseDocumentFormFieldBase> namedFormFields = default(List<TemplateResponseDocumentFormFieldBase>), List<TemplateResponseAccount> accounts = default(List<TemplateResponseAccount>), List<SignatureRequestResponseAttachment> attachments = default(List<SignatureRequestResponseAttachment>))
        {

            this.TemplateId = templateId;
            this.Title = title;
            this.Message = message;
            this.UpdatedAt = updatedAt;
            this.IsEmbedded = isEmbedded;
            this.IsCreator = isCreator;
            this.CanEdit = canEdit;
            this.IsLocked = isLocked;
            this.Metadata = metadata;
            this.SignerRoles = signerRoles;
            this.CcRoles = ccRoles;
            this.Documents = documents;
            this.CustomFields = customFields;
            this.NamedFormFields = namedFormFields;
            this.Accounts = accounts;
            this.Attachments = attachments;
        }

        /// <summary>
        /// Attempt to instantiate and hydrate a new instance of this class
        /// </summary>
        /// <param name="jsonData">String of JSON data representing target object</param>
        public static TemplateResponse Init(string jsonData)
        {
            var obj = JsonConvert.DeserializeObject<TemplateResponse>(jsonData);

            if (obj == null)
            {
                throw new Exception("Unable to deserialize JSON to instance of TemplateResponse");
            }

            return obj;
        }

        /// <summary>
        /// The id of the Template.
        /// </summary>
        /// <value>The id of the Template.</value>
        [DataMember(Name = "template_id", EmitDefaultValue = true)]
        public string TemplateId { get; set; }

        /// <summary>
        /// The title of the Template. This will also be the default subject of the message sent to signers when using this Template to send a SignatureRequest. This can be overridden when sending the SignatureRequest.
        /// </summary>
        /// <value>The title of the Template. This will also be the default subject of the message sent to signers when using this Template to send a SignatureRequest. This can be overridden when sending the SignatureRequest.</value>
        [DataMember(Name = "title", EmitDefaultValue = true)]
        public string Title { get; set; }

        /// <summary>
        /// The default message that will be sent to signers when using this Template to send a SignatureRequest. This can be overridden when sending the SignatureRequest.
        /// </summary>
        /// <value>The default message that will be sent to signers when using this Template to send a SignatureRequest. This can be overridden when sending the SignatureRequest.</value>
        [DataMember(Name = "message", EmitDefaultValue = true)]
        public string Message { get; set; }

        /// <summary>
        /// Time the template was last updated.
        /// </summary>
        /// <value>Time the template was last updated.</value>
        [DataMember(Name = "updated_at", EmitDefaultValue = true)]
        public int UpdatedAt { get; set; }

        /// <summary>
        /// &#x60;true&#x60; if this template was created using an embedded flow, &#x60;false&#x60; if it was created on our website. Will be &#x60;null&#x60; when you are not the creator of the Template.
        /// </summary>
        /// <value>&#x60;true&#x60; if this template was created using an embedded flow, &#x60;false&#x60; if it was created on our website. Will be &#x60;null&#x60; when you are not the creator of the Template.</value>
        [DataMember(Name = "is_embedded", EmitDefaultValue = true)]
        public bool? IsEmbedded { get; set; }

        /// <summary>
        /// &#x60;true&#x60; if you are the owner of this template, &#x60;false&#x60; if it&#39;s been shared with you by a team member.
        /// </summary>
        /// <value>&#x60;true&#x60; if you are the owner of this template, &#x60;false&#x60; if it&#39;s been shared with you by a team member.</value>
        [DataMember(Name = "is_creator", EmitDefaultValue = true)]
        public bool IsCreator { get; set; }

        /// <summary>
        /// Indicates whether edit rights have been granted to you by the owner (always &#x60;true&#x60; if that&#39;s you).
        /// </summary>
        /// <value>Indicates whether edit rights have been granted to you by the owner (always &#x60;true&#x60; if that&#39;s you).</value>
        [DataMember(Name = "can_edit", EmitDefaultValue = true)]
        public bool CanEdit { get; set; }

        /// <summary>
        /// Indicates whether the template is locked. If &#x60;true&#x60;, then the template was created outside your quota and can only be used in &#x60;test_mode&#x60;. If &#x60;false&#x60;, then the template is within your quota and can be used to create signature requests.
        /// </summary>
        /// <value>Indicates whether the template is locked. If &#x60;true&#x60;, then the template was created outside your quota and can only be used in &#x60;test_mode&#x60;. If &#x60;false&#x60;, then the template is within your quota and can be used to create signature requests.</value>
        [DataMember(Name = "is_locked", EmitDefaultValue = true)]
        public bool IsLocked { get; set; }

        /// <summary>
        /// The metadata attached to the template.
        /// </summary>
        /// <value>The metadata attached to the template.</value>
        [DataMember(Name = "metadata", EmitDefaultValue = true)]
        public Dictionary<string, Object> Metadata { get; set; }

        /// <summary>
        /// An array of the designated signer roles that must be specified when sending a SignatureRequest using this Template.
        /// </summary>
        /// <value>An array of the designated signer roles that must be specified when sending a SignatureRequest using this Template.</value>
        [DataMember(Name = "signer_roles", EmitDefaultValue = true)]
        public List<TemplateResponseSignerRole> SignerRoles { get; set; }

        /// <summary>
        /// An array of the designated CC roles that must be specified when sending a SignatureRequest using this Template.
        /// </summary>
        /// <value>An array of the designated CC roles that must be specified when sending a SignatureRequest using this Template.</value>
        [DataMember(Name = "cc_roles", EmitDefaultValue = true)]
        public List<TemplateResponseCCRole> CcRoles { get; set; }

        /// <summary>
        /// An array describing each document associated with this Template. Includes form field data for each document.
        /// </summary>
        /// <value>An array describing each document associated with this Template. Includes form field data for each document.</value>
        [DataMember(Name = "documents", EmitDefaultValue = true)]
        public List<TemplateResponseDocument> Documents { get; set; }

        /// <summary>
        /// Deprecated. Use &#x60;custom_fields&#x60; inside the [documents](https://developers.hellosign.com/api/reference/operation/templateGet/#!c&#x3D;200&amp;path&#x3D;template/documents&amp;t&#x3D;response) array instead.
        /// </summary>
        /// <value>Deprecated. Use &#x60;custom_fields&#x60; inside the [documents](https://developers.hellosign.com/api/reference/operation/templateGet/#!c&#x3D;200&amp;path&#x3D;template/documents&amp;t&#x3D;response) array instead.</value>
        [DataMember(Name = "custom_fields", EmitDefaultValue = true)]
        [Obsolete]
        public List<TemplateResponseDocumentCustomFieldBase> CustomFields { get; set; }

        /// <summary>
        /// Deprecated. Use &#x60;form_fields&#x60; inside the [documents](https://developers.hellosign.com/api/reference/operation/templateGet/#!c&#x3D;200&amp;path&#x3D;template/documents&amp;t&#x3D;response) array instead.
        /// </summary>
        /// <value>Deprecated. Use &#x60;form_fields&#x60; inside the [documents](https://developers.hellosign.com/api/reference/operation/templateGet/#!c&#x3D;200&amp;path&#x3D;template/documents&amp;t&#x3D;response) array instead.</value>
        [DataMember(Name = "named_form_fields", EmitDefaultValue = true)]
        [Obsolete]
        public List<TemplateResponseDocumentFormFieldBase> NamedFormFields { get; set; }

        /// <summary>
        /// An array of the Accounts that can use this Template.
        /// </summary>
        /// <value>An array of the Accounts that can use this Template.</value>
        [DataMember(Name = "accounts", EmitDefaultValue = true)]
        public List<TemplateResponseAccount> Accounts { get; set; }

        /// <summary>
        /// Signer attachments.
        /// </summary>
        /// <value>Signer attachments.</value>
        [DataMember(Name = "attachments", EmitDefaultValue = true)]
        public List<SignatureRequestResponseAttachment> Attachments { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class TemplateResponse {\n");
            sb.Append("  TemplateId: ").Append(TemplateId).Append("\n");
            sb.Append("  Title: ").Append(Title).Append("\n");
            sb.Append("  Message: ").Append(Message).Append("\n");
            sb.Append("  UpdatedAt: ").Append(UpdatedAt).Append("\n");
            sb.Append("  IsEmbedded: ").Append(IsEmbedded).Append("\n");
            sb.Append("  IsCreator: ").Append(IsCreator).Append("\n");
            sb.Append("  CanEdit: ").Append(CanEdit).Append("\n");
            sb.Append("  IsLocked: ").Append(IsLocked).Append("\n");
            sb.Append("  Metadata: ").Append(Metadata).Append("\n");
            sb.Append("  SignerRoles: ").Append(SignerRoles).Append("\n");
            sb.Append("  CcRoles: ").Append(CcRoles).Append("\n");
            sb.Append("  Documents: ").Append(Documents).Append("\n");
            sb.Append("  CustomFields: ").Append(CustomFields).Append("\n");
            sb.Append("  NamedFormFields: ").Append(NamedFormFields).Append("\n");
            sb.Append("  Accounts: ").Append(Accounts).Append("\n");
            sb.Append("  Attachments: ").Append(Attachments).Append("\n");
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
            return this.Equals(input as TemplateResponse);
        }

        /// <summary>
        /// Returns true if TemplateResponse instances are equal
        /// </summary>
        /// <param name="input">Instance of TemplateResponse to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(TemplateResponse input)
        {
            if (input == null)
            {
                return false;
            }
            return
                (
                    this.TemplateId == input.TemplateId ||
                    (this.TemplateId != null &&
                    this.TemplateId.Equals(input.TemplateId))
                ) &&
                (
                    this.Title == input.Title ||
                    (this.Title != null &&
                    this.Title.Equals(input.Title))
                ) &&
                (
                    this.Message == input.Message ||
                    (this.Message != null &&
                    this.Message.Equals(input.Message))
                ) &&
                (
                    this.UpdatedAt == input.UpdatedAt ||
                    this.UpdatedAt.Equals(input.UpdatedAt)
                ) &&
                (
                    this.IsEmbedded == input.IsEmbedded ||
                    (this.IsEmbedded != null &&
                    this.IsEmbedded.Equals(input.IsEmbedded))
                ) &&
                (
                    this.IsCreator == input.IsCreator ||
                    this.IsCreator.Equals(input.IsCreator)
                ) &&
                (
                    this.CanEdit == input.CanEdit ||
                    this.CanEdit.Equals(input.CanEdit)
                ) &&
                (
                    this.IsLocked == input.IsLocked ||
                    this.IsLocked.Equals(input.IsLocked)
                ) &&
                (
                    this.Metadata == input.Metadata ||
                    this.Metadata != null &&
                    input.Metadata != null &&
                    this.Metadata.SequenceEqual(input.Metadata)
                ) &&
                (
                    this.SignerRoles == input.SignerRoles ||
                    this.SignerRoles != null &&
                    input.SignerRoles != null &&
                    this.SignerRoles.SequenceEqual(input.SignerRoles)
                ) &&
                (
                    this.CcRoles == input.CcRoles ||
                    this.CcRoles != null &&
                    input.CcRoles != null &&
                    this.CcRoles.SequenceEqual(input.CcRoles)
                ) &&
                (
                    this.Documents == input.Documents ||
                    this.Documents != null &&
                    input.Documents != null &&
                    this.Documents.SequenceEqual(input.Documents)
                ) &&
                (
                    this.CustomFields == input.CustomFields ||
                    this.CustomFields != null &&
                    input.CustomFields != null &&
                    this.CustomFields.SequenceEqual(input.CustomFields)
                ) &&
                (
                    this.NamedFormFields == input.NamedFormFields ||
                    this.NamedFormFields != null &&
                    input.NamedFormFields != null &&
                    this.NamedFormFields.SequenceEqual(input.NamedFormFields)
                ) &&
                (
                    this.Accounts == input.Accounts ||
                    this.Accounts != null &&
                    input.Accounts != null &&
                    this.Accounts.SequenceEqual(input.Accounts)
                ) &&
                (
                    this.Attachments == input.Attachments ||
                    this.Attachments != null &&
                    input.Attachments != null &&
                    this.Attachments.SequenceEqual(input.Attachments)
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
                if (this.TemplateId != null)
                {
                    hashCode = (hashCode * 59) + this.TemplateId.GetHashCode();
                }
                if (this.Title != null)
                {
                    hashCode = (hashCode * 59) + this.Title.GetHashCode();
                }
                if (this.Message != null)
                {
                    hashCode = (hashCode * 59) + this.Message.GetHashCode();
                }
                hashCode = (hashCode * 59) + this.UpdatedAt.GetHashCode();
                if (this.IsEmbedded != null)
                {
                    hashCode = (hashCode * 59) + this.IsEmbedded.GetHashCode();
                }
                hashCode = (hashCode * 59) + this.IsCreator.GetHashCode();
                hashCode = (hashCode * 59) + this.CanEdit.GetHashCode();
                hashCode = (hashCode * 59) + this.IsLocked.GetHashCode();
                if (this.Metadata != null)
                {
                    hashCode = (hashCode * 59) + this.Metadata.GetHashCode();
                }
                if (this.SignerRoles != null)
                {
                    hashCode = (hashCode * 59) + this.SignerRoles.GetHashCode();
                }
                if (this.CcRoles != null)
                {
                    hashCode = (hashCode * 59) + this.CcRoles.GetHashCode();
                }
                if (this.Documents != null)
                {
                    hashCode = (hashCode * 59) + this.Documents.GetHashCode();
                }
                if (this.CustomFields != null)
                {
                    hashCode = (hashCode * 59) + this.CustomFields.GetHashCode();
                }
                if (this.NamedFormFields != null)
                {
                    hashCode = (hashCode * 59) + this.NamedFormFields.GetHashCode();
                }
                if (this.Accounts != null)
                {
                    hashCode = (hashCode * 59) + this.Accounts.GetHashCode();
                }
                if (this.Attachments != null)
                {
                    hashCode = (hashCode * 59) + this.Attachments.GetHashCode();
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
                Name = "template_id",
                Property = "TemplateId",
                Type = "string",
                Value = TemplateId,
            });
            types.Add(new OpenApiType()
            {
                Name = "title",
                Property = "Title",
                Type = "string",
                Value = Title,
            });
            types.Add(new OpenApiType()
            {
                Name = "message",
                Property = "Message",
                Type = "string",
                Value = Message,
            });
            types.Add(new OpenApiType()
            {
                Name = "updated_at",
                Property = "UpdatedAt",
                Type = "int",
                Value = UpdatedAt,
            });
            types.Add(new OpenApiType()
            {
                Name = "is_embedded",
                Property = "IsEmbedded",
                Type = "bool?",
                Value = IsEmbedded,
            });
            types.Add(new OpenApiType()
            {
                Name = "is_creator",
                Property = "IsCreator",
                Type = "bool",
                Value = IsCreator,
            });
            types.Add(new OpenApiType()
            {
                Name = "can_edit",
                Property = "CanEdit",
                Type = "bool",
                Value = CanEdit,
            });
            types.Add(new OpenApiType()
            {
                Name = "is_locked",
                Property = "IsLocked",
                Type = "bool",
                Value = IsLocked,
            });
            types.Add(new OpenApiType()
            {
                Name = "metadata",
                Property = "Metadata",
                Type = "Dictionary<string, Object>",
                Value = Metadata,
            });
            types.Add(new OpenApiType()
            {
                Name = "signer_roles",
                Property = "SignerRoles",
                Type = "List<TemplateResponseSignerRole>",
                Value = SignerRoles,
            });
            types.Add(new OpenApiType()
            {
                Name = "cc_roles",
                Property = "CcRoles",
                Type = "List<TemplateResponseCCRole>",
                Value = CcRoles,
            });
            types.Add(new OpenApiType()
            {
                Name = "documents",
                Property = "Documents",
                Type = "List<TemplateResponseDocument>",
                Value = Documents,
            });
            types.Add(new OpenApiType()
            {
                Name = "custom_fields",
                Property = "CustomFields",
                Type = "List<TemplateResponseDocumentCustomFieldBase>",
                Value = CustomFields,
            });
            types.Add(new OpenApiType()
            {
                Name = "named_form_fields",
                Property = "NamedFormFields",
                Type = "List<TemplateResponseDocumentFormFieldBase>",
                Value = NamedFormFields,
            });
            types.Add(new OpenApiType()
            {
                Name = "accounts",
                Property = "Accounts",
                Type = "List<TemplateResponseAccount>",
                Value = Accounts,
            });
            types.Add(new OpenApiType()
            {
                Name = "attachments",
                Property = "Attachments",
                Type = "List<SignatureRequestResponseAttachment>",
                Value = Attachments,
            });

            return types;
        }
    }

}
