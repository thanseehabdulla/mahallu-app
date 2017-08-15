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
const api_config_1 = require("./../../api_config/api_config");
let TasksComponent = class TasksComponent {
    constructor(router, http) {
        this.router = router;
        this.http = http;
    }
    ngOnInit() {
        if (localStorage.getItem('User') == 'admin') {
            this.router.navigate(['/admin']);
        }
        else if (localStorage.getItem('User') == 'commite') {
            this.router.navigate(['/dashboard']);
        }
        else {
            this.router.navigate(['/login']);
        }
    }
    Login() {
        console.log('reached login');
        if (this.email == 'admin') {
            let url = api_config_1.API.API_REGISTER;
            let body = "username=" + this.email + "&password=" + this.password;
            let head = new http_1.Headers({
                'Content-Type': 'application/x-www-form-urlencoded'
            });
            this.http.post(url, body, { headers: head })
                .map(res => res.json())
                .subscribe(data => {
            }, error => {
                console.log(error);
            });
            console.log('get access_token');
            let urlaccess = api_config_1.API.API_AccessToken;
            let body2 = "username=" + this.email + "&password=" + this.password + '&grant_type=password';
            localStorage.setItem('username', this.email);
            var authdata = btoa('test' + ':' + 'secret');
            let head2 = new http_1.Headers({
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Basic ' + authdata
            });
            this.http.post(urlaccess, body2, { headers: head2 })
                .map(res => res.json())
                .subscribe(data => {
                this.access_token = data.access_token;
                this.refresh_token = data.refresh_token;
                console.log('access_token' + this.access_token + '\n refresh_token' + this.refresh_token);
                localStorage.setItem('access_token', this.access_token);
                localStorage.setItem('refresh_token', this.refresh_token);
                localStorage.setItem('User', "admin");
                localStorage.setItem('code', this.email);
                localStorage.setItem('objectid', data.userObjectId);
                this.router.navigate(['/admin']);
            }, error => {
                console.log(error);
            });
        }
        else {
            let urlaccess = api_config_1.API.API_AccessToken;
            let body2 = "username=" + this.email + "&password=" + this.password + '&grant_type=password';
            localStorage.setItem('username', this.email);
            var authdata = btoa('clientBasic' + ':' + 'clientPassword');
            let head2 = new http_1.Headers({
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Basic ' + authdata
            });
            this.http.post(urlaccess, body2, { headers: head2 })
                .map(res => res.json())
                .subscribe(data => {
                this.access_token = data.access_token;
                this.refresh_token = data.refresh_token;
                console.log('access_token' + this.access_token + '\n refresh_token' + this.refresh_token);
                localStorage.setItem('access_token', this.access_token);
                localStorage.setItem('refresh_token', this.refresh_token);
                localStorage.setItem('User', "commite");
                localStorage.setItem('code', this.email);
                this.router.navigate(['/dashboard']);
            }, error => {
                console.log(error + "customer error");
            });
        }
    }
};
TasksComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'login',
        templateUrl: './login.component.html',
    }),
    __metadata("design:paramtypes", [router_1.Router, http_1.Http])
], TasksComponent);
exports.TasksComponent = TasksComponent;
