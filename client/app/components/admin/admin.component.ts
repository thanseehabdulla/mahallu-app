import {Component, OnInit} from "@angular/core";

import {Router} from "@angular/router";
import {Headers, Http} from "@angular/http";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/map";
import {Observable} from "rxjs/Observable";
import {API} from "./../../api_config/api_config";

import "jquery";

import "datatables.net";


@Component({
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
})

export class AdminComponent implements OnInit {


    public homedata: any;
    public mahalcode: any;
    public mahalname: any;
    public pincode: any;
    public email: any;
    public phone: any;
    public alternatenumber: any;
    public password: any;
    public cpassword: any;
    public address: any;
    public accesstoken: any
    public arraylist: any;
    public tableWidget: any
    public selectedName: any
    public mahalstatus: any;
    public options: any;
    public newpassword: any
    public cnewpassword: any
    public currentpassword: any


// on init
    ngOnInit() {
        this.homedata = "Home"
        if (localStorage.getItem('User') == 'admin') {

            this.router.navigate(['/admin']);

        }
        else if (localStorage.getItem('User') == 'commite') {
            this.router.navigate(['/commite']);
        } else {
            this.router.navigate(['/login']);
        }

        this.loaddata()
    }

    ngAfterViewInit() {
        this.initDatatable()

        this.options = [{
            name: 'Active'
        },
            {
                name: 'Inactive'
            }]

    }

    private initDatatable(): void {

        let exampleId: any = $('#example');
        this.tableWidget = exampleId.DataTable({
            destroy: true,
            select: true
        });


    }


    private reInitDatatable(): void {
        if (this.tableWidget) {
            this.tableWidget.destroy()
            this.tableWidget = null
        }
        setTimeout(() => this.initDatatable(), 0)
    }

    public selectRow(index: number, row: any) {
        this.selectedName = "row#" + index + " " + row.name
    }


    constructor(private router: Router, public http: Http) {

        this.loaddata();

    }


// main menu
    // about function
    aboutmahal() {

    }

    //instruction function
    instruction() {

    }

    // setting function
    setting() {

    }

// help
    help() {

    }

// report us
    report() {

    }

// Logout
    Logout() {
        localStorage.removeItem('User');
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');

        this.router.navigate(['/login']);

        console.log('logged out');
    }


// panel items

// home

    home() {
        this.homedata = 'Home'
        this.router.navigate(['/admin']);
        this.onNone()
        var maintable = document.getElementById('maintable')
        maintable.style.display = 'block'
        this.loaddata();
    }


    reinitvalues() {
        this.mahalcode = null;
        this.mahalname = null
        this.address = null
        this.email = null
        this.pincode = null
        this.alternatenumber = null
        this.phone = null
        this.password = null
        this.cpassword = null
    }


    onNone() {
        var maintable = document.getElementById('maintable')
        maintable.style.display = 'none'
        var addmahal = document.getElementById('addcustomer')
        addmahal.style.display = 'none'
        var changepassword = document.getElementById('changepassword')
        changepassword.style.display = 'none'
        var displass = document.getElementById('editcustomer')
        displass.style.display = 'none';
        this.reinitvalues()
    }

    addmember() {
        this.homedata = "Home / Add Mahal"
        this.onNone()
        var addmahal = document.getElementById('addcustomer')
        addmahal.style.display = 'block'
    }

    changepwd() {
        this.homedata = 'Home / Change password'
        this.onNone()
        var changepassword = document.getElementById('changepassword')
        changepassword.style.display = 'block'
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

                // get access token
                let urlaccess = API.API_ADDMAHAL;
                let body2 = "mahalname=" + this.mahalname + "&mahalstatus=" + this.mahalstatus + "&password=" + this.password + '&email=' + this.email + '&mahalcode=' + this.mahalcode + '&pincode=' + this.pincode + '&alternatenumber=' + this.alternatenumber + '&address=' + this.address + '&phone=' + this.phone;
                this.accesstoken = localStorage.getItem('access_token')
                let head2 = new Headers({
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Authorization': 'Bearer ' + this.accesstoken
                });

                this.http.post(urlaccess, body2, {headers: head2})
                    .map(res => res.json())
                    .catch(e => {
                        if (e.status === 401) {
                            return Observable.throw('Unauthorized');
                        }
                        // do any other checking for statuses here
                    })
                    .subscribe(data => {
                            this.home();
                            this.router.navigate(['/admin']);
                        },
                        error => {
                            if (error == "Unauthorized") {
                                console.log(error);


                            }
                            console.log(error);

                        });

            } else {
//  console.log(error);
            }
        } else {
//  console.log(error);
        }
    }

// load mahal data
    loaddata() {
        console.log('load mahal data');
        let url = API.API_GETMAHAL;
        this.accesstoken = localStorage.getItem('access_token')
        let head2 = new Headers({
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
                return Observable.throw('Unauthorized');
            }
            // do any other checking for statuses here
        }).subscribe(data => {
            console.log(JSON.stringify(data));
            this.arraylist = Array();
            this.arraylist = data;
            this.reInitDatatable()
        }, error => {
            if (error == "Unauthorized") {
                alert(error);
                console.log(error);
            }
        });

    }


// edit button press
    edit(id) {
        console.log('reached edit');
        localStorage.setItem('tempid', id);
        this.onNone()
        this.homedata = "Home / Edit Mahal"
        var displass = document.getElementById('editcustomer')
        displass.style.display = 'block';

        this.loadsingledata(id);
    }


// load single datta on edit button press
    loadsingledata(id) {
        console.log('load single data');
        let url = API.API_GETMAHAL + id;
        this.accesstoken = localStorage.getItem('access_token')
        let head2 = new Headers({
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
                return Observable.throw('Unauthorized');
            }
            // do any other checking for statuses here
        }).subscribe(data => {
            console.log(JSON.stringify(data));
            this.mahalcode = data.mahalcode;
            this.mahalname = data.mahalname;
            this.email = data.email;
            this.alternatenumber = data.alternatenumber;
            this.address = data.address
            this.phone = data.phone
            this.pincode = data.picode
        }, error => {
            if (error == "Unauthorized") {
                console.log(error);
            }
        });
    }


// selector value chAnges
    onChange(newValue) {
        console.log(newValue + this.mahalstatus);
        this.mahalstatus = newValue;

    }


    //  update the mahal form
    updateForm() {
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
                let urlaccess = API.API_UPDATEMAHAL + id;
                let body2 = "mahalname=" + this.mahalname + "&mahalstatus=" + this.mahalstatus + "&password=" + this.password + '&email=' + this.email + '&mahalcode=' + this.mahalcode + '&pincode=' + this.pincode + '&alternatenumber=' + this.alternatenumber + '&address=' + this.address + '&phone=' + this.phone;
                this.accesstoken = localStorage.getItem('access_token')
                let head2 = new Headers({
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Authorization': 'Bearer ' + this.accesstoken
                });

                this.http.put(urlaccess, body2, {headers: head2})
                    .map(res => res.json()).catch(e => {
                    if (e.status === 401) {
                        return Observable.throw('Unauthorized');
                    }
                    // do any other checking for statuses here
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

            } else {
                $("#notifyss").show();
                setTimeout(function () {
                    $("#notifyss").hide();
                }, 5000);
            }
        } else {
            $("#notifyss").show();
            setTimeout(function () {
                $("#notifyss").hide();
            }, 5000);
        }
    }


// remove mahal data based on id
    remove(id) {

        console.log('deletedata');

        let url = API.API_REMOVEMAHAL + id;
        this.accesstoken = localStorage.getItem('access_token')
        let head2 = new Headers({
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
                return Observable.throw('Unauthorized');
            }
            // do any other checking for statuses here
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


// change the password
    passwordForm() {

        var names = localStorage.getItem('User')
        if (this.cnewpassword == this.newpassword) {

            let urlaccess = API.API_UPDATEPASSWORD
            let body2 = "name=" + names + "&password=" + this.newpassword + '&oldpassword=' + this.currentpassword;
            this.accesstoken = localStorage.getItem('access_token')
            let head2 = new Headers({
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Bearer ' + this.accesstoken
            });

            this.http.put(urlaccess, body2, {headers: head2})
                .map(res => res.json()).catch(e => {
                if (e.status === 401) {
                    return Observable.throw('Unauthorized');
                }
                // do any other checking for statuses here
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
        } else {

        }
    }
}



