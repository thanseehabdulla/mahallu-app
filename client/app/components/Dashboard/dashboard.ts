import {Component, OnInit} from "@angular/core";

import {Router} from "@angular/router";
import {Headers, Http} from "@angular/http";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/map";
import {Observable} from "rxjs/Observable";
import {API} from "../../api_config/api_config";
import "jquery";

import "datatables.net";


@Component({
    moduleId: module.id,
    selector: 'dashboard',
    templateUrl: './dashboard.html',
})

export class dashboard implements OnInit {
    varasangya: string;
    cpassword: any;
    housename: string;
    lastmosquename: string;
    currentmosquename: string;
    dd: number;
    mm: number;
    yyyy: number;
    model: { date: { year: any; month: any; day: any; }; };
    appstatus: any;
    memberstatus: any;
    houseno: any;
    mobile: any;
    address: any;
    landlinenumber: any;
    email: any;
    password: any;
    name: any;
    regno: any;
    private fathername: any;
    private options: [{ name: string }, { name: string }];

    reinitvalues(): any {
        // throw new Error("Method not implemented.");

    }

    arraylist: any[];
    accesstoken: string;
    public loggedname: any;
    public homedata: any;
    private tableWidget2: any;
    private tableWidget: any;

    constructor(private router: Router, public http: Http) {

    }


    // on initialization
    ngOnInit() {
        if (localStorage.getItem('User') == 'admin') {

            this.router.navigate(['/admin']);
        }
        else if (localStorage.getItem('User') == 'commite') {
            this.router.navigate(['/dashboard']);
            this.loggedname = localStorage.getItem('code')
            this.onNone()
            var memeberlist = document.getElementById("dashboard");
            memeberlist.style.display = 'block'
            this.options = [{
                name: 'Active'
            }, {
                name: 'Inactive'
            }]

        } else {
            this.router.navigate(['/login']);
        }

    }


    ngAfterViewInit() {

        this.initDatatable()

    }

    date() {
        var today = new Date();
        this.dd = today.getDate();
        this.mm = today.getMonth() + 1; //January is 0!
        this.yyyy = today.getFullYear();
        this.model = {date: {year: this.yyyy, month: this.mm, day: this.dd}};
    }

    onChange(newValue) {
        console.log(newValue + this.memberstatus);
        this.memberstatus = newValue;
    }

// selector value chAnges
    onChange2(newValue) {
        console.log(newValue + this.appstatus);
        this.appstatus = newValue;
    }

    pushmembers() {
        this.onNone()
        var addmembers = document.getElementById('addcustomer')
        addmembers.style.display = 'block'
        this.homedata = 'Home / Add Members'
        this.reinitvalues()
    }

    submitForm() {
        if (!(this.regno == null) &&
            !(this.name == null) &&
            !(this.password == null) &&
            !(this.email == null) &&
            !(this.landlinenumber == null) &&
            !(this.address == null) &&
            !(this.mobile == null)) {
            if (this.password == this.cpassword) {

                // get access token
                let urlaccess = API.API_ADDMEMBER;
                let body2 = "name=" + this.name + "&password=" + this.password + '&email=' + this.email + '&regno=' + this.regno + '&fathername=' + this.fathername + '&landlinenumber=' + this.landlinenumber + '&address=' + this.address + '&mobile=' + this.mobile + '&housename=' + this.housename + '&lastmosquename=' + this.lastmosquename + '&currentmosquename=' + this.currentmosquename + '&created_at=' + this.model + '&updated_at=' + this.model + '&varasangya=' + this.varasangya + '&houseno=' + this.houseno;
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
                            this.addmember();
                            this.router.navigate(['/dashboard']);
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


    // edit button press
    edit(id) {
        console.log('reached edit');
        localStorage.setItem('tempid', id);
        this.onNone()
        var displass = document.getElementById('editcustomer')
        displass.style.display = 'block';
        this.homedata = 'Home / Edit Members'
        this.loadsingledata(id);
    }

// load single datta on edit button press
    loadsingledata(id) {
        console.log('load single member data');
        let url = API.API_GETMEMBERS + id;
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

            this.regno = data.regno;
            this.name = data.name;
            this.email = data.email;
            this.landlinenumber = data.landlinenumber;
            this.address = data.address
            this.mobile = data.mobile
            this.varasangya = data.varasangya
            this.housename = data.housename
            this.houseno = data.houseno
            this.fathername = data.fathername
            this.appstatus = data.appstatus
            this.memberstatus = data.memberstatus
            this.lastmosquename = data.lastmosquename
            this.currentmosquename = data.currentmosquename

        }, error => {
            if (error == "Unauthorized") {
                console.log(error);
            }
        });
    }

    private initDatatable(): void {

        let exampleId: any = $('#member');
        this.tableWidget = exampleId.DataTable({
            destroy: true,
            select: true
        });

        let exampleId1: any = $('#payment');
        this.tableWidget2 = exampleId1.DataTable({
            destroy: true,
            select: true
        });
    }


    private reInitDatatable(): void {
        if (this.tableWidget) {
            this.tableWidget.destroy()
            this.tableWidget = null
        }
        if (this.tableWidget2) {
            this.tableWidget2.destroy()
            this.tableWidget2 = null
        }

        setTimeout(() => this.initDatatable(), 0)
    }


    onNone() {
        var memeberlist = document.getElementById("dashboard");
        memeberlist.style.display = 'none'
        var memeberlist = document.getElementById("showmemberlist");
        memeberlist.style.display = 'none'
        var paymentlist = document.getElementById("showpaymentlist");
        paymentlist.style.display = 'none'
        var addmembers = document.getElementById('addcustomer')
        addmembers.style.display = 'none'
        var displass = document.getElementById('editcustomer')
        displass.style.display = 'none';
    }

    delete(id) {
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

            this.loadmemberdata();
        }, error => {
            if (error == "Unauthorized") {
                alert(error);
                console.log(error);
            }
        });
    }

    // load mahal data
    loadmemberdata() {
        console.log("loading data");
        let url = API.API_GETMEMBERS;
        this.accesstoken = localStorage.getItem('access_token')
        let head2 = new Headers({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Bearer ' + this.accesstoken
        });

        this.http.get(url, {headers: head2})
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


    Logout() {
        localStorage.removeItem('User');
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');

        this.router.navigate(['/login']);

        console.log('logged out');
    }

    updateForm() {
        if (!(this.regno == null) &&
            !(this.name == null) &&
            !(this.password == null) &&
            !(this.email == null) &&
            !(this.landlinenumber == null) &&
            !(this.address == null) &&
            !(this.mobile == null)) {
            if (this.password == this.cpassword) {
                var id = localStorage.getItem('tempid');
                // get access token
                let urlaccess = API.API_UPDATEMEMBERS + id;
                let body2 = "name=" + this.name + "&password=" + this.password + '&email=' + this.email + '&regno=' + this.regno + '&fathername=' + this.fathername + '&landlinenumber=' + this.landlinenumber + '&address=' + this.address + '&mobile=' + this.mobile + '&housename=' + this.housename + '&lastmosquename=' + this.lastmosquename + '&currentmosquename=' + this.currentmosquename + '&updated_at=' + this.model + '&varasangya=' + this.varasangya + '&houseno=' + this.houseno;
                this.accesstoken = localStorage.getItem('access_token')
                let head2 = new Headers({
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Authorization': 'Bearer ' + this.accesstoken
                });

                this.http.put(urlaccess, body2, {headers: head2})
                    .map(res => res.json())
                    .catch(e => {
                        if (e.status === 401) {
                            return Observable.throw('Unauthorized');
                        }
                        // do any other checking for statuses here
                    })
                    .subscribe(data => {
                            this.addmember();
                            this.router.navigate(['/dashboard']);
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

    block(id) {
        let urlaccess = API.API_UPDATEMEMBERSSTATUS + id;
        let body2 = "unblock=true&block=false&memberstatus=Inactive&updated_at=" + this.model;
        this.accesstoken = localStorage.getItem('access_token')
        let head2 = new Headers({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Bearer ' + this.accesstoken
        });

        this.http.put(urlaccess, body2, {headers: head2})
            .map(res => res.json())
            .catch(e => {
                if (e.status === 401) {
                    return Observable.throw('Unauthorized');
                }
                // do any other checking for statuses here
            })
            .subscribe(data => {
                    this.addmember();
                    this.router.navigate(['/dashboard']);
                },
                error => {
                    if (error == "Unauthorized") {
                        console.log(error);


                    }
                    console.log(error);

                });

    }

    unblock(id) {
        let urlaccess = API.API_UPDATEMEMBERSSTATUS + id;
        let body2 = "block=true&unblock=false&memberstatus=Active&updated_at=" + this.model;
        this.accesstoken = localStorage.getItem('access_token')
        let head2 = new Headers({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Bearer ' + this.accesstoken
        });

        this.http.put(urlaccess, body2, {headers: head2})
            .map(res => res.json())
            .catch(e => {
                if (e.status === 401) {
                    return Observable.throw('Unauthorized');
                }
                // do any other checking for statuses here
            })
            .subscribe(data => {
                    this.addmember();
                    this.router.navigate(['/dashboard']);
                },
                error => {
                    if (error == "Unauthorized") {
                        console.log(error);


                    }
                    console.log(error);

                });
    }


    dashboard() {
        this.onNone();
        var memeberlist = document.getElementById("dashboard");
        memeberlist.style.display = 'block'


    }

    addmember() {
        this.onNone()
        this.loadmemberdata()

        var memeberlist = document.getElementById("showmemberlist");
        memeberlist.style.display = 'block'

    }

    paymentlist() {

        this.onNone()
        var paymentlist = document.getElementById("showpaymentlist");
        paymentlist.style.display = 'block'

    }

}
