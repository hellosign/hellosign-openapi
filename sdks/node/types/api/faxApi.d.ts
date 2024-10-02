import { Authentication, FaxGetResponse, FaxListResponse, FaxSendRequest, HttpBasicAuth, HttpBearerAuth, Interceptor } from "../model";
import { optionsI, returnTypeI, returnTypeT } from "./";
export declare enum FaxApiApiKeys {
}
export declare class FaxApi {
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
    faxDelete(faxId: string, options?: optionsI): Promise<returnTypeI>;
    faxFiles(faxId: string, options?: optionsI): Promise<returnTypeT<Buffer>>;
    faxGet(faxId: string, options?: optionsI): Promise<returnTypeT<FaxGetResponse>>;
    faxList(page?: number, pageSize?: number, options?: optionsI): Promise<returnTypeT<FaxListResponse>>;
    faxSend(faxSendRequest: FaxSendRequest, options?: optionsI): Promise<returnTypeT<FaxGetResponse>>;
}
