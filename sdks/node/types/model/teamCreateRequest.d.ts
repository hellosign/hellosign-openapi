import { AttributeTypeMap } from "./";
export declare class TeamCreateRequest {
    "name"?: string;
    "parentTeamId"?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
    static init(data: any): TeamCreateRequest;
}
