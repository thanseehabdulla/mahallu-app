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
var Observable_1 = require("rxjs/Observable");
var api_config_1 = require("./../../api_config/api_config");
require("jquery");
require("datatables.net");
var AdminComponent = (function () {
    function AdminComponent(router, http) {
        this.router = router;
        this.http = http;
        this.loaddata();
    }
    // on init
    AdminComponent.prototype.ngOnInit = function () {
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
    };
    AdminComponent.prototype.ngAfterViewInit = function () {
        this.initDatatable();
        this.options = [{
                name: 'Active'
            },
            {
                name: 'Inactive'
            }];
    };
    AdminComponent.prototype.initDatatable = function () {
        var exampleId = $('#example');
        this.tableWidget = exampleId.DataTable({
            destroy: true,
            select: true
        });
    };
    AdminComponent.prototype.reInitDatatable = function () {
        var _this = this;
        if (this.tableWidget) {
            this.tableWidget.destroy();
            this.tableWidget = null;
        }
        setTimeout(function () { return _this.initDatatable(); }, 0);
    };
    AdminComponent.prototype.selectRow = function (index, row) {
        this.selectedName = "row#" + index + " " + row.name;
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
        localStorage.removeItem('User');
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        this.router.navigate(['/login']);
        console.log('logged out');
    };
    // panel items
    // home
    AdminComponent.prototype.home = function () {
        this.homedata = 'Home';
        this.router.navigate(['/admin']);
        this.onNone();
        var maintable = document.getElementById('maintable');
        maintable.style.display = 'block';
        this.loaddata();
    };
    AdminComponent.prototype.reinitvalues = function () {
        this.mahalcode = null;
        this.mahalname = null;
        this.address = null;
        this.email = null;
        this.pincode = null;
        this.alternatenumber = null;
        this.phone = null;
        this.password = null;
        this.cpassword = null;
    };
    AdminComponent.prototype.onNone = function () {
        var maintable = document.getElementById('maintable');
        maintable.style.display = 'none';
        var addmahal = document.getElementById('addcustomer');
        addmahal.style.display = 'none';
        var changepassword = document.getElementById('changepassword');
        changepassword.style.display = 'none';
        var displass = document.getElementById('editcustomer');
        displass.style.display = 'none';
        this.reinitvalues();
    };
    AdminComponent.prototype.addmember = function () {
        this.homedata = "Home/Add Mahal";
        this.onNone();
        var addmahal = document.getElementById('addcustomer');
        addmahal.style.display = 'block';
    };
    AdminComponent.prototype.changepwd = function () {
        this.homedata = 'Home/Change password';
        this.onNone();
        var changepassword = document.getElementById('changepassword');
        changepassword.style.display = 'block';
    };
    AdminComponent.prototype.submitForm = function () {
        var _this = this;
        if (!(this.mahalcode == null) &&
            !(this.mahalname == null) &&
            !(this.password == null) &&
            !(this.email == null) &&
            !(this.alternatenumber == null) &&
            !(this.address == null) &&
            !(this.phone == null)) {
            if (this.password == this.cpassword) {
                // get access token
                var urlaccess = api_config_1.API.API_ADDMAHAL;
                var body2 = "mahalname=" + this.mahalname + "&mahalstatus" + this.mahalstatus + "&password=" + this.password + '&email=' + this.email + '&mahalcode=' + this.mahalcode + '&pincode=' + this.pincode + '&alternatenumber=' + this.alternatenumber + '&address=' + this.address + '&phone=' + this.phone;
                this.accesstoken = localStorage.getItem('access_token');
                var head2 = new http_1.Headers({
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Authorization': 'Bearer ' + this.accesstoken
                });
                this.http.post(urlaccess, body2, { headers: head2 })
                    .map(function (res) { return res.json(); })
                    .catch(function (e) {
                    if (e.status === 401) {
                        return Observable_1.Observable.throw('Unauthorized');
                    }
                    // do any other checking for statuses here
                })
                    .subscribe(function (data) {
                    _this.home();
                    _this.router.navigate(['/admin']);
                }, function (error) {
                    if (error == "Unauthorized") {
                        console.log(error);
                    }
                    console.log(error);
                });
            }
            else {
                //  console.log(error);
            }
        }
        else {
            //  console.log(error);
        }
    };
    // load mahal data
    AdminComponent.prototype.loaddata = function () {
        var _this = this;
        console.log('load mahal data');
        var url = api_config_1.API.API_GETMAHAL;
        this.accesstoken = localStorage.getItem('access_token');
        var head2 = new http_1.Headers({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Bearer ' + this.accesstoken
        });
        this.http.get(url, {
            headers: head2
        })
            .map(function (res) {
            return res.json();
        }).catch(function (e) {
            if (e.status === 401) {
                return Observable_1.Observable.throw('Unauthorized');
            }
            // do any other checking for statuses here
        }).subscribe(function (data) {
            console.log(JSON.stringify(data));
            _this.arraylist = Array();
            _this.arraylist = data;
            _this.reInitDatatable();
        }, function (error) {
            if (error == "Unauthorized") {
                alert(error);
                console.log(error);
            }
        });
    };
    // edit button press
    AdminComponent.prototype.edit = function (id) {
        console.log('reached edit');
        localStorage.setItem('tempid', id);
        this.onNone();
        var displass = document.getElementById('editcustomer');
        displass.style.display = 'block';
        this.loadsingledata(id);
    };
    // load single datta on edit button press
    AdminComponent.prototype.loadsingledata = function (id) {
        var _this = this;
        console.log('load single data');
        var url = api_config_1.API.API_GETMAHAL + id;
        this.accesstoken = localStorage.getItem('access_token');
        var head2 = new http_1.Headers({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Bearer ' + this.accesstoken
        });
        this.http.get(url, {
            headers: head2
        })
            .map(function (res) {
            return res.json();
        }).catch(function (e) {
            if (e.status === 401) {
                return Observable_1.Observable.throw('Unauthorized');
            }
            // do any other checking for statuses here
        }).subscribe(function (data) {
            console.log(JSON.stringify(data));
            _this.mahalcode = data.mahalcode;
            _this.mahalname = data.mahalname;
            _this.email = data.email;
            _this.alternatenumber = data.alternatenumber;
            _this.address = data.address;
            _this.phone = data.phone;
            _this.pincode = data.picode;
        }, function (error) {
            if (error == "Unauthorized") {
                console.log(error);
            }
        });
    };
    // selector value chAnges
    AdminComponent.prototype.onChange = function (newValue) {
        console.log(newValue + this.mahalstatus);
        this.mahalstatus = newValue;
    };
    //  update the mahal form
    AdminComponent.prototype.updateForm = function () {
        var _this = this;
        if (!(this.mahalcode == null) &&
            !(this.mahalname == null) &&
            !(this.password == null) &&
            !(this.email == null) &&
            !(this.alternatenumber == null) &&
            !(this.address == null) &&
            !(this.phone == null)) {
            if (this.password == this.cpassword) {
                // get access token
                var id = localStorage.getItem('tempid');
                var urlaccess = api_config_1.API.API_UPDATEMAHAL + id;
                var body2 = "mahalname=" + this.mahalname + "&mahalstatus" + this.mahalstatus + "&password=" + this.password + '&email=' + this.email + '&mahalcode=' + this.mahalcode + '&pincode=' + this.pincode + '&alternatenumber=' + this.alternatenumber + '&address=' + this.address + '&phone=' + this.phone;
                this.accesstoken = localStorage.getItem('access_token');
                var head2 = new http_1.Headers({
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Authorization': 'Bearer ' + this.accesstoken
                });
                this.http.put(urlaccess, body2, { headers: head2 })
                    .map(function (res) { return res.json(); }).catch(function (e) {
                    if (e.status === 401) {
                        return Observable_1.Observable.throw('Unauthorized');
                    }
                    // do any other checking for statuses here
                })
                    .subscribe(function (data) {
                    _this.home();
                    _this.router.navigate(['/admin']);
                }, function (error) {
                    if (error == "Unauthorized") {
                        console.log(error);
                        alert(error);
                    }
                    console.log(error + "suggested");
                    $("#notifyss").show();
                    setTimeout(function () { $("#notifyss").hide(); }, 5000);
                });
            }
            else {
                $("#notifyss").show();
                setTimeout(function () { $("#notifyss").hide(); }, 5000);
            }
        }
        else {
            $("#notifyss").show();
            setTimeout(function () { $("#notifyss").hide(); }, 5000);
        }
    };
    // remove mahal data based on id
    AdminComponent.prototype.remove = function (id) {
        var _this = this;
        console.log('deletedata');
        var url = api_config_1.API.API_REMOVEMAHAL + id;
        this.accesstoken = localStorage.getItem('access_token');
        var head2 = new http_1.Headers({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Bearer ' + this.accesstoken
        });
        this.http.delete(url, {
            headers: head2
        })
            .map(function (res) {
            return res.json();
        }).catch(function (e) {
            if (e.status === 401) {
                return Observable_1.Observable.throw('Unauthorized');
            }
            // do any other checking for statuses here
        }).subscribe(function (data) {
            console.log(JSON.stringify(data));
            _this.loaddata();
        }, function (error) {
            if (error == "Unauthorized") {
                alert(error);
                console.log(error);
            }
        });
    };
    // change the password
    AdminComponent.prototype.passwordForm = function () {
        var _this = this;
        var names = localStorage.getItem('User');
        if (this.cnewpassword == this.newpassword) {
            var urlaccess = api_config_1.API.API_UPDATEPASSWORD;
            var body2 = "name=" + names + "&password=" + this.newpassword + '&oldpassword=' + this.currentpassword;
            this.accesstoken = localStorage.getItem('access_token');
            var head2 = new http_1.Headers({
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Bearer ' + this.accesstoken
            });
            this.http.put(urlaccess, body2, { headers: head2 })
                .map(function (res) { return res.json(); }).catch(function (e) {
                if (e.status === 401) {
                    return Observable_1.Observable.throw('Unauthorized');
                }
                // do any other checking for statuses here
            })
                .subscribe(function (data) {
                console.log(data);
                _this.home();
                _this.router.navigate(['/admin']);
            }, function (error) {
                if (error == "Unauthorized") {
                    console.log(error);
                    alert(error);
                }
                console.log(error);
            });
        }
        else {
        }
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