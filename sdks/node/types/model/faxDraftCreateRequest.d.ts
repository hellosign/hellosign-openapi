import { AttributeTypeMap, RequestFile } from "./";
import { SubEditorPageOptions } from "./subEditorPageOptions";
export declare class FaxDraftCreateRequest {
    "clientId": string;
    "files"?: Array<RequestFile>;
    "fileUrls"?: Array<string>;
    "editorOptions"?: SubEditorPageOptions;
    "recipients"?: Set<string>;
    "testMode"?: boolean;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
    static init(data: any): FaxDraftCreateRequest;
}
