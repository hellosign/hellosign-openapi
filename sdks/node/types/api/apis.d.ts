import { ErrorResponse } from "../model";
export declare class HttpError extends Error {
    response: AxiosResponse;
    body: ErrorResponse;
    statusCode?: number | undefined;
    constructor(response: AxiosResponse, body: ErrorResponse, statusCode?: number | undefined);
}
export { RequestFile } from "../model";
import { AxiosResponse } from "axios";
import formData from "form-data";
import { AttributeTypeMap } from "../model";
export interface optionsI {
    headers: {
        [name: string]: string;
    };
}
export interface returnTypeT<T> {
    response: AxiosResponse;
    body: T;
}
export interface returnTypeI {
    response: AxiosResponse;
    body?: any;
}
export declare const queryParamsSerializer: (params: any) => string;
export declare const USER_AGENT = "OpenAPI-Generator/1.9-dev/node";
export declare const generateFormData: (obj: any, typemap: AttributeTypeMap) => {
    localVarUseFormData: boolean;
    data: object;
};
export declare const toFormData: (obj: object) => formData;
