"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
const app_module_1 = require("./app.module");
const core_1 = require("@angular/core");
const environment_1 = require("./environment");
const platform = platform_browser_dynamic_1.platformBrowserDynamic();
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform.bootstrapModule(app_module_1.AppModule);
