import { AttributeTypeMap } from "./";
export declare class FaxLineAreaCodeGetResponse {
    "areaCodes": Array<number>;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
    static init(data: any): FaxLineAreaCodeGetResponse;
}
