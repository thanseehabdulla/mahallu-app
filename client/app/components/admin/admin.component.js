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
require("jquery");
require("datatables.net");
let AdminComponent = class AdminComponent {
    constructor(router, http) {
        this.router = router;
        this.http = http;
        this.loaddata();
    }
    ngOnInit() {
        this.homedata = "Home";
        if (localStorage.getItem('User') == 'admin') {
            this.router.navigate(['/admin']);
        }
        else if (localStorage.getItem('User') == 'commite') {
            this.router.navigate(['/commite']);
        }
        else {
            this.router.navigate(['/login']);
        }
        this.loaddata();
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
    home() {
        this.homedata = 'Home';
        this.router.navigate(['/admin']);
        this.onNone();
        var maintable = document.getElementById('maintable');
        maintable.style.display = 'block';
        this.loaddata();
    }
    reinitvalues() {
        this.mahalcode = null;
        this.mahalname = null;
        this.address = null;
        this.email = null;
        this.pincode = null;
        this.alternatenumber = null;
        this.phone = null;
        this.password = null;
        this.cpassword = null;
    }
    onNone() {
        var maintable = document.getElementById('maintable');
        maintable.style.display = 'none';
        var addmahal = document.getElementById('addcustomer');
        addmahal.style.display = 'none';
        var changepassword = document.getElementById('changepassword');
        changepassword.style.display = 'none';
        var displass = document.getElementById('editcustomer');
        displass.style.display = 'none';
        this.reinitvalues();
    }
    addmember() {
        this.homedata = "Home / Add Mahal";
        this.onNone();
        var addmahal = document.getElementById('addcustomer');
        addmahal.style.display = 'block';
    }
    changepwd() {
        this.homedata = 'Home / Change password';
        this.onNone();
        var changepassword = document.getElementById('changepassword');
        changepassword.style.display = 'block';
    }
    submitForm() {
        if (!(this.mahalcode == null) &&
            !(this.mahalname == null) &&
            !(this.password == null) &&
            !(this.email == null) &&
            !(this.alternatenumber == null) &&
            !(this.address == null) &&
            !(this.phone == null)) {
            if (this.password == this.cpassword) {
                let urlaccess = api_config_1.API.API_ADDMAHAL;
                let body2 = "mahalname=" + this.mahalname + "&mahalstatus=" + this.mahalstatus + "&password=" + this.password + '&email=' + this.email + '&mahalcode=' + this.mahalcode + '&pincode=' + this.pincode + '&alternatenumber=' + this.alternatenumber + '&address=' + this.address + '&phone=' + this.phone;
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
                    this.router.navigate(['/admin']);
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
    loaddata() {
        console.log('load mahal data');
        let url = api_config_1.API.API_GETMAHAL;
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
        this.homedata = "Home / Edit Mahal";
        var displass = document.getElementById('editcustomer');
        displass.style.display = 'block';
        this.loadsingledata(id);
    }
    loadsingledata(id) {
        console.log('load single data');
        let url = api_config_1.API.API_GETMAHAL + id;
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
            this.mahalcode = data.mahalcode;
            this.mahalname = data.mahalname;
            this.email = data.email;
            this.alternatenumber = data.alternatenumber;
            this.address = data.address;
            this.phone = data.phone;
            this.pincode = data.picode;
        }, error => {
            if (error == "Unauthorized") {
                console.log(error);
            }
        });
    }
    onChange(newValue) {
        console.log(newValue + this.mahalstatus);
        this.mahalstatus = newValue;
    }
    updateForm() {
        if (!(this.mahalcode == null) &&
            !(this.mahalname == null) &&
            !(this.password == null) &&
            !(this.email == null) &&
            !(this.alternatenumber == null) &&
            !(this.address == null) &&
            !(this.phone == null)) {
            if (this.password == this.cpassword) {
                var id = localStorage.getItem('tempid');
                let urlaccess = api_config_1.API.API_UPDATEMAHAL + id;
                let body2 = "mahalname=" + this.mahalname + "&mahalstatus=" + this.mahalstatus + "&password=" + this.password + '&email=' + this.email + '&mahalcode=' + this.mahalcode + '&pincode=' + this.pincode + '&alternatenumber=' + this.alternatenumber + '&address=' + this.address + '&phone=' + this.phone;
                this.accesstoken = localStorage.getItem('access_token');
                let head2 = new http_1.Headers({
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Authorization': 'Bearer ' + this.accesstoken
                });
                this.http.put(urlaccess, body2, { headers: head2 })
                    .map(res => res.json()).catch(e => {
                    if (e.status === 401) {
                        return Observable_1.Observable.throw('Unauthorized');
                    }
                })
                    .subscribe(data => {
                    this.home();
                    this.router.navigate(['/admin']);
                }, error => {
                    if (error == "Unauthorized") {
                        console.log(error);
                        alert(error);
                    }
                    console.log(error + "suggested");
                    $("#notifyss").show();
                    setTimeout(function () {
                        $("#notifyss").hide();
                    }, 5000);
                });
            }
            else {
                $("#notifyss").show();
                setTimeout(function () {
                    $("#notifyss").hide();
                }, 5000);
            }
        }
        else {
            $("#notifyss").show();
            setTimeout(function () {
                $("#notifyss").hide();
            }, 5000);
        }
    }
    remove(id) {
        console.log('deletedata');
        let url = api_config_1.API.API_REMOVEMAHAL + id;
        this.accesstoken = localStorage.getItem('access_token');
        let head2 = new http_1.Headers({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Bearer ' + this.accesstoken
        });
        this.http.delete(url, {
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
            this.loaddata();
        }, error => {
            if (error == "Unauthorized") {
                alert(error);
                console.log(error);
            }
        });
    }
    passwordForm() {
        var names = localStorage.getItem('User');
        if (this.cnewpassword == this.newpassword) {
            let urlaccess = api_config_1.API.API_UPDATEPASSWORD;
            let body2 = "name=" + names + "&password=" + this.newpassword + '&oldpassword=' + this.currentpassword;
            this.accesstoken = localStorage.getItem('access_token');
            let head2 = new http_1.Headers({
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Bearer ' + this.accesstoken
            });
            this.http.put(urlaccess, body2, { headers: head2 })
                .map(res => res.json()).catch(e => {
                if (e.status === 401) {
                    return Observable_1.Observable.throw('Unauthorized');
                }
            })
                .subscribe(data => {
                console.log(data);
                this.home();
                this.router.navigate(['/admin']);
            }, error => {
                if (error == "Unauthorized") {
                    console.log(error);
                    alert(error);
                }
                console.log(error);
            });
        }
        else {
        }
    }
};
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
