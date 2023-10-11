/// <reference types="node" />
import { Authentication, Interceptor, HttpBasicAuth, HttpBearerAuth, FileResponse, FileResponseDataUri, TemplateAddUserRequest, TemplateCreateEmbeddedDraftRequest, TemplateCreateEmbeddedDraftResponse, TemplateGetResponse, TemplateListResponse, TemplateRemoveUserRequest, TemplateUpdateFilesRequest, TemplateUpdateFilesResponse } from "../model";
import { optionsI, returnTypeT, returnTypeI } from "./";
export declare enum TemplateApiApiKeys {
}
export declare class TemplateApi {
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
    templateAddUser(templateId: string, templateAddUserRequest: TemplateAddUserRequest, options?: optionsI): Promise<returnTypeT<TemplateGetResponse>>;
    templateCreateEmbeddedDraft(templateCreateEmbeddedDraftRequest: TemplateCreateEmbeddedDraftRequest, options?: optionsI): Promise<returnTypeT<TemplateCreateEmbeddedDraftResponse>>;
    templateDelete(templateId: string, options?: optionsI): Promise<returnTypeI>;
    templateFiles(templateId: string, fileType?: "pdf" | "zip", options?: optionsI): Promise<returnTypeT<Buffer>>;
    templateFilesAsDataUri(templateId: string, options?: optionsI): Promise<returnTypeT<FileResponseDataUri>>;
    templateFilesAsFileUrl(templateId: string, options?: optionsI): Promise<returnTypeT<FileResponse>>;
    templateGet(templateId: string, options?: optionsI): Promise<returnTypeT<TemplateGetResponse>>;
    templateList(accountId?: string, page?: number, pageSize?: number, query?: string, options?: optionsI): Promise<returnTypeT<TemplateListResponse>>;
    templateRemoveUser(templateId: string, templateRemoveUserRequest: TemplateRemoveUserRequest, options?: optionsI): Promise<returnTypeT<TemplateGetResponse>>;
    templateUpdateFiles(templateId: string, templateUpdateFilesRequest: TemplateUpdateFilesRequest, options?: optionsI): Promise<returnTypeT<TemplateUpdateFilesResponse>>;
}
