import { AttributeTypeMap } from "./";
export declare class ErrorResponseError {
    "errorMsg": string;
    "errorName": string;
    "errorPath"?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
    static init(data: any): ErrorResponseError;
}
