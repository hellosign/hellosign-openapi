import { Authentication, FaxLineAddUserRequest, FaxLineAreaCodeGetResponse, FaxLineCreateRequest, FaxLineDeleteRequest, FaxLineListResponse, FaxLineRemoveUserRequest, FaxLineResponse, HttpBasicAuth, HttpBearerAuth, Interceptor } from "../model";
import { optionsI, returnTypeI, returnTypeT } from "./";
export declare enum FaxLineApiApiKeys {
}
export declare class FaxLineApi {
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
    faxLineAddUser(faxLineAddUserRequest: FaxLineAddUserRequest, options?: optionsI): Promise<returnTypeT<FaxLineResponse>>;
    faxLineAreaCodeGet(country: "CA" | "US" | "UK", state?: "AK" | "AL" | "AR" | "AZ" | "CA" | "CO" | "CT" | "DC" | "DE" | "FL" | "GA" | "HI" | "IA" | "ID" | "IL" | "IN" | "KS" | "KY" | "LA" | "MA" | "MD" | "ME" | "MI" | "MN" | "MO" | "MS" | "MT" | "NC" | "ND" | "NE" | "NH" | "NJ" | "NM" | "NV" | "NY" | "OH" | "OK" | "OR" | "PA" | "RI" | "SC" | "SD" | "TN" | "TX" | "UT" | "VA" | "VT" | "WA" | "WI" | "WV" | "WY", province?: "AB" | "BC" | "MB" | "NB" | "NL" | "NT" | "NS" | "NU" | "ON" | "PE" | "QC" | "SK" | "YT", city?: string, options?: optionsI): Promise<returnTypeT<FaxLineAreaCodeGetResponse>>;
    faxLineCreate(faxLineCreateRequest: FaxLineCreateRequest, options?: optionsI): Promise<returnTypeT<FaxLineResponse>>;
    faxLineDelete(faxLineDeleteRequest: FaxLineDeleteRequest, options?: optionsI): Promise<returnTypeI>;
    faxLineGet(number: string, options?: optionsI): Promise<returnTypeT<FaxLineResponse>>;
    faxLineList(accountId?: string, page?: number, pageSize?: number, showTeamLines?: boolean, options?: optionsI): Promise<returnTypeT<FaxLineListResponse>>;
    faxLineRemoveUser(faxLineRemoveUserRequest: FaxLineRemoveUserRequest, options?: optionsI): Promise<returnTypeT<FaxLineResponse>>;
}
