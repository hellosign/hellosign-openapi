import { AttributeTypeMap } from "./";
import { SubEditorOptions } from "./subEditorOptions";
import { SubMergeField } from "./subMergeField";
import { SubSignerExperience } from "./subSignerExperience";
export declare class EmbeddedEditUrlRequest {
    "allowEditCcs"?: boolean;
    "ccRoles"?: Array<string>;
    "editorOptions"?: SubEditorOptions;
    "forceSignerRoles"?: boolean;
    "forceSubjectMessage"?: boolean;
    "mergeFields"?: Array<SubMergeField>;
    "previewOnly"?: boolean;
    "showPreview"?: boolean;
    "showProgressStepper"?: boolean;
    "testMode"?: boolean;
    "signerExperience"?: SubSignerExperience;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
    static init(data: any): EmbeddedEditUrlRequest;
}
