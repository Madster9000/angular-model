// dependencies
import * as angular from "angular";

import { ButtonsApiService } from "./buttons/buttons.api.service";
import { FoldersApiService } from "./folders/folders.api.service";
import { IButtonsApiServiceName } from "./buttons/buttons.api.interface";
import { IFoldersApiServiceName } from "./folders/folders.api.interface";

// constants
export const name = "app.sidebar.services";

angular
    .module(name, [])
    .service(IButtonsApiServiceName, ButtonsApiService)
    .service(IFoldersApiServiceName, FoldersApiService);