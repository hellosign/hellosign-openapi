import { Authentication, Interceptor, HttpBasicAuth, HttpBearerAuth, ApiAppCreateRequest, ApiAppGetResponse, ApiAppListResponse, ApiAppUpdateRequest } from "../model";
import { optionsI, returnTypeT, returnTypeI } from "./";
export declare enum ApiAppApiApiKeys {
}
export declare class ApiAppApi {
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
    apiAppCreate(apiAppCreateRequest: ApiAppCreateRequest, options?: optionsI): Promise<returnTypeT<ApiAppGetResponse>>;
    apiAppDelete(clientId: string, options?: optionsI): Promise<returnTypeI>;
    apiAppGet(clientId: string, options?: optionsI): Promise<returnTypeT<ApiAppGetResponse>>;
    apiAppList(page?: number, pageSize?: number, options?: optionsI): Promise<returnTypeT<ApiAppListResponse>>;
    apiAppUpdate(clientId: string, apiAppUpdateRequest: ApiAppUpdateRequest, options?: optionsI): Promise<returnTypeT<ApiAppGetResponse>>;
}
