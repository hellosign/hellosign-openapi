import { AttributeTypeMap } from "./";
import { DocumentFieldDetectionResponseDetectionResult } from "./documentFieldDetectionResponseDetectionResult";
import { WarningResponse } from "./warningResponse";
export declare class DocumentFieldDetectionResponse {
    "detectionResult": DocumentFieldDetectionResponseDetectionResult;
    "warnings"?: Array<WarningResponse>;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
    static init(data: any): DocumentFieldDetectionResponse;
}
