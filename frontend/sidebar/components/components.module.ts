// dependencies
import * as angular from "angular";

import * as servicesModule from "../services/sidebar-services.module";

import * as buttons from "./buttons/buttons.component";
import { FoldersController } from "./folders/folders.component";

// constants
export const name = "app.sidebar.components"

// module
angular
    .module(name,
    [
        servicesModule.name
    ])
    .component("buttons", {
        template: require("./buttons/buttons.html"),
        controller: buttons.ButtonsController,
        bindings: buttons.bindings
    })
    .component("folders", {
        template: require("./folders/folders.html"),
        controller: FoldersController,
        bindings: FoldersController.$bindings
    });
