import { Authentication, Interceptor, HttpBasicAuth, HttpBearerAuth, TeamAddMemberRequest, TeamCreateRequest, TeamGetInfoResponse, TeamGetResponse, TeamInvitesResponse, TeamMembersResponse, TeamRemoveMemberRequest, TeamSubTeamsResponse, TeamUpdateRequest } from "../model";
import { optionsI, returnTypeT, returnTypeI } from "./";
export declare enum TeamApiApiKeys {
}
export declare class TeamApi {
    protected _basePath: string;
    protected _defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        default: Authentication;
        api_key: HttpBasicAuth;
        oauth2: HttpBearerAuth;
    };
    protected interceptors: Interceptor[];
    constructor(basePath?: string);
    set useQuerystring(value: boolean);
    set basePath(basePath: string);
    set defaultHeaders(defaultHeaders: any);
    get defaultHeaders(): any;
    get basePath(): string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: string): void;
    set username(username: string);
    set password(password: string);
    set accessToken(accessToken: string | (() => string));
    addInterceptor(interceptor: Interceptor): void;
    teamAddMember(teamAddMemberRequest: TeamAddMemberRequest, teamId?: string, options?: optionsI): Promise<returnTypeT<TeamGetResponse>>;
    teamCreate(teamCreateRequest: TeamCreateRequest, options?: optionsI): Promise<returnTypeT<TeamGetResponse>>;
    teamDelete(options?: optionsI): Promise<returnTypeI>;
    teamGet(options?: optionsI): Promise<returnTypeT<TeamGetResponse>>;
    teamInfo(teamId?: string, options?: optionsI): Promise<returnTypeT<TeamGetInfoResponse>>;
    teamInvites(emailAddress?: string, options?: optionsI): Promise<returnTypeT<TeamInvitesResponse>>;
    teamMembers(teamId: string, page?: number, pageSize?: number, options?: optionsI): Promise<returnTypeT<TeamMembersResponse>>;
    teamRemoveMember(teamRemoveMemberRequest: TeamRemoveMemberRequest, options?: optionsI): Promise<returnTypeT<TeamGetResponse>>;
    teamSubTeams(teamId: string, page?: number, pageSize?: number, options?: optionsI): Promise<returnTypeT<TeamSubTeamsResponse>>;
    teamUpdate(teamUpdateRequest: TeamUpdateRequest, options?: optionsI): Promise<returnTypeT<TeamGetResponse>>;
}
