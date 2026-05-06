import { AttributeTypeMap } from "./";
export declare class TeamRemoveMemberRequest {
    "accountId"?: string;
    "emailAddress"?: string;
    "newOwnerEmailAddress"?: string;
    "newTeamId"?: string;
    "newRole"?: TeamRemoveMemberRequest.NewRoleEnum;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
    static init(data: any): TeamRemoveMemberRequest;
}
export declare namespace TeamRemoveMemberRequest {
    enum NewRoleEnum {
        Member = "Member",
        CustomSign13034 = "Custom SIGN-13034",
        CustomSign13047 = "Custom SIGN-13047",
        Developer = "Developer",
        TeamManager = "Team Manager",
        Admin = "Admin"
    }
}
