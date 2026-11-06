import { AttributeTypeMap } from "./";
export declare class AccountSettingsUpdateRequest {
    "set"?: {
        [key: string]: any;
    };
    "unset"?: Array<string>;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
    static init(data: any): AccountSettingsUpdateRequest;
}
