// dependecies
import * as angular from "angular";

import * as sidebarComponents from "./sidebar/components/components.module";

// constants
export const name = "app.main";

// module
angular
    .module(name,
    [
        sidebarComponents.name
    ]);