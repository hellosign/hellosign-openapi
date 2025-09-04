import { AttributeTypeMap } from "./";
export declare class SignatureRequestSignerExperience {
    "formView": SignatureRequestSignerExperience.FormViewEnum;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
    static init(data: any): SignatureRequestSignerExperience;
}
export declare namespace SignatureRequestSignerExperience {
    enum FormViewEnum {
        Disabled = "disabled",
        Enabled = "enabled",
        EnabledByDefault = "enabled_by_default",
        Forced = "forced"
    }
}
