import { AxiosRequestConfig } from "axios";
import { Headers } from "form-data";
import * as fs from "fs";
export interface RequestDetailedFile {
    value: Buffer;
    options: {
        filename: string;
        contentType: string;
        header?: string | Headers;
        knownLength?: number;
        filepath?: string;
    };
}
interface AttributeType {
    name: string;
    baseName: string;
    type: string;
}
export interface AttributeTypeMap extends Array<AttributeType> {
}
export type RequestFile = fs.ReadStream | RequestDetailedFile;
export declare class ObjectSerializer {
    static findCorrectType(data: any, expectedType: string): any;
    static serialize(data: any, type: string): any;
    static deserialize(data: any, type: string): any;
}
export interface Authentication {
    applyToRequest(requestOptions: AxiosRequestConfig): Promise<void> | void;
}
export declare class HttpBasicAuth implements Authentication {
    username: string;
    password: string;
    applyToRequest(requestOptions: AxiosRequestConfig): void;
}
export declare class HttpBearerAuth implements Authentication {
    accessToken: string | (() => string);
    applyToRequest(requestOptions: AxiosRequestConfig): void;
}
export declare class ApiKeyAuth implements Authentication {
    private location;
    private paramName;
    apiKey: string;
    constructor(location: string, paramName: string);
    applyToRequest(requestOptions: AxiosRequestConfig): void;
}
export declare class OAuth implements Authentication {
    accessToken: string;
    applyToRequest(requestOptions: AxiosRequestConfig): void;
}
export declare class VoidAuth implements Authentication {
    username: string;
    password: string;
    applyToRequest(_: AxiosRequestConfig): void;
}
export type Interceptor = (requestOptions: AxiosRequestConfig) => Promise<void> | void;
export {};
