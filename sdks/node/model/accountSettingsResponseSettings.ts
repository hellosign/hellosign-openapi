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
import { SettingResponse } from "./settingResponse";

export class AccountSettingsResponseSettings {
  /**
   * Company name associated with this account or team.
   */
  "company": SettingResponse;
  /**
   * Whether signers are redirected to a custom URL after completing a signature request.
   */
  "customSigningRedirectEnabled": SettingResponse;
  /**
   * URL where signers are redirected after completing a signature request when custom redirects are enabled.
   */
  "customSigningRedirectUrl": SettingResponse;
  /**
   * Custom tagline displayed with the account or team branding.
   */
  "customTagline": SettingResponse;
  /**
   * Date format used to display dates. List the setting in `unset` to inherit the default.
   */
  "dateFormat": SettingResponse;
  /**
   * Whether automatic reminder emails are enabled for incomplete signature requests.
   */
  "isSignatureRemindersEnabled": SettingResponse;
  /**
   * Sender name shown on signature request emails.
   */
  "requestEmailFrom": SettingResponse;
  /**
   * Signature appended to signature request emails.
   */
  "requestEmailSignature": SettingResponse;
  /**
   * Signature creation methods signers may use.
   */
  "requiredSignatureTypes": SettingResponse;
  /**
   * Whether completed documents include a digital tamper-proof seal.
   */
  "shouldEnableTamperProof": SettingResponse;
  /**
   * Whether completed documents remain as separate PDF files instead of being merged into one PDF.
   */
  "shouldIncludeDistinctPdfs": SettingResponse;
  /**
   * Whether senders can require an access code to verify a signer.
   */
  "shouldOfferSignerAccessCode": SettingResponse;
  /**
   * Whether senders can require SMS authentication to verify a signer.
   */
  "shouldOfferSignerSmsAuthentication": SettingResponse;
  /**
   * Whether the Dropbox Sign document ID is hidden on sent documents.
   */
  "shouldRemoveDocumentId": SettingResponse;
  /**
   * Whether to notify the account when someone signs a document it sent.
   */
  "isNotifyOnSignEnabled": SettingResponse;
  /**
   * Whether to notify the account when someone opens a document it sent.
   */
  "isNotifyOnViewEnabled": SettingResponse;
  /**
   * Whether values entered in text fields are saved and suggested for future signature requests.
   */
  "shouldAutocomplete": SettingResponse;
  /**
   * Whether completed signature requests include PDF copies in emails sent to the account.
   */
  "shouldIncludeRequestedPdfs": SettingResponse;
  /**
   * Whether completed signature requests include PDF copies in emails sent to signers and CC recipients.
   */
  "shouldIncludeRequestedPdfsForOthers": SettingResponse;
  /**
   * Whether emails sent to the account include PDF copies of documents it sends.
   */
  "shouldIncludeSentDocPdfs": SettingResponse;
  /**
   * Whether emails sent to recipients include PDF copies of documents the account sends.
   */
  "shouldIncludeSentDocPdfsForOthers": SettingResponse;
  /**
   * Whether to send the account a daily email summarizing outstanding signature requests.
   */
  "shouldSendDailySummary": SettingResponse;
  /**
   * Whether to notify the account when it signs a document on a third-party site.
   */
  "shouldSendEmbeddedSignatureConfEmails": SettingResponse;
  /**
   * Whether to notify all parties when an ordered signature request starts.
   */
  "shouldSendOrderedSrEmail": SettingResponse;
  /**
   * Whether to notify the account when it signs and sends a document.
   */
  "shouldSendOutboundConfEmails": SettingResponse;
  /**
   * Whether to notify the account when someone signs a document sent by its team through a template link.
   */
  "templateLinkSignatureEmailsEnabled": SettingResponse;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: AttributeTypeMap = [
    {
      name: "company",
      baseName: "company",
      type: "SettingResponse",
    },
    {
      name: "customSigningRedirectEnabled",
      baseName: "custom_signing_redirect_enabled",
      type: "SettingResponse",
    },
    {
      name: "customSigningRedirectUrl",
      baseName: "custom_signing_redirect_url",
      type: "SettingResponse",
    },
    {
      name: "customTagline",
      baseName: "custom_tagline",
      type: "SettingResponse",
    },
    {
      name: "dateFormat",
      baseName: "date_format",
      type: "SettingResponse",
    },
    {
      name: "isSignatureRemindersEnabled",
      baseName: "is_signature_reminders_enabled",
      type: "SettingResponse",
    },
    {
      name: "requestEmailFrom",
      baseName: "request_email_from",
      type: "SettingResponse",
    },
    {
      name: "requestEmailSignature",
      baseName: "request_email_signature",
      type: "SettingResponse",
    },
    {
      name: "requiredSignatureTypes",
      baseName: "required_signature_types",
      type: "SettingResponse",
    },
    {
      name: "shouldEnableTamperProof",
      baseName: "should_enable_tamper_proof",
      type: "SettingResponse",
    },
    {
      name: "shouldIncludeDistinctPdfs",
      baseName: "should_include_distinct_pdfs",
      type: "SettingResponse",
    },
    {
      name: "shouldOfferSignerAccessCode",
      baseName: "should_offer_signer_access_code",
      type: "SettingResponse",
    },
    {
      name: "shouldOfferSignerSmsAuthentication",
      baseName: "should_offer_signer_sms_authentication",
      type: "SettingResponse",
    },
    {
      name: "shouldRemoveDocumentId",
      baseName: "should_remove_document_id",
      type: "SettingResponse",
    },
    {
      name: "isNotifyOnSignEnabled",
      baseName: "is_notify_on_sign_enabled",
      type: "SettingResponse",
    },
    {
      name: "isNotifyOnViewEnabled",
      baseName: "is_notify_on_view_enabled",
      type: "SettingResponse",
    },
    {
      name: "shouldAutocomplete",
      baseName: "should_autocomplete",
      type: "SettingResponse",
    },
    {
      name: "shouldIncludeRequestedPdfs",
      baseName: "should_include_requested_pdfs",
      type: "SettingResponse",
    },
    {
      name: "shouldIncludeRequestedPdfsForOthers",
      baseName: "should_include_requested_pdfs_for_others",
      type: "SettingResponse",
    },
    {
      name: "shouldIncludeSentDocPdfs",
      baseName: "should_include_sent_doc_pdfs",
      type: "SettingResponse",
    },
    {
      name: "shouldIncludeSentDocPdfsForOthers",
      baseName: "should_include_sent_doc_pdfs_for_others",
      type: "SettingResponse",
    },
    {
      name: "shouldSendDailySummary",
      baseName: "should_send_daily_summary",
      type: "SettingResponse",
    },
    {
      name: "shouldSendEmbeddedSignatureConfEmails",
      baseName: "should_send_embedded_signature_conf_emails",
      type: "SettingResponse",
    },
    {
      name: "shouldSendOrderedSrEmail",
      baseName: "should_send_ordered_sr_email",
      type: "SettingResponse",
    },
    {
      name: "shouldSendOutboundConfEmails",
      baseName: "should_send_outbound_conf_emails",
      type: "SettingResponse",
    },
    {
      name: "templateLinkSignatureEmailsEnabled",
      baseName: "template_link_signature_emails_enabled",
      type: "SettingResponse",
    },
  ];

  static getAttributeTypeMap(): AttributeTypeMap {
    return AccountSettingsResponseSettings.attributeTypeMap;
  }

  /** Attempt to instantiate and hydrate a new instance of this class */
  static init(data: any): AccountSettingsResponseSettings {
    return ObjectSerializer.deserialize(
      data,
      "AccountSettingsResponseSettings"
    );
  }
}
