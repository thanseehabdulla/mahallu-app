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
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const http_1 = require("@angular/http");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/map");
let CommiteComponent = class CommiteComponent {
    constructor(router, http) {
        this.router = router;
        this.http = http;
    }
    ngOnInit() {
        if (localStorage.getItem('User') == 'admin') {
            this.router.navigate(['/admin']);
        }
        else if (localStorage.getItem('User') == 'commite') {
            this.router.navigate(['/commite']);
        }
        else {
            this.router.navigate(['/login']);
        }
    }
    aboutmahal() {
    }
    instruction() {
    }
    setting() {
    }
    help() {
    }
    report() {
    }
    Logout() {
        localStorage.removeItem('User');
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        this.router.navigate(['/login']);
        console.log('logged out');
    }
    home() {
        this.router.navigate(['/customer']);
    }
    addmember() {
        this.router.navigate(['/client']);
    }
    inbox() {
    }
    varasangya() {
        this.router.navigate(['/varasangya']);
    }
    eidsangya() {
        this.router.navigate(['/perunaal']);
    }
    moludsangya() {
        this.router.navigate(['/molud']);
    }
    rathibsangya() {
        this.router.navigate(['/rathib']);
    }
    charitysangya() {
        this.router.navigate(['/charity']);
    }
    miscellanous() {
        this.router.navigate(['/miscellanous']);
    }
    madrass() {
    }
    onlinetranscation() {
    }
    Sendnotification() {
        this.router.navigate(['/notification']);
    }
    marriagecertificate() {
        this.router.navigate(['/marriagecertificate']);
    }
    gallery() {
    }
};
CommiteComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'commite',
        templateUrl: './commite.component.html',
    }),
    __metadata("design:paramtypes", [router_1.Router, http_1.Http])
], CommiteComponent);
exports.CommiteComponent = CommiteComponent;
