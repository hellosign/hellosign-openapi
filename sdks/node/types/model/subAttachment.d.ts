import { AttributeTypeMap } from "./";
export declare class SubAttachment {
    "name": string;
    "signerIndex": number;
    "instructions"?: string;
    "required"?: boolean;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
    static init(data: any): SubAttachment;
}
