import { AttributeTypeMap } from "./";
export declare class OAuthTokenRefreshRequest {
    "grantType": string;
    "refreshToken": string;
    "clientId"?: string;
    "clientSecret"?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
    static init(data: any): OAuthTokenRefreshRequest;
}
