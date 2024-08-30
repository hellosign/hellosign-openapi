import { AttributeTypeMap } from "./";
export declare class FileResponse {
    "fileUrl"?: string;
    "expiresAt"?: number;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
    static init(data: any): FileResponse;
}
