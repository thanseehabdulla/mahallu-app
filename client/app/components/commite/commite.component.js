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
var CommiteComponent = (function () {
    function CommiteComponent(router, http) {
        this.router = router;
        this.http = http;
    }
    // on initialization 
    CommiteComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('User') == 'admin') {
            this.router.navigate(['/admin']);
        }
        else if (localStorage.getItem('User') == 'commite') {
            this.router.navigate(['/commite']);
        }
        else {
            this.router.navigate(['/login']);
        }
    };
    // main menu
    // about function
    CommiteComponent.prototype.aboutmahal = function () {
    };
    //instruction function 
    CommiteComponent.prototype.instruction = function () {
    };
    // setting function
    CommiteComponent.prototype.setting = function () {
    };
    // help
    CommiteComponent.prototype.help = function () {
    };
    // report us
    CommiteComponent.prototype.report = function () {
    };
    // Logout
    CommiteComponent.prototype.Logout = function () {
        localStorage.removeItem('User');
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        this.router.navigate(['/login']);
        console.log('logged out');
    };
    // panel items
    // home
    CommiteComponent.prototype.home = function () {
        this.router.navigate(['/customer']);
    };
    CommiteComponent.prototype.addmember = function () {
        this.router.navigate(['/client']);
    };
    CommiteComponent.prototype.inbox = function () {
        // class disabled
    };
    CommiteComponent.prototype.varasangya = function () {
        this.router.navigate(['/varasangya']);
    };
    CommiteComponent.prototype.eidsangya = function () {
        this.router.navigate(['/perunaal']);
    };
    CommiteComponent.prototype.moludsangya = function () {
        this.router.navigate(['/molud']);
    };
    CommiteComponent.prototype.rathibsangya = function () {
        this.router.navigate(['/rathib']);
    };
    CommiteComponent.prototype.charitysangya = function () {
        this.router.navigate(['/charity']);
    };
    CommiteComponent.prototype.miscellanous = function () {
        this.router.navigate(['/miscellanous']);
    };
    CommiteComponent.prototype.madrass = function () {
        // currently disabled
    };
    CommiteComponent.prototype.onlinetranscation = function () {
        // currently disabled
    };
    CommiteComponent.prototype.Sendnotification = function () {
        this.router.navigate(['/notification']);
    };
    CommiteComponent.prototype.marriagecertificate = function () {
        this.router.navigate(['/marriagecertificate']);
    };
    CommiteComponent.prototype.gallery = function () {
        // currently disabled
    };
    return CommiteComponent;
}());
CommiteComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'comimite',
        templateUrl: './commite.component.html',
    }),
    __metadata("design:paramtypes", [router_1.Router, http_1.Http])
], CommiteComponent);
exports.CommiteComponent = CommiteComponent;
//# sourceMappingURL=commite.component.js.map