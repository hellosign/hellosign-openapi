import { AttributeTypeMap } from "./";
export declare class SubFormFieldRuleAction {
    "hidden": boolean;
    "type": SubFormFieldRuleAction.TypeEnum;
    "fieldId"?: string;
    "groupId"?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
    static init(data: any): SubFormFieldRuleAction;
}
export declare namespace SubFormFieldRuleAction {
    enum TypeEnum {
        FieldVisibility = "change-field-visibility",
        GroupVisibility = "change-group-visibility"
    }
}
