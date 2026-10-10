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

import { AttributeTypeMap, ObjectSerializer } from "./";
import { DateFormat } from "./dateFormat";
import { RequiredSignatureType } from "./requiredSignatureType";

export class AccountSettingsUpdateRequest {
  /**
   * Company name associated with this account or team.
   */
  "company"?: string;
  /**
   * Whether signers are redirected to a custom URL after completing a signature request.
   */
  "customSigningRedirectEnabled"?: boolean;
  /**
   * URL where signers are redirected after completing a signature request when custom redirects are enabled.
   */
  "customSigningRedirectUrl"?: string;
  /**
   * Custom tagline displayed with the account or team branding.
   */
  "customTagline"?: string;
  "dateFormat"?: DateFormat;
  /**
   * Whether automatic reminder emails are enabled for incomplete signature requests.
   */
  "isSignatureRemindersEnabled"?: boolean;
  /**
   * Sender name shown on signature request emails.
   */
  "requestEmailFrom"?: string;
  /**
   * Signature appended to signature request emails.
   */
  "requestEmailSignature"?: string;
  /**
   * Signature creation methods signers may use.
   */
  "requiredSignatureTypes"?: Set<RequiredSignatureType>;
  /**
   * Whether completed documents include a digital tamper-proof seal.
   */
  "shouldEnableTamperProof"?: boolean;
  /**
   * Whether completed documents remain as separate PDF files instead of being merged into one PDF.
   */
  "shouldIncludeDistinctPdfs"?: boolean;
  /**
   * Whether senders can require an access code to verify a signer.
   */
  "shouldOfferSignerAccessCode"?: boolean;
  /**
   * Whether senders can require SMS authentication to verify a signer.
   */
  "shouldOfferSignerSmsAuthentication"?: boolean;
  /**
   * Whether the Dropbox Sign document ID is hidden on sent documents.
   */
  "shouldRemoveDocumentId"?: boolean;
  /**
   * Whether to notify the account when someone signs a document it sent.
   */
  "isNotifyOnSignEnabled"?: boolean;
  /**
   * Whether to notify the account when someone opens a document it sent.
   */
  "isNotifyOnViewEnabled"?: boolean;
  /**
   * Whether values entered in text fields are saved and suggested for future signature requests.
   */
  "shouldAutocomplete"?: boolean;
  /**
   * Whether completed signature requests include PDF copies in emails sent to the account.
   */
  "shouldIncludeRequestedPdfs"?: boolean;
  /**
   * Whether completed signature requests include PDF copies in emails sent to signers and CC recipients.
   */
  "shouldIncludeRequestedPdfsForOthers"?: boolean;
  /**
   * Whether emails sent to the account include PDF copies of documents it sends.
   */
  "shouldIncludeSentDocPdfs"?: boolean;
  /**
   * Whether emails sent to recipients include PDF copies of documents the account sends.
   */
  "shouldIncludeSentDocPdfsForOthers"?: boolean;
  /**
   * Whether to send the account a daily email summarizing outstanding signature requests.
   */
  "shouldSendDailySummary"?: boolean;
  /**
   * Whether to notify the account when it signs a document on a third-party site.
   */
  "shouldSendEmbeddedSignatureConfEmails"?: boolean;
  /**
   * Whether to notify all parties when an ordered signature request starts.
   */
  "shouldSendOrderedSrEmail"?: boolean;
  /**
   * Whether to notify the account when it signs and sends a document.
   */
  "shouldSendOutboundConfEmails"?: boolean;
  /**
   * Whether to notify the account when someone signs a document sent by its team through a template link.
   */
  "templateLinkSignatureEmailsEnabled"?: boolean;
  /**
   * Setting names to clear so their values are inherited. A listed name cannot also be set or locked in the same request.
   */
  "unset"?: Set<AccountSettingsUpdateRequest.UnsetEnum>;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: AttributeTypeMap = [
    {
      name: "company",
      baseName: "company",
      type: "string",
    },
    {
      name: "customSigningRedirectEnabled",
      baseName: "custom_signing_redirect_enabled",
      type: "boolean",
    },
    {
      name: "customSigningRedirectUrl",
      baseName: "custom_signing_redirect_url",
      type: "string",
    },
    {
      name: "customTagline",
      baseName: "custom_tagline",
      type: "string",
    },
    {
      name: "dateFormat",
      baseName: "date_format",
      type: "DateFormat",
    },
    {
      name: "isSignatureRemindersEnabled",
      baseName: "is_signature_reminders_enabled",
      type: "boolean",
    },
    {
      name: "requestEmailFrom",
      baseName: "request_email_from",
      type: "string",
    },
    {
      name: "requestEmailSignature",
      baseName: "request_email_signature",
      type: "string",
    },
    {
      name: "requiredSignatureTypes",
      baseName: "required_signature_types",
      type: "Set<RequiredSignatureType>",
    },
    {
      name: "shouldEnableTamperProof",
      baseName: "should_enable_tamper_proof",
      type: "boolean",
    },
    {
      name: "shouldIncludeDistinctPdfs",
      baseName: "should_include_distinct_pdfs",
      type: "boolean",
    },
    {
      name: "shouldOfferSignerAccessCode",
      baseName: "should_offer_signer_access_code",
      type: "boolean",
    },
    {
      name: "shouldOfferSignerSmsAuthentication",
      baseName: "should_offer_signer_sms_authentication",
      type: "boolean",
    },
    {
      name: "shouldRemoveDocumentId",
      baseName: "should_remove_document_id",
      type: "boolean",
    },
    {
      name: "isNotifyOnSignEnabled",
      baseName: "is_notify_on_sign_enabled",
      type: "boolean",
    },
    {
      name: "isNotifyOnViewEnabled",
      baseName: "is_notify_on_view_enabled",
      type: "boolean",
    },
    {
      name: "shouldAutocomplete",
      baseName: "should_autocomplete",
      type: "boolean",
    },
    {
      name: "shouldIncludeRequestedPdfs",
      baseName: "should_include_requested_pdfs",
      type: "boolean",
    },
    {
      name: "shouldIncludeRequestedPdfsForOthers",
      baseName: "should_include_requested_pdfs_for_others",
      type: "boolean",
    },
    {
      name: "shouldIncludeSentDocPdfs",
      baseName: "should_include_sent_doc_pdfs",
      type: "boolean",
    },
    {
      name: "shouldIncludeSentDocPdfsForOthers",
      baseName: "should_include_sent_doc_pdfs_for_others",
      type: "boolean",
    },
    {
      name: "shouldSendDailySummary",
      baseName: "should_send_daily_summary",
      type: "boolean",
    },
    {
      name: "shouldSendEmbeddedSignatureConfEmails",
      baseName: "should_send_embedded_signature_conf_emails",
      type: "boolean",
    },
    {
      name: "shouldSendOrderedSrEmail",
      baseName: "should_send_ordered_sr_email",
      type: "boolean",
    },
    {
      name: "shouldSendOutboundConfEmails",
      baseName: "should_send_outbound_conf_emails",
      type: "boolean",
    },
    {
      name: "templateLinkSignatureEmailsEnabled",
      baseName: "template_link_signature_emails_enabled",
      type: "boolean",
    },
    {
      name: "unset",
      baseName: "unset",
      type: "Set<AccountSettingsUpdateRequest.UnsetEnum>",
    },
  ];

  static getAttributeTypeMap(): AttributeTypeMap {
    return AccountSettingsUpdateRequest.attributeTypeMap;
  }

  /** Attempt to instantiate and hydrate a new instance of this class */
  static init(data: any): AccountSettingsUpdateRequest {
    return ObjectSerializer.deserialize(data, "AccountSettingsUpdateRequest");
  }
}

export namespace AccountSettingsUpdateRequest {
  export enum UnsetEnum {
    Company = "company",
    CustomSigningRedirectEnabled = "custom_signing_redirect_enabled",
    CustomSigningRedirectUrl = "custom_signing_redirect_url",
    CustomTagline = "custom_tagline",
    DateFormat = "date_format",
    IsSignatureRemindersEnabled = "is_signature_reminders_enabled",
    RequestEmailFrom = "request_email_from",
    RequestEmailSignature = "request_email_signature",
    RequiredSignatureTypes = "required_signature_types",
    ShouldEnableTamperProof = "should_enable_tamper_proof",
    ShouldIncludeDistinctPdfs = "should_include_distinct_pdfs",
    ShouldOfferSignerAccessCode = "should_offer_signer_access_code",
    ShouldOfferSignerSmsAuthentication = "should_offer_signer_sms_authentication",
    ShouldRemoveDocumentId = "should_remove_document_id",
    IsNotifyOnSignEnabled = "is_notify_on_sign_enabled",
    IsNotifyOnViewEnabled = "is_notify_on_view_enabled",
    ShouldAutocomplete = "should_autocomplete",
    ShouldIncludeRequestedPdfs = "should_include_requested_pdfs",
    ShouldIncludeRequestedPdfsForOthers = "should_include_requested_pdfs_for_others",
    ShouldIncludeSentDocPdfs = "should_include_sent_doc_pdfs",
    ShouldIncludeSentDocPdfsForOthers = "should_include_sent_doc_pdfs_for_others",
    ShouldSendDailySummary = "should_send_daily_summary",
    ShouldSendEmbeddedSignatureConfEmails = "should_send_embedded_signature_conf_emails",
    ShouldSendOrderedSrEmail = "should_send_ordered_sr_email",
    ShouldSendOutboundConfEmails = "should_send_outbound_conf_emails",
    TemplateLinkSignatureEmailsEnabled = "template_link_signature_emails_enabled",
  }
}
