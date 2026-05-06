import { AttributeTypeMap } from "./";
export declare class TeamAddMemberRequest {
    "accountId"?: string;
    "emailAddress"?: string;
    "role"?: TeamAddMemberRequest.RoleEnum;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
    static init(data: any): TeamAddMemberRequest;
}
export declare namespace TeamAddMemberRequest {
    enum RoleEnum {
        Member = "Member",
        CustomSign13034 = "Custom SIGN-13034",
        CustomSign13047 = "Custom SIGN-13047",
        Developer = "Developer",
        TeamManager = "Team Manager",
        Admin = "Admin"
    }
}
