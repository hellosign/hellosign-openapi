import { AttributeTypeMap } from "./";
export declare class ApiAppResponseOAuth {
    "callbackUrl": string;
    "scopes": Array<string>;
    "chargesUsers": boolean;
    "secret"?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
    static init(data: any): ApiAppResponseOAuth;
}
