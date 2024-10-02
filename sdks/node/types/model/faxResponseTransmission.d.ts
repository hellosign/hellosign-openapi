import { AttributeTypeMap } from "./";
export declare class FaxResponseTransmission {
    "recipient"?: string;
    "sender"?: string;
    "statusCode"?: string;
    "sentAt"?: number;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
    static init(data: any): FaxResponseTransmission;
}
