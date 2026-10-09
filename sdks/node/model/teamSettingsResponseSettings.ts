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
   * Storage region for team documents.
   */
  "dataResidency": SettingResponse;
  /**
   * Whether team members can delete a document for all participants.
   */
  "allowTeamDeleteDocumentForEveryone": SettingResponse;
  /**
   * Whether team members can download CSV files.
   */
  "allowTeamDownloadCsv": SettingResponse;
  /**
   * Whether team members are prevented from creating templates.
   */
  "lockTeamTemplateCreation": SettingResponse;
  /**
   * Whether team members are prevented from using the template gallery.
   */
  "lockTeamTemplateGallery": SettingResponse;
  /**
   * Default message enforced for team members when they create self-signed documents.
   */
  "selfSignMessage": SettingResponse;
  /**
   * Default title enforced for team members when they create self-signed documents.
   */
  "selfSignTitle": SettingResponse;
  /**
   * Default message enforced for team members when they create signature requests.
   */
  "signatureRequestMessage": SettingResponse;
  /**
   * Default title enforced for team members when they create signature requests.
   */
  "signatureRequestTitle": SettingResponse;
  /**
   * Whether authenticator-app multifactor authentication is enabled for the team.
   */
  "multifactorAuthApp": SettingResponse;
  /**
   * Whether SMS multifactor authentication is enabled for the team.
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
