import { AttributeTypeMap } from "./";
export declare class ErrorResponseError {
    "errorMsg": string;
    "errorName": ErrorResponseError.ErrorNameEnum;
    "errorPath"?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
    static init(data: any): ErrorResponseError;
}
export declare namespace ErrorResponseError {
    enum ErrorNameEnum {
        BadRequest = "bad_request",
        Unauthorized = "unauthorized",
        PaymentRequired = "payment_required",
        Forbidden = "forbidden",
        NotFound = "not_found",
        Conflict = "conflict",
        ExceededRate = "exceeded_rate",
        Unknown = "unknown",
        TeamInviteFailed = "team_invite_failed",
        MaxFaxes = "max_faxes",
        InvalidRecipient = "invalid_recipient",
        SignatureRequestCancelFailed = "signature_request_cancel_failed",
        SignatureRequestRemoveFailed = "signature_request_remove_failed",
        Maintenance = "maintenance",
        Deleted = "deleted",
        MethodNotSupported = "method_not_supported",
        InvalidReminder = "invalid_reminder",
        Unavailable = "unavailable",
        UnprocessableEntity = "unprocessable_entity",
        SignatureRequestExpired = "signature_request_expired"
    }
}
