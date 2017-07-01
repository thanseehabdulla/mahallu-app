"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var login_component_1 = require("./components/login/login.component");
var commite_component_1 = require("./components/commite/commite.component");
var admin_component_1 = require("./components/admin/admin.component");
var mydatepicker_1 = require("mydatepicker");
var core_2 = require("angular2-google-maps/core");
var router_1 = require("@angular/router");
var pagenotfound_component_1 = require("./components/pagenotfound/pagenotfound.component");
var auth_guard_1 = require("./components/security/auth.guard");
var auth_guard_admin_1 = require("./components/security/auth.guard.admin");
var auth_deguard_1 = require("./components/security/auth.deguard");
var auth_service_1 = require("./components/security/auth.service");
// updated routes
var charity_component_1 = require("./components/charity/charity.component");
var client_component_1 = require("./components/clientdetails/client.component");
var familydetail_component_1 = require("./components/familydetails/familydetail.component");
var marriagecertificate_component_1 = require("./components/marriagecertificate/marriagecertificate.component");
var miscellanous_component_1 = require("./components/miscellanous/miscellanous.component");
var molud_component_1 = require("./components/molud/molud.component");
var notification_component_1 = require("./components/notification/notification.component");
var perunaal_component_1 = require("./components/perunaal/perunaal.component");
var rathib_component_1 = require("./components/rathib/rathib.component");
var varasangya_component_1 = require("./components/varasangya/varasangya.component");
var appRoutes = [
    { path: 'charity', component: charity_component_1.CharityComponent, canActivate: [
            auth_guard_admin_1.CanActivateViaAuthGuardAdmin
        ] },
    { path: 'molud', component: molud_component_1.MoludComponent, canActivate: [
            auth_guard_admin_1.CanActivateViaAuthGuardAdmin
        ] },
    { path: 'client', component: client_component_1.ClientComponent, canActivate: [
            auth_guard_admin_1.CanActivateViaAuthGuardAdmin
        ] },
    { path: 'familydetail', component: familydetail_component_1.FamilydetailComponent, canActivate: [
            auth_guard_admin_1.CanActivateViaAuthGuardAdmin
        ] },
    { path: 'marriagecertificate', component: marriagecertificate_component_1.MarriageCertificateComponent, canActivate: [
            auth_guard_admin_1.CanActivateViaAuthGuardAdmin
        ] },
    { path: 'miscellanous', component: miscellanous_component_1.MiscellanousComponent, canActivate: [
            auth_guard_admin_1.CanActivateViaAuthGuardAdmin
        ] },
    { path: 'notification', component: notification_component_1.NotificationComponent, canActivate: [
            auth_guard_admin_1.CanActivateViaAuthGuardAdmin
        ] },
    { path: 'perunaal', component: perunaal_component_1.PerunaalComponent, canActivate: [
            auth_guard_admin_1.CanActivateViaAuthGuardAdmin
        ] },
    { path: 'rathib', component: rathib_component_1.RathibComponent, canActivate: [
            auth_guard_admin_1.CanActivateViaAuthGuardAdmin
        ] },
    { path: 'varasangya', component: varasangya_component_1.VarasangyaComponent, canActivate: [
            auth_guard_admin_1.CanActivateViaAuthGuardAdmin
        ] },
    { path: 'admin', component: admin_component_1.AdminComponent, canActivate: [
            auth_guard_admin_1.CanActivateViaAuthGuardAdmin
        ] },
    { path: 'commite', component: commite_component_1.CommiteComponent, canActivate: [
            auth_guard_admin_1.CanActivateViaAuthGuardAdmin
        ] },
    { path: 'login', component: login_component_1.TasksComponent },
    { path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    { path: '**', component: pagenotfound_component_1.pageNotFoundComponent }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, http_1.HttpModule, forms_1.FormsModule, mydatepicker_1.MyDatePickerModule, core_2.AgmCoreModule.forRoot({
                apiKey: 'AIzaSyDJSftDw2ZAC-PU9AXx0u7UVhbKGqO90j0'
            }), router_1.RouterModule.forRoot(appRoutes)],
        declarations: [app_component_1.AppComponent, login_component_1.TasksComponent, admin_component_1.AdminComponent, pagenotfound_component_1.pageNotFoundComponent, commite_component_1.CommiteComponent, charity_component_1.CharityComponent, client_component_1.ClientComponent, familydetail_component_1.FamilydetailComponent, marriagecertificate_component_1.MarriageCertificateComponent, miscellanous_component_1.MiscellanousComponent, molud_component_1.MoludComponent, notification_component_1.NotificationComponent, perunaal_component_1.PerunaalComponent, rathib_component_1.RathibComponent, varasangya_component_1.VarasangyaComponent],
        providers: [
            auth_service_1.AuthService,
            auth_guard_1.CanActivateViaAuthGuard, auth_deguard_1.ConfirmDeactivateGuard, auth_guard_admin_1.CanActivateViaAuthGuardAdmin
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map