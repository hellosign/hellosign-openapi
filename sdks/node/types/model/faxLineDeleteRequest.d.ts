import { AttributeTypeMap } from "./";
export declare class FaxLineDeleteRequest {
    "number": string;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
    static init(data: any): FaxLineDeleteRequest;
}
