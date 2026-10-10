import { AttributeTypeMap } from "./";
import { RequiredSignatureType } from "./requiredSignatureType";
import { TeamSettingLock } from "./teamSettingLock";
export declare class RequiredSignatureTypesSettingUpdate {
    "value"?: Set<RequiredSignatureType>;
    "lockMode"?: TeamSettingLock;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
    static init(data: any): RequiredSignatureTypesSettingUpdate;
}
export declare namespace RequiredSignatureTypesSettingUpdate { }
