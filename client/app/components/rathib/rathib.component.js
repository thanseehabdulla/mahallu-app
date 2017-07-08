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
var RathibComponent = (function () {
    function RathibComponent(router, http) {
        this.router = router;
        this.http = http;
    }
    // on initialization 
    RathibComponent.prototype.ngOnInit = function () {
    };
    // main menu
    // about function
    RathibComponent.prototype.aboutmahal = function () {
    };
    //instruction function 
    RathibComponent.prototype.instruction = function () {
    };
    // setting function
    RathibComponent.prototype.setting = function () {
    };
    // help
    RathibComponent.prototype.help = function () {
    };
    // report us
    RathibComponent.prototype.report = function () {
    };
    // Logout
    RathibComponent.prototype.Logout = function () {
    };
    // panel items
    RathibComponent.prototype.rathibsangyadetail = function () {
    };
    RathibComponent.prototype.addrathibsangya = function () {
    };
    RathibComponent.prototype.pendingrathibsangya = function () {
    };
    RathibComponent.prototype.rathibsangyabetweenmonth = function () {
    };
    RathibComponent.prototype.memberrathibsangya = function () {
    };
    RathibComponent.prototype.overallrathibsangya = function () {
    };
    return RathibComponent;
}());
RathibComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'rathib',
        templateUrl: './rathib.component.html',
    }),
    __metadata("design:paramtypes", [router_1.Router, http_1.Http])
], RathibComponent);
exports.RathibComponent = RathibComponent;
//# sourceMappingURL=rathib.component.js.map