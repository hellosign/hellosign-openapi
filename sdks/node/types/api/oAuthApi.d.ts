import { Authentication, HttpBasicAuth, HttpBearerAuth, Interceptor, OAuthTokenGenerateRequest, OAuthTokenRefreshRequest, OAuthTokenResponse } from "../model";
import { optionsI, returnTypeT } from "./";
export declare enum OAuthApiApiKeys {
}
export declare class OAuthApi {
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
    oauthTokenGenerate(oAuthTokenGenerateRequest: OAuthTokenGenerateRequest, options?: optionsI): Promise<returnTypeT<OAuthTokenResponse>>;
    oauthTokenRefresh(oAuthTokenRefreshRequest: OAuthTokenRefreshRequest, options?: optionsI): Promise<returnTypeT<OAuthTokenResponse>>;
}
