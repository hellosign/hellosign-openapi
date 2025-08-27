import { AttributeTypeMap } from "./";
export declare class SubSignerExperience {
    "formView"?: SubSignerExperience.FormViewEnum;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
    static init(data: any): SubSignerExperience;
}
export declare namespace SubSignerExperience {
    enum FormViewEnum {
        Disabled = "disabled",
        Enabled = "enabled",
        EnabledByDefault = "enabled_by_default",
        Forced = "forced"
    }
}
