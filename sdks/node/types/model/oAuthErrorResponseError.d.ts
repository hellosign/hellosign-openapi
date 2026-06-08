import { AttributeTypeMap } from "./";
export declare class OAuthErrorResponseError {
    "errorMsg": string;
    "errorName": OAuthErrorResponseError.ErrorNameEnum;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
    static init(data: any): OAuthErrorResponseError;
}
export declare namespace OAuthErrorResponseError {
    enum ErrorNameEnum {
        InvalidGrant = "invalid_grant",
        InvalidClient = "invalid_client",
        InvalidRequest = "invalid_request",
        UnauthorizedClient = "unauthorized_client",
        UnsupportedGrantType = "unsupported_grant_type",
        PaymentRequired = "payment_required",
        AddonRequired = "addon_required",
        InvalidScope = "invalid_scope",
        QuotaReached = "quota_reached",
        ServerError = "server_error",
        TemporaryUnavailable = "temporary_unavailable"
    }
}
