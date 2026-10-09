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
import { BooleanSettingUpdate } from "./booleanSettingUpdate";
import { DataResidencySettingUpdate } from "./dataResidencySettingUpdate";
import { DateFormatSettingUpdate } from "./dateFormatSettingUpdate";
import { RequiredSignatureTypesSettingUpdate } from "./requiredSignatureTypesSettingUpdate";
import { StringSettingUpdate } from "./stringSettingUpdate";

export class TeamSettingsUpdateRequest {
  /**
   * Company name associated with this account or team.
   */
  "company"?: StringSettingUpdate;
  /**
   * Whether signers are redirected to a custom URL after completing a signature request.
   */
  "customSigningRedirectEnabled"?: BooleanSettingUpdate;
  /**
   * URL where signers are redirected after completing a signature request when custom redirects are enabled.
   */
  "customSigningRedirectUrl"?: StringSettingUpdate;
  /**
   * Custom tagline displayed with the account or team branding.
   */
  "customTagline"?: StringSettingUpdate;
  /**
   * Date format used to display dates. List the setting in `unset` to inherit the default.
   */
  "dateFormat"?: DateFormatSettingUpdate;
  /**
   * Whether automatic reminder emails are enabled for incomplete signature requests.
   */
  "isSignatureRemindersEnabled"?: BooleanSettingUpdate;
  /**
   * Sender name shown on signature request emails.
   */
  "requestEmailFrom"?: StringSettingUpdate;
  /**
   * Signature appended to signature request emails.
   */
  "requestEmailSignature"?: StringSettingUpdate;
  /**
   * Signature creation methods signers may use.
   */
  "requiredSignatureTypes"?: RequiredSignatureTypesSettingUpdate;
  /**
   * Whether completed documents include a digital tamper-proof seal.
   */
  "shouldEnableTamperProof"?: BooleanSettingUpdate;
  /**
   * Whether completed documents remain as separate PDF files instead of being merged into one PDF.
   */
  "shouldIncludeDistinctPdfs"?: BooleanSettingUpdate;
  /**
   * Whether senders can require an access code to verify a signer.
   */
  "shouldOfferSignerAccessCode"?: BooleanSettingUpdate;
  /**
   * Whether senders can require SMS authentication to verify a signer.
   */
  "shouldOfferSignerSmsAuthentication"?: BooleanSettingUpdate;
  /**
   * Whether the Dropbox Sign document ID is hidden on sent documents.
   */
  "shouldRemoveDocumentId"?: BooleanSettingUpdate;
  /**
   * Storage region for team documents.
   */
  "dataResidency"?: DataResidencySettingUpdate;
  /**
   * Whether team members can delete a document for all participants.
   */
  "allowTeamDeleteDocumentForEveryone"?: BooleanSettingUpdate;
  /**
   * Whether team members can download CSV files.
   */
  "allowTeamDownloadCsv"?: BooleanSettingUpdate;
  /**
   * Whether team members are prevented from creating templates.
   */
  "lockTeamTemplateCreation"?: BooleanSettingUpdate;
  /**
   * Whether team members are prevented from using the template gallery.
   */
  "lockTeamTemplateGallery"?: BooleanSettingUpdate;
  /**
   * Default message enforced for team members when they create self-signed documents.
   */
  "selfSignMessage"?: StringSettingUpdate;
  /**
   * Default title enforced for team members when they create self-signed documents.
   */
  "selfSignTitle"?: StringSettingUpdate;
  /**
   * Default message enforced for team members when they create signature requests.
   */
  "signatureRequestMessage"?: StringSettingUpdate;
  /**
   * Default title enforced for team members when they create signature requests.
   */
  "signatureRequestTitle"?: StringSettingUpdate;
  /**
   * Whether authenticator-app multifactor authentication is enabled for the team.
   */
  "multifactorAuthApp"?: BooleanSettingUpdate;
  /**
   * Whether SMS multifactor authentication is enabled for the team.
   */
  "multifactorAuthSms"?: BooleanSettingUpdate;
  /**
   * Setting names to clear so their values are inherited. A listed name cannot also be set or locked in the same request.
   */
  "unset"?: Set<TeamSettingsUpdateRequest.UnsetEnum>;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: AttributeTypeMap = [
    {
      name: "company",
      baseName: "company",
      type: "StringSettingUpdate",
    },
    {
      name: "customSigningRedirectEnabled",
      baseName: "custom_signing_redirect_enabled",
      type: "BooleanSettingUpdate",
    },
    {
      name: "customSigningRedirectUrl",
      baseName: "custom_signing_redirect_url",
      type: "StringSettingUpdate",
    },
    {
      name: "customTagline",
      baseName: "custom_tagline",
      type: "StringSettingUpdate",
    },
    {
      name: "dateFormat",
      baseName: "date_format",
      type: "DateFormatSettingUpdate",
    },
    {
      name: "isSignatureRemindersEnabled",
      baseName: "is_signature_reminders_enabled",
      type: "BooleanSettingUpdate",
    },
    {
      name: "requestEmailFrom",
      baseName: "request_email_from",
      type: "StringSettingUpdate",
    },
    {
      name: "requestEmailSignature",
      baseName: "request_email_signature",
      type: "StringSettingUpdate",
    },
    {
      name: "requiredSignatureTypes",
      baseName: "required_signature_types",
      type: "RequiredSignatureTypesSettingUpdate",
    },
    {
      name: "shouldEnableTamperProof",
      baseName: "should_enable_tamper_proof",
      type: "BooleanSettingUpdate",
    },
    {
      name: "shouldIncludeDistinctPdfs",
      baseName: "should_include_distinct_pdfs",
      type: "BooleanSettingUpdate",
    },
    {
      name: "shouldOfferSignerAccessCode",
      baseName: "should_offer_signer_access_code",
      type: "BooleanSettingUpdate",
    },
    {
      name: "shouldOfferSignerSmsAuthentication",
      baseName: "should_offer_signer_sms_authentication",
      type: "BooleanSettingUpdate",
    },
    {
      name: "shouldRemoveDocumentId",
      baseName: "should_remove_document_id",
      type: "BooleanSettingUpdate",
    },
    {
      name: "dataResidency",
      baseName: "data_residency",
      type: "DataResidencySettingUpdate",
    },
    {
      name: "allowTeamDeleteDocumentForEveryone",
      baseName: "allow_team_delete_document_for_everyone",
      type: "BooleanSettingUpdate",
    },
    {
      name: "allowTeamDownloadCsv",
      baseName: "allow_team_download_csv",
      type: "BooleanSettingUpdate",
    },
    {
      name: "lockTeamTemplateCreation",
      baseName: "lock_team_template_creation",
      type: "BooleanSettingUpdate",
    },
    {
      name: "lockTeamTemplateGallery",
      baseName: "lock_team_template_gallery",
      type: "BooleanSettingUpdate",
    },
    {
      name: "selfSignMessage",
      baseName: "self_sign_message",
      type: "StringSettingUpdate",
    },
    {
      name: "selfSignTitle",
      baseName: "self_sign_title",
      type: "StringSettingUpdate",
    },
    {
      name: "signatureRequestMessage",
      baseName: "signature_request_message",
      type: "StringSettingUpdate",
    },
    {
      name: "signatureRequestTitle",
      baseName: "signature_request_title",
      type: "StringSettingUpdate",
    },
    {
      name: "multifactorAuthApp",
      baseName: "multifactor_auth_app",
      type: "BooleanSettingUpdate",
    },
    {
      name: "multifactorAuthSms",
      baseName: "multifactor_auth_sms",
      type: "BooleanSettingUpdate",
    },
    {
      name: "unset",
      baseName: "unset",
      type: "Set<TeamSettingsUpdateRequest.UnsetEnum>",
    },
  ];

  static getAttributeTypeMap(): AttributeTypeMap {
    return TeamSettingsUpdateRequest.attributeTypeMap;
  }

  /** Attempt to instantiate and hydrate a new instance of this class */
  static init(data: any): TeamSettingsUpdateRequest {
    return ObjectSerializer.deserialize(data, "TeamSettingsUpdateRequest");
  }
}

export namespace TeamSettingsUpdateRequest {
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
    DataResidency = "data_residency",
    AllowTeamDeleteDocumentForEveryone = "allow_team_delete_document_for_everyone",
    AllowTeamDownloadCsv = "allow_team_download_csv",
    LockTeamTemplateCreation = "lock_team_template_creation",
    LockTeamTemplateGallery = "lock_team_template_gallery",
    SelfSignMessage = "self_sign_message",
    SelfSignTitle = "self_sign_title",
    SignatureRequestMessage = "signature_request_message",
    SignatureRequestTitle = "signature_request_title",
    MultifactorAuthApp = "multifactor_auth_app",
    MultifactorAuthSms = "multifactor_auth_sms",
  }
}
