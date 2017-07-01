"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var http_1 = require("@angular/http");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/map");
require("jquery");
require("datatables.net");
var AdminComponent = (function () {
    function AdminComponent(router, http) {
        this.router = router;
        this.http = http;
    }
    // on init
    AdminComponent.prototype.ngOnInit = function () {
    };
    AdminComponent.prototype.ngAfterViewInit = function () {
        this.initDatatable();
    };
    AdminComponent.prototype.initDatatable = function () {
    };
    AdminComponent.prototype.reInitDatatable = function () {
    };
    // main menu
    // about function
    AdminComponent.prototype.aboutmahal = function () {
    };
    //instruction function 
    AdminComponent.prototype.instruction = function () {
    };
    // setting function
    AdminComponent.prototype.setting = function () {
    };
    // help
    AdminComponent.prototype.help = function () {
    };
    // report us
    AdminComponent.prototype.report = function () {
    };
    // Logout
    AdminComponent.prototype.Logout = function () {
    };
    // panel items
    // home
    AdminComponent.prototype.home = function () {
        this.router.navigate(['/admin']);
    };
    AdminComponent.prototype.addmember = function () {
        this.router.navigate(['/client']);
    };
    AdminComponent.prototype.inbox = function () {
        // class disabled
    };
    AdminComponent.prototype.varasangya = function () {
        this.router.navigate(['/varasangya']);
    };
    AdminComponent.prototype.eidsangya = function () {
        this.router.navigate(['/perunaal']);
    };
    AdminComponent.prototype.moludsangya = function () {
        this.router.navigate(['/molud']);
    };
    AdminComponent.prototype.rathibsangya = function () {
        this.router.navigate(['/rathib']);
    };
    AdminComponent.prototype.charitysangya = function () {
        this.router.navigate(['/charity']);
    };
    AdminComponent.prototype.miscellanous = function () {
        this.router.navigate(['/miscellanous']);
    };
    AdminComponent.prototype.madrass = function () {
        // currently disabled
    };
    AdminComponent.prototype.onlinetranscation = function () {
        // currently disabled
    };
    AdminComponent.prototype.Sendnotification = function () {
        this.router.navigate(['/notification']);
    };
    AdminComponent.prototype.marriagecertificate = function () {
        this.router.navigate(['/marriagecertificate']);
    };
    AdminComponent.prototype.gallery = function () {
        // currently disabled
    };
    return AdminComponent;
}());
AdminComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'admin',
        templateUrl: './admin.component.html',
        styles: [
            "styles.css",
            "../node_modules/bootstrap/dist/css/bootstrap.min.css",
            "../node_modules/bootstrap/dist/css/bootstrap-theme.min.css",
            "../node_modules/datatables.net-bs/css/dataTables.bootstrap.css",
            "../node_modules/datatables.net-select-bs/css/select.bootstrap.css"
        ]
    }),
    __metadata("design:paramtypes", [router_1.Router, http_1.Http])
], AdminComponent);
exports.AdminComponent = AdminComponent;
//# sourceMappingURL=admin.component.js.map