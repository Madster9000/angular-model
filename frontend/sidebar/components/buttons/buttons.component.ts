import { IButtonsApiServiceName, IButtonsApiService } from "../../services/buttons/buttons.api.interface";

export const bindings = {
    buttons: "<"
};

ButtonsController.$inject = [IButtonsApiServiceName];
export class ButtonsController {
    private readonly _buttonsApiService: IButtonsApiService
    constructor(buttonsApiService: IButtonsApiService) {
        this._buttonsApiService = buttonsApiService;
    }
    // bindings
    buttons: string[]
}