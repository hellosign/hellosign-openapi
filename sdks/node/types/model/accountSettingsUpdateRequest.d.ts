import { AttributeTypeMap } from "./";
import { DateFormat } from "./dateFormat";
import { RequiredSignatureType } from "./requiredSignatureType";
export declare class AccountSettingsUpdateRequest {
    "company"?: string;
    "customSigningRedirectEnabled"?: boolean;
    "customSigningRedirectUrl"?: string;
    "customTagline"?: string;
    "dateFormat"?: DateFormat;
    "isSignatureRemindersEnabled"?: boolean;
    "requestEmailFrom"?: string;
    "requestEmailSignature"?: string;
    "requiredSignatureTypes"?: Set<RequiredSignatureType>;
    "shouldEnableTamperProof"?: boolean;
    "shouldIncludeDistinctPdfs"?: boolean;
    "shouldOfferSignerAccessCode"?: boolean;
    "shouldOfferSignerSmsAuthentication"?: boolean;
    "shouldRemoveDocumentId"?: boolean;
    "isNotifyOnSignEnabled"?: boolean;
    "isNotifyOnViewEnabled"?: boolean;
    "shouldAutocomplete"?: boolean;
    "shouldIncludeRequestedPdfs"?: boolean;
    "shouldIncludeRequestedPdfsForOthers"?: boolean;
    "shouldIncludeSentDocPdfs"?: boolean;
    "shouldIncludeSentDocPdfsForOthers"?: boolean;
    "shouldSendDailySummary"?: boolean;
    "shouldSendEmbeddedSignatureConfEmails"?: boolean;
    "shouldSendOrderedSrEmail"?: boolean;
    "shouldSendOutboundConfEmails"?: boolean;
    "templateLinkSignatureEmailsEnabled"?: boolean;
    "unset"?: Set<AccountSettingsUpdateRequest.UnsetEnum>;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
    static init(data: any): AccountSettingsUpdateRequest;
}
export declare namespace AccountSettingsUpdateRequest {
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
        TemplateLinkSignatureEmailsEnabled = "template_link_signature_emails_enabled"
    }
}
