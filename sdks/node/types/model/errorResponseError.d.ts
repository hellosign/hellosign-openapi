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
        MethodNotSupported = "method_not_supported",
        Conflict = "conflict",
        Deleted = "deleted",
        UnprocessableEntity = "unprocessable_entity",
        ExceededRate = "exceeded_rate",
        MaxFaxes = "max_faxes",
        Unavailable = "unavailable",
        Maintenance = "maintenance",
        InvalidRecipient = "invalid_recipient",
        InvalidReminder = "invalid_reminder",
        TeamInviteFailed = "team_invite_failed",
        SignatureRequestCancelFailed = "signature_request_cancel_failed",
        SignatureRequestRemoveFailed = "signature_request_remove_failed",
        SignatureRequestExpired = "signature_request_expired",
        Unknown = "unknown"
    }
}
