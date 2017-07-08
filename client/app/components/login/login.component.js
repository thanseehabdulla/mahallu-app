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
var api_config_1 = require("./../../api_config/api_config");
var TasksComponent = (function () {
    function TasksComponent(router, http) {
        this.router = router;
        this.http = http;
    }
    // on initialization 
    TasksComponent.prototype.ngOnInit = function () {
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
    // on login button press
    TasksComponent.prototype.Login = function () {
        var _this = this;
        console.log('reached login');
        // if admin
        if (this.email == 'admin') {
            // pre registration if not added
            var url = api_config_1.API.API_REGISTER;
            var body = "username=" + this.email + "&password=" + this.password;
            var head = new http_1.Headers({
                'Content-Type': 'application/x-www-form-urlencoded'
            });
            this.http.post(url, body, { headers: head })
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
            }, function (error) {
                console.log(error);
            });
            console.log('get access_token');
            // get access token
            var urlaccess = api_config_1.API.API_AccessToken;
            var body2 = "username=" + this.email + "&password=" + this.password + '&grant_type=password';
            localStorage.setItem('username', this.email);
            var authdata = btoa('test' + ':' + 'secret');
            var head2 = new http_1.Headers({
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Basic ' + authdata
            });
            this.http.post(urlaccess, body2, { headers: head2 })
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.access_token = data.access_token;
                _this.refresh_token = data.refresh_token;
                console.log('access_token' + _this.access_token + '\n refresh_token' + _this.refresh_token);
                localStorage.setItem('access_token', _this.access_token);
                localStorage.setItem('refresh_token', _this.refresh_token);
                localStorage.setItem('User', "admin");
                localStorage.setItem('code', _this.email);
                localStorage.setItem('objectid', data.userObjectId);
                _this.router.navigate(['/admin']);
            }, function (error) {
                console.log(error);
            });
        }
        else {
            var urlaccess = api_config_1.API.API_AccessToken;
            var body2 = "username=" + this.email + "&password=" + this.password + '&grant_type=password';
            localStorage.setItem('username', this.email);
            var authdata = btoa('clientBasic' + ':' + 'clientPassword');
            var head2 = new http_1.Headers({
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Basic ' + authdata
            });
            this.http.post(urlaccess, body2, { headers: head2 })
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.access_token = data.access_token;
                _this.refresh_token = data.refresh_token;
                console.log('access_token' + _this.access_token + '\n refresh_token' + _this.refresh_token);
                // localStorage.setItem('objectId',data.userObjectId)
                localStorage.setItem('access_token', _this.access_token);
                localStorage.setItem('refresh_token', _this.refresh_token);
                localStorage.setItem('User', "commite");
                localStorage.setItem('code', _this.email);
                _this.router.navigate(['/commite']);
            }, function (error) {
                console.log(error + "customer error");
            });
        }
    };
    return TasksComponent;
}());
TasksComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'login',
        templateUrl: './login.component.html',
    }),
    __metadata("design:paramtypes", [router_1.Router, http_1.Http])
], TasksComponent);
exports.TasksComponent = TasksComponent;
//# sourceMappingURL=login.component.js.map