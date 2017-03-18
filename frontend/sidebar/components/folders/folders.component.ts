import { IFoldersApiService, IFoldersApiServiceName } from "../../services/folders/folders.api.interface";

FoldersController.$inject = [IFoldersApiServiceName];
FoldersController.$bindings = {
    folders: "<"
}
export class FoldersController {
    public static $bindings: { [boundProperty: string]: string };
    private readonly _foldersApiService: IFoldersApiService;

    // bindings
    folders: string[];
    constructor(foldersApiService: IFoldersApiService) {
        this._foldersApiService = foldersApiService;
    }
}