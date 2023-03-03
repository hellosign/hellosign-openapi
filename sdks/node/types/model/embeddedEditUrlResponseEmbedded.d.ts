import { AttributeTypeMap } from "./";
export declare class EmbeddedEditUrlResponseEmbedded {
    "editUrl"?: string;
    "expiresAt"?: number;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
    static init(data: any): EmbeddedEditUrlResponseEmbedded;
}
