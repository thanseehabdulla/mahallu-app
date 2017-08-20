"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const platform_browser_1 = require("@angular/platform-browser");
const http_1 = require("@angular/http");
const forms_1 = require("@angular/forms");
const app_component_1 = require("./app.component");
const login_component_1 = require("./components/login/login.component");
const admin_component_1 = require("./components/admin/admin.component");
const mydatepicker_1 = require("mydatepicker");
const router_1 = require("@angular/router");
const pagenotfound_component_1 = require("./components/pagenotfound/pagenotfound.component");
const auth_guard_1 = require("./components/security/auth.guard");
const auth_guard_admin_1 = require("./components/security/auth.guard.admin");
const auth_service_1 = require("./components/security/auth.service");
const dashboard_1 = require("./components/Dashboard/dashboard");
const ng2_select_1 = require("ng2-select");
const appRoutes = [
    {
        path: 'admin', component: admin_component_1.AdminComponent, canActivate: [
            auth_guard_admin_1.CanActivateViaAuthGuardAdmin
        ]
    },
    { path: 'login', component: login_component_1.TasksComponent },
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    }, {
        path: 'dashboard', component: dashboard_1.dashboard, canActivate: [
            auth_guard_admin_1.CanActivateViaAuthGuardAdmin
        ]
    },
    { path: '**', component: pagenotfound_component_1.pageNotFoundComponent }
];
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        imports: [ng2_select_1.SelectModule, platform_browser_1.BrowserModule, http_1.HttpModule, forms_1.FormsModule, mydatepicker_1.MyDatePickerModule, router_1.RouterModule.forRoot(appRoutes)],
        declarations: [dashboard_1.dashboard, app_component_1.AppComponent, login_component_1.TasksComponent, admin_component_1.AdminComponent, pagenotfound_component_1.pageNotFoundComponent],
        providers: [
            auth_service_1.AuthService,
            auth_guard_1.CanActivateViaAuthGuard, auth_guard_admin_1.CanActivateViaAuthGuardAdmin
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
