/**
 * The MIT License (MIT)
 *
 * Copyright (C) 2023 dropbox.com
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import { AttributeTypeMap, ObjectSerializer, RequestFile } from "./";
import { SubAttachment } from "./subAttachment";
import { SubCustomField } from "./subCustomField";
import { SubFieldOptions } from "./subFieldOptions";
import { SubFormFieldGroup } from "./subFormFieldGroup";
import { SubFormFieldRule } from "./subFormFieldRule";
import { SubFormFieldsPerDocumentBase } from "./subFormFieldsPerDocumentBase";
import { SubSignatureRequestGroupedSigners } from "./subSignatureRequestGroupedSigners";
import { SubSignatureRequestSigner } from "./subSignatureRequestSigner";
import { SubSigningOptions } from "./subSigningOptions";

export class SignatureRequestSendRequest {
  /**
   * Use `files[]` to indicate the uploaded file(s) to send for signature.  This endpoint requires either **files** or **file_urls[]**, but not both.
   */
  "files"?: Array<RequestFile>;
  /**
   * Use `file_urls[]` to have Dropbox Sign download the file(s) to send for signature.  This endpoint requires either **files** or **file_urls[]**, but not both.
   */
  "fileUrls"?: Array<string>;
  /**
   * Add Signers to your Signature Request.  This endpoint requires either **signers** or **grouped_signers**, but not both.
   */
  "signers"?: Array<SubSignatureRequestSigner>;
  /**
   * Add Grouped Signers to your Signature Request.  This endpoint requires either **signers** or **grouped_signers**, but not both.
   */
  "groupedSigners"?: Array<SubSignatureRequestGroupedSigners>;
  /**
   * Allows signers to decline to sign a document if `true`. Defaults to `false`.
   */
  "allowDecline"?: boolean = false;
  /**
   * Allows signers to reassign their signature requests to other signers if set to `true`. Defaults to `false`.  **NOTE:** Only available for Premium plan and higher.
   */
  "allowReassign"?: boolean = false;
  /**
   * A list describing the attachments
   */
  "attachments"?: Array<SubAttachment>;
  /**
   * The email addresses that should be CCed.
   */
  "ccEmailAddresses"?: Array<string>;
  /**
   * The client id of the API App you want to associate with this request. Used to apply the branding and callback url defined for the app.
   */
  "clientId"?: string;
  /**
   * When used together with merge fields, `custom_fields` allows users to add pre-filled data to their signature requests.  Pre-filled data can be used with \"send-once\" signature requests by adding merge fields with `form_fields_per_document` or [Text Tags](https://app.hellosign.com/api/textTagsWalkthrough#TextTagIntro) while passing values back with `custom_fields` together in one API call.  For using pre-filled on repeatable signature requests, merge fields are added to templates in the Dropbox Sign UI or by calling [/template/create_embedded_draft](/api/reference/operation/templateCreateEmbeddedDraft) and then passing `custom_fields` on subsequent signature requests referencing that template.
   */
  "customFields"?: Array<SubCustomField>;
  "fieldOptions"?: SubFieldOptions;
  /**
   * Group information for fields defined in `form_fields_per_document`. String-indexed JSON array with `group_label` and `requirement` keys. `form_fields_per_document` must contain fields referencing a group defined in `form_field_groups`.
   */
  "formFieldGroups"?: Array<SubFormFieldGroup>;
  /**
   * Conditional Logic rules for fields defined in `form_fields_per_document`.
   */
  "formFieldRules"?: Array<SubFormFieldRule>;
  /**
   * The fields that should appear on the document, expressed as an array of objects. (For more details you can read about it here: [Using Form Fields per Document](/docs/openapi/form-fields-per-document).)  **NOTE:** Fields like **text**, **dropdown**, **checkbox**, **radio**, and **hyperlink** have additional required and optional parameters. Check out the list of [additional parameters](/api/reference/constants/#form-fields-per-document) for these field types.  * Text Field use `SubFormFieldsPerDocumentText` * Dropdown Field use `SubFormFieldsPerDocumentDropdown` * Hyperlink Field use `SubFormFieldsPerDocumentHyperlink` * Checkbox Field use `SubFormFieldsPerDocumentCheckbox` * Radio Field use `SubFormFieldsPerDocumentRadio` * Signature Field use `SubFormFieldsPerDocumentSignature` * Date Signed Field use `SubFormFieldsPerDocumentDateSigned` * Initials Field use `SubFormFieldsPerDocumentInitials` * Text Merge Field use `SubFormFieldsPerDocumentTextMerge` * Checkbox Merge Field use `SubFormFieldsPerDocumentCheckboxMerge`
   */
  "formFieldsPerDocument"?: Array<SubFormFieldsPerDocumentBase>;
  /**
   * Enables automatic Text Tag removal when set to true.  **NOTE:** Removing text tags this way can cause unwanted clipping. We recommend leaving this setting on `false` and instead hiding your text tags using white text or a similar approach. See the [Text Tags Walkthrough](https://app.hellosign.com/api/textTagsWalkthrough#TextTagIntro) for more information.
   */
  "hideTextTags"?: boolean = false;
  /**
   * Send with a value of `true` if you wish to enable [Qualified Electronic Signatures](https://www.hellosign.com/features/qualified-electronic-signatures) (QES), which requires a face-to-face call to verify the signer\'s identity.<br> **NOTE:** QES is only available on the Premium API plan as an add-on purchase. Cannot be used in `test_mode`. Only works on requests with one signer.
   *
   * @deprecated
   */
  "isQualifiedSignature"?: boolean = false;
  /**
   * Send with a value of `true` if you wish to enable [electronic identification (eID)](https://www.hellosign.com/features/electronic-id), which requires the signer to verify their identity with an eID provider to sign a document.<br> **NOTE:** eID is only available on the Premium API plan. Cannot be used in `test_mode`. Only works on requests with one signer.
   */
  "isEid"?: boolean = false;
  /**
   * The custom message in the email that will be sent to the signers.
   */
  "message"?: string;
  /**
   * Key-value data that should be attached to the signature request. This metadata is included in all API responses and events involving the signature request. For example, use the metadata field to store a signer\'s order number for look up when receiving events for the signature request.  Each request can include up to 10 metadata keys (or 50 nested metadata keys), with key names up to 40 characters long and values up to 1000 characters long.
   */
  "metadata"?: { [key: string]: any };
  "signingOptions"?: SubSigningOptions;
  /**
   * The URL you want signers redirected to after they successfully sign.
   */
  "signingRedirectUrl"?: string;
  /**
   * The subject in the email that will be sent to the signers.
   */
  "subject"?: string;
  /**
   * Whether this is a test, the signature request will not be legally binding if set to `true`. Defaults to `false`.
   */
  "testMode"?: boolean = false;
  /**
   * The title you want to assign to the SignatureRequest.
   */
  "title"?: string;
  /**
   * Send with a value of `true` if you wish to enable [Text Tags](https://app.hellosign.com/api/textTagsWalkthrough#TextTagIntro) parsing in your document. Defaults to disabled, or `false`.
   */
  "useTextTags"?: boolean = false;
  /**
   * When the signature request will expire. Unsigned signatures will be moved to the expired status, and no longer signable. See [Signature Request Expiration Date](https://developers.hellosign.com/docs/signature-request/expiration/) for details.
   */
  "expiresAt"?: number | null;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: AttributeTypeMap = [
    {
      name: "files",
      baseName: "files",
      type: "Array<RequestFile>",
    },
    {
      name: "fileUrls",
      baseName: "file_urls",
      type: "Array<string>",
    },
    {
      name: "signers",
      baseName: "signers",
      type: "Array<SubSignatureRequestSigner>",
    },
    {
      name: "groupedSigners",
      baseName: "grouped_signers",
      type: "Array<SubSignatureRequestGroupedSigners>",
    },
    {
      name: "allowDecline",
      baseName: "allow_decline",
      type: "boolean",
    },
    {
      name: "allowReassign",
      baseName: "allow_reassign",
      type: "boolean",
    },
    {
      name: "attachments",
      baseName: "attachments",
      type: "Array<SubAttachment>",
    },
    {
      name: "ccEmailAddresses",
      baseName: "cc_email_addresses",
      type: "Array<string>",
    },
    {
      name: "clientId",
      baseName: "client_id",
      type: "string",
    },
    {
      name: "customFields",
      baseName: "custom_fields",
      type: "Array<SubCustomField>",
    },
    {
      name: "fieldOptions",
      baseName: "field_options",
      type: "SubFieldOptions",
    },
    {
      name: "formFieldGroups",
      baseName: "form_field_groups",
      type: "Array<SubFormFieldGroup>",
    },
    {
      name: "formFieldRules",
      baseName: "form_field_rules",
      type: "Array<SubFormFieldRule>",
    },
    {
      name: "formFieldsPerDocument",
      baseName: "form_fields_per_document",
      type: "Array<SubFormFieldsPerDocumentBase>",
    },
    {
      name: "hideTextTags",
      baseName: "hide_text_tags",
      type: "boolean",
    },
    {
      name: "isQualifiedSignature",
      baseName: "is_qualified_signature",
      type: "boolean",
    },
    {
      name: "isEid",
      baseName: "is_eid",
      type: "boolean",
    },
    {
      name: "message",
      baseName: "message",
      type: "string",
    },
    {
      name: "metadata",
      baseName: "metadata",
      type: "{ [key: string]: any; }",
    },
    {
      name: "signingOptions",
      baseName: "signing_options",
      type: "SubSigningOptions",
    },
    {
      name: "signingRedirectUrl",
      baseName: "signing_redirect_url",
      type: "string",
    },
    {
      name: "subject",
      baseName: "subject",
      type: "string",
    },
    {
      name: "testMode",
      baseName: "test_mode",
      type: "boolean",
    },
    {
      name: "title",
      baseName: "title",
      type: "string",
    },
    {
      name: "useTextTags",
      baseName: "use_text_tags",
      type: "boolean",
    },
    {
      name: "expiresAt",
      baseName: "expires_at",
      type: "number",
    },
  ];

  static getAttributeTypeMap(): AttributeTypeMap {
    return SignatureRequestSendRequest.attributeTypeMap;
  }

  /** Attempt to instantiate and hydrate a new instance of this class */
  static init(data: any): SignatureRequestSendRequest {
    return ObjectSerializer.deserialize(data, "SignatureRequestSendRequest");
  }
}
