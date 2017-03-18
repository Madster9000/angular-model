import { IButtonsApiService } from "./buttons.api.interface";
import { $http } from "../../../globals/angular.services.names";

ButtonsApiService.$inject = [$http]
export class ButtonsApiService implements IButtonsApiService {
    private readonly _http: ng.IHttpService;
    constructor(http: ng.IHttpService) {
        this._http = http;
    }
    getAll(): string[] {
        throw new Error('Method not implemented.');
    }
}