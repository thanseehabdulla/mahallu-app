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
const Observable_1 = require("rxjs/Observable");
const api_config_1 = require("./../../api_config/api_config");
let ClientComponent = class ClientComponent {
    constructor(router, http) {
        this.router = router;
        this.http = http;
    }
    ngOnInit() {
        this.memberlist = 'Home / Memberlist';
    }
    ngAfterViewInit() {
        this.initDatatable();
        this.options = [{
                name: 'Active'
            },
            {
                name: 'Inactive'
            }];
    }
    initDatatable() {
        let exampleId = $('#example');
        this.tableWidget = exampleId.DataTable({
            destroy: true,
            select: true
        });
    }
    reInitDatatable() {
        if (this.tableWidget) {
            this.tableWidget.destroy();
            this.tableWidget = null;
        }
        setTimeout(() => this.initDatatable(), 0);
    }
    selectRow(index, row) {
        this.selectedName = "row#" + index + " " + row.name;
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
    date() {
        var today = new Date();
        this.dd = today.getDate();
        this.mm = today.getMonth() + 1;
        this.yyyy = today.getFullYear();
        this.model = { date: { year: this.yyyy, month: this.mm, day: this.dd } };
    }
    reinitvalues() {
        this.regno = null;
        this.name = null;
        this.address = null;
        this.email = null;
        this.varasangya = null;
        this.landlinenumber = null;
        this.mobile = null;
        this.password = null;
        this.cpassword = null;
        this.houseno = null;
    }
    back() {
        this.router.navigate(['/commite']);
    }
    onChange(newValue) {
        console.log(newValue + this.memberstatus);
        this.memberstatus = newValue;
    }
    onChange2(newValue) {
        console.log(newValue + this.appstatus);
        this.appstatus = newValue;
    }
    loaddata() {
        console.log('load member data');
        let url = api_config_1.API.API_GETMEMBERS;
        this.accesstoken = localStorage.getItem('access_token');
        let head2 = new http_1.Headers({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Bearer ' + this.accesstoken
        });
        this.http.get(url, {
            headers: head2
        })
            .map(res => {
            return res.json();
        }).catch(e => {
            if (e.status === 401) {
                return Observable_1.Observable.throw('Unauthorized');
            }
        }).subscribe(data => {
            console.log(JSON.stringify(data));
            this.arraylist = Array();
            this.arraylist = data;
            this.reInitDatatable();
        }, error => {
            if (error == "Unauthorized") {
                alert(error);
                console.log(error);
            }
        });
    }
    edit(id) {
        console.log('reached edit');
        localStorage.setItem('tempid', id);
        this.onNone();
        var displass = document.getElementById('editcustomer');
        displass.style.display = 'block';
        this.loadsingledata(id);
    }
    loadsingledata(id) {
        console.log('load single member data');
        let url = api_config_1.API.API_GETMEMBERS + id;
        this.accesstoken = localStorage.getItem('access_token');
        let head2 = new http_1.Headers({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Bearer ' + this.accesstoken
        });
        this.http.get(url, {
            headers: head2
        })
            .map(res => {
            return res.json();
        }).catch(e => {
            if (e.status === 401) {
                return Observable_1.Observable.throw('Unauthorized');
            }
        }).subscribe(data => {
            console.log(JSON.stringify(data));
            this.regno = data.regno;
            this.name = data.name;
            this.email = data.email;
            this.landlinenumber = data.landlinenumber;
            this.address = data.address;
            this.mobile = data.mobile;
            this.varasangya = data.varasangya;
            this.housename = data.housename;
            this.houseno = data.houseno;
            this.fathername = data.fathername;
            this.appstatus = data.appstatus;
            this.memberstatus = data.memberstatus;
            this.lastmosquename = data.lastmosquename;
            this.currentmosquename = data.currentmosquename;
        }, error => {
            if (error == "Unauthorized") {
                console.log(error);
            }
        });
    }
    submitform() {
        if (!(this.regno == null) &&
            !(this.name == null) &&
            !(this.password == null) &&
            !(this.email == null) &&
            !(this.landlinenumber == null) &&
            !(this.address == null) &&
            !(this.mobile == null)) {
            if (this.password == this.cpassword) {
                let urlaccess = api_config_1.API.API_ADDMEMBER;
                let body2 = "name=" + this.name + "&memberstatus" + this.memberstatus + "&password=" + this.password + '&email=' + this.email + '&regno=' + this.regno + '&fathername=' + this.fathername + '&landlinenumber=' + this.landlinenumber + '&address=' + this.address + '&mobile=' + this.mobile + '&housename=' + this.housename + '&lastmosquename=' + this.lastmosquename + '&currentmosquename=' + this.currentmosquename + '&created_at=' + this.model + '&updated_at=' + this.model + '&varasangya=' + this.varasangya + '&appstatus=' + this.appstatus + '&houseno=' + this.houseno;
                this.accesstoken = localStorage.getItem('access_token');
                let head2 = new http_1.Headers({
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Authorization': 'Bearer ' + this.accesstoken
                });
                this.http.post(urlaccess, body2, { headers: head2 })
                    .map(res => res.json())
                    .catch(e => {
                    if (e.status === 401) {
                        return Observable_1.Observable.throw('Unauthorized');
                    }
                })
                    .subscribe(data => {
                    this.home();
                    this.router.navigate(['/client']);
                }, error => {
                    if (error == "Unauthorized") {
                        console.log(error);
                    }
                    console.log(error);
                });
            }
            else {
            }
        }
        else {
        }
    }
    onNone() {
        var memberlist = document.getElementById('showmemberlist');
        memberlist.style.display = 'none';
        var addmembers = document.getElementById('addcustomer');
        addmembers.style.display = 'none';
        var editmembers = document.getElementById('editcustomer');
        editmembers.style.display = 'none';
    }
    home() {
        this.onNone();
        var memberlist = document.getElementById('showmemberlist');
        memberlist.style.display = 'block';
        this.memberlist = 'Home / Memberlist';
    }
    addmembers() {
        this.onNone();
        var addmembers = document.getElementById('addcustomer');
        addmembers.style.display = 'block';
        this.memberlist = 'Home / Add Members';
    }
};
ClientComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'client',
        templateUrl: './client.component.html',
    }),
    __metadata("design:paramtypes", [router_1.Router, http_1.Http])
], ClientComponent);
exports.ClientComponent = ClientComponent;
