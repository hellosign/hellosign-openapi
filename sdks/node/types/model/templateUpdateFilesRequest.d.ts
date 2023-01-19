import { RequestFile, AttributeTypeMap } from "./models";
export declare class TemplateUpdateFilesRequest {
    "clientId"?: string;
    "files"?: Array<RequestFile>;
    "fileUrls"?: Array<string>;
    "message"?: string;
    "subject"?: string;
    "testMode"?: boolean;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
    static init(data: any): TemplateUpdateFilesRequest;
}
