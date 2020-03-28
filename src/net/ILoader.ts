import HttpRequest from "./HttpRequest";
export default interface ILoader {
    bytesLoaded: number;

    bytesTotal: number;

    data: any;

    dataFormat: string;

    timeout: number;

    readonly state: number;

    close(): void;

    load(request?: HttpRequest): void;

}
