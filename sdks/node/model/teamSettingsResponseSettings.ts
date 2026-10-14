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

export class TeamSettingsResponseSettings {
  /**
   * Company name associated with this account or team.
   */
  "company": SettingResponse;
  /**
   * Whether signers are redirected to a custom webpage after they sign.
   */
  "customSigningRedirectEnabled": SettingResponse;
  /**
   * Webpage where signers are redirected after they sign, when custom redirects are enabled.
   */
  "customSigningRedirectUrl": SettingResponse;
  /**
   * Company tagline shown with the account or team branding.
   */
  "customTagline": SettingResponse;
  /**
   * Default date format in the editor and in the audit trail. Senders can still choose a different format for an individual date field.
   */
  "dateFormat": SettingResponse;
  /**
   * Whether reminder emails are sent to signers 3 days and 7 days after a signature request is sent.
   */
  "isSignatureRemindersEnabled": SettingResponse;
  /**
   * Name shown in the From field of signature request emails. When unset, each user\'s first and last name is shown.
   */
  "requestEmailFrom": SettingResponse;
  /**
   * Text appended to the end of signature request emails.
   */
  "requestEmailSignature": SettingResponse;
  /**
   * Signature creation methods a signer is allowed to use.
   */
  "requiredSignatureTypes": SettingResponse;
  /**
   * Whether a tamper-proof seal is applied to sent signature requests.
   */
  "shouldEnableTamperProof": SettingResponse;
  /**
   * Whether completed documents remain as separate PDF files instead of being merged into one PDF.
   */
  "shouldIncludeDistinctPdfs": SettingResponse;
  /**
   * Whether senders can require a custom access code before a signer can open a document.
   */
  "shouldOfferSignerAccessCode": SettingResponse;
  /**
   * Whether senders can require a text-message verification code before a signer can open a document.
   */
  "shouldOfferSignerSmsAuthentication": SettingResponse;
  /**
   * Whether the document ID is removed from all pages of sent documents.
   */
  "shouldRemoveDocumentId": SettingResponse;
  /**
   * Region where the team\'s documents are stored at rest.
   */
  "dataResidency": SettingResponse;
  /**
   * Whether the sender, in addition to admins, can permanently delete a document from Dropbox Sign and from every participant account.
   */
  "allowTeamDeleteDocumentForEveryone": SettingResponse;
  /**
   * Whether the sender, in addition to admins, can download document data as a CSV.
   */
  "allowTeamDownloadCsv": SettingResponse;
  /**
   * When enabled, only admins can create and edit templates and template links.
   */
  "lockTeamTemplateCreation": SettingResponse;
  /**
   * When enabled, only admins can access and use the template gallery.
   */
  "lockTeamTemplateGallery": SettingResponse;
  /**
   * Default message for self-signed documents created by team members. Lock this setting to prevent members from changing it.
   */
  "selfSignMessage": SettingResponse;
  /**
   * Default document title for self-signed documents created by team members. Lock this setting to prevent members from changing it.
   */
  "selfSignTitle": SettingResponse;
  /**
   * Default email message for signature requests created by team members. Lock this setting to prevent members from changing it.
   */
  "signatureRequestMessage": SettingResponse;
  /**
   * Default document title for signature requests created by team members. Lock this setting to prevent members from changing it.
   */
  "signatureRequestTitle": SettingResponse;
  /**
   * Whether an authenticator app is an allowed multifactor authentication method for the team. Enabling either method requires members to set it up at their next sign-in.
   */
  "multifactorAuthApp": SettingResponse;
  /**
   * Whether SMS verification is an allowed multifactor authentication method for the team. Enabling either method requires members to set it up at their next sign-in. SMS is the fallback when an authenticator app is also enabled.
   */
  "multifactorAuthSms": SettingResponse;

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
      name: "dataResidency",
      baseName: "data_residency",
      type: "SettingResponse",
    },
    {
      name: "allowTeamDeleteDocumentForEveryone",
      baseName: "allow_team_delete_document_for_everyone",
      type: "SettingResponse",
    },
    {
      name: "allowTeamDownloadCsv",
      baseName: "allow_team_download_csv",
      type: "SettingResponse",
    },
    {
      name: "lockTeamTemplateCreation",
      baseName: "lock_team_template_creation",
      type: "SettingResponse",
    },
    {
      name: "lockTeamTemplateGallery",
      baseName: "lock_team_template_gallery",
      type: "SettingResponse",
    },
    {
      name: "selfSignMessage",
      baseName: "self_sign_message",
      type: "SettingResponse",
    },
    {
      name: "selfSignTitle",
      baseName: "self_sign_title",
      type: "SettingResponse",
    },
    {
      name: "signatureRequestMessage",
      baseName: "signature_request_message",
      type: "SettingResponse",
    },
    {
      name: "signatureRequestTitle",
      baseName: "signature_request_title",
      type: "SettingResponse",
    },
    {
      name: "multifactorAuthApp",
      baseName: "multifactor_auth_app",
      type: "SettingResponse",
    },
    {
      name: "multifactorAuthSms",
      baseName: "multifactor_auth_sms",
      type: "SettingResponse",
    },
  ];

  static getAttributeTypeMap(): AttributeTypeMap {
    return TeamSettingsResponseSettings.attributeTypeMap;
  }

  /** Attempt to instantiate and hydrate a new instance of this class */
  static init(data: any): TeamSettingsResponseSettings {
    return ObjectSerializer.deserialize(data, "TeamSettingsResponseSettings");
  }
}
