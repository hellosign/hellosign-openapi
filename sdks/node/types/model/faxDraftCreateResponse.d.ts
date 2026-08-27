import { AttributeTypeMap } from "./";
import { FaxDraftResponse } from "./faxDraftResponse";
import { WarningResponse } from "./warningResponse";
export declare class FaxDraftCreateResponse {
    "faxDraft": FaxDraftResponse;
    "warnings"?: Array<WarningResponse>;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
    static init(data: any): FaxDraftCreateResponse;
}
