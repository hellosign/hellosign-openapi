import { AttributeTypeMap, RequestFile } from "./";
export declare class DocumentFieldDetectionRequest {
    "detectionMode": string;
    "file"?: RequestFile;
    "fileUrl"?: string;
    "pageRange"?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
    static init(data: any): DocumentFieldDetectionRequest;
}
