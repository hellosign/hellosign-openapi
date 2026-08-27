import { AttributeTypeMap } from "./";
export declare class SubEditorPageOptions {
    "forceUploadPage"?: boolean;
    "forceEditorPage"?: boolean;
    "forceReviewPage"?: boolean;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
    static init(data: any): SubEditorPageOptions;
}
