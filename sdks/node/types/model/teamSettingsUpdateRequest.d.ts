import { AttributeTypeMap } from "./";
import { BooleanSettingUpdate } from "./booleanSettingUpdate";
import { DataResidencySettingUpdate } from "./dataResidencySettingUpdate";
import { DateFormatSettingUpdate } from "./dateFormatSettingUpdate";
import { RequiredSignatureTypesSettingUpdate } from "./requiredSignatureTypesSettingUpdate";
import { StringSettingUpdate } from "./stringSettingUpdate";
export declare class TeamSettingsUpdateRequest {
    "company"?: StringSettingUpdate;
    "customSigningRedirectEnabled"?: BooleanSettingUpdate;
    "customSigningRedirectUrl"?: StringSettingUpdate;
    "customTagline"?: StringSettingUpdate;
    "dateFormat"?: DateFormatSettingUpdate;
    "isSignatureRemindersEnabled"?: BooleanSettingUpdate;
    "requestEmailFrom"?: StringSettingUpdate;
    "requestEmailSignature"?: StringSettingUpdate;
    "requiredSignatureTypes"?: RequiredSignatureTypesSettingUpdate;
    "shouldEnableTamperProof"?: BooleanSettingUpdate;
    "shouldIncludeDistinctPdfs"?: BooleanSettingUpdate;
    "shouldOfferSignerAccessCode"?: BooleanSettingUpdate;
    "shouldOfferSignerSmsAuthentication"?: BooleanSettingUpdate;
    "shouldRemoveDocumentId"?: BooleanSettingUpdate;
    "dataResidency"?: DataResidencySettingUpdate;
    "allowTeamDeleteDocumentForEveryone"?: BooleanSettingUpdate;
    "allowTeamDownloadCsv"?: BooleanSettingUpdate;
    "lockTeamTemplateCreation"?: BooleanSettingUpdate;
    "lockTeamTemplateGallery"?: BooleanSettingUpdate;
    "selfSignMessage"?: StringSettingUpdate;
    "selfSignTitle"?: StringSettingUpdate;
    "signatureRequestMessage"?: StringSettingUpdate;
    "signatureRequestTitle"?: StringSettingUpdate;
    "multifactorAuthApp"?: BooleanSettingUpdate;
    "multifactorAuthSms"?: BooleanSettingUpdate;
    "unset"?: Set<TeamSettingsUpdateRequest.UnsetEnum>;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
    static init(data: any): TeamSettingsUpdateRequest;
}
export declare namespace TeamSettingsUpdateRequest {
    enum UnsetEnum {
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
        MultifactorAuthSms = "multifactor_auth_sms"
    }
}
