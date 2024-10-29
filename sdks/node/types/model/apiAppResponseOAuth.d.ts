import { AttributeTypeMap } from "./";
export declare class ApiAppResponseOAuth {
    "callbackUrl"?: string;
    "secret"?: string | null;
    "scopes"?: Array<string>;
    "chargesUsers"?: boolean;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
    static init(data: any): ApiAppResponseOAuth;
}
