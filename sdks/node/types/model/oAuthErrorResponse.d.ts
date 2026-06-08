import { AttributeTypeMap } from "./";
import { OAuthErrorResponseError } from "./oAuthErrorResponseError";
export declare class OAuthErrorResponse {
    "error": OAuthErrorResponseError;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
    static init(data: any): OAuthErrorResponse;
}
