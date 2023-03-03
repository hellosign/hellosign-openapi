import { AttributeTypeMap } from "./";
export declare class WarningResponse {
    "warningMsg": string;
    "warningName": string;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
    static init(data: any): WarningResponse;
}
