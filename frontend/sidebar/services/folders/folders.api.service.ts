import { IFoldersApiService } from "./folders.api.interface";
import { $log } from "../../../globals/angular.services.names";

FoldersApiService.$inject = [$log];
export class FoldersApiService implements IFoldersApiService {
    private readonly _log: ng.ILogService;
    constructor(log: ng.ILogService) {
        this._log = log;
    }
    getAll(): string[] {
        throw new Error('Method not implemented.');
    }
}