import { AttributeTypeMap } from "./";
import { ErrorResponseError } from "./errorResponseError";
import { SubFormFieldGroup } from "./subFormFieldGroup";
import { SubFormFieldsPerDocumentBase } from "./subFormFieldsPerDocumentBase";
import { WarningResponse } from "./warningResponse";
export declare class DocumentFieldDetectionResponseDetectionResult {
    "documentHash": string;
    "detectionMode": string;
    "pageCount": number;
    "pagesAnalyzed": string;
    "detectedAt": number;
    "formFieldsPerDocument": Array<SubFormFieldsPerDocumentBase>;
    "formFieldGroups": Array<SubFormFieldGroup>;
    "warnings": Array<WarningResponse>;
    "errors": Array<ErrorResponseError>;
    "suggestions": Array<string>;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
    static init(data: any): DocumentFieldDetectionResponseDetectionResult;
}
