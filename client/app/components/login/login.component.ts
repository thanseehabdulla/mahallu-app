import {Component, OnInit} from "@angular/core";

import {Router} from "@angular/router";
import {Headers, Http} from "@angular/http";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/map";
import {API} from "./../../api_config/api_config";


@Component({
    moduleId: module.id,
    selector: 'login',
    templateUrl: './login.component.html',
})

export class TasksComponent implements OnInit {

    public email: any;
    public password: any;
    public registration: any;
    public access_token: any;
    public refresh_token: any;


    constructor(private router: Router, public http: Http) {

    }


    // on initialization
    ngOnInit() {
        if (localStorage.getItem('User') == 'admin') {

            this.router.navigate(['/admin']);

        }
        else if (localStorage.getItem('User') == 'commite') {
            this.router.navigate(['/dashboard']);
        } else {
            this.router.navigate(['/login']);
        }

    }


// on login button press
    Login() {

        console.log('reached login')
        // if admin

        if (this.email == 'admin') {

            // pre registration if not added
            let url = API.API_REGISTER;
            let body = "username=" + this.email + "&password=" + this.password;
            let head = new Headers({
                'Content-Type': 'application/x-www-form-urlencoded'
            });


            this.http.post(url, body, {headers: head})
                .map(res => res.json())
                .subscribe(data => {


                }, error => {
                    console.log(error);
                });

            console.log('get access_token');
            // get access token
            let urlaccess = API.API_AccessToken;
            let body2 = "username=" + this.email + "&password=" + this.password + '&grant_type=password';
            localStorage.setItem('username', this.email)
            var authdata = btoa('test' + ':' + 'secret');
            let head2 = new Headers({
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Basic ' + authdata
            });

            this.http.post(urlaccess, body2, {headers: head2})
                .map(res => res.json())
                .subscribe(data => {
                    this.access_token = data.access_token;
                    this.refresh_token = data.refresh_token;
                    console.log('access_token' + this.access_token + '\n refresh_token' + this.refresh_token)
                    localStorage.setItem('access_token', this.access_token)
                    localStorage.setItem('refresh_token', this.refresh_token)
                    localStorage.setItem('User', "admin")
                    localStorage.setItem('code', this.email)
                    localStorage.setItem('objectid', data.userObjectId)
                    this.router.navigate(['/admin']);
                }, error => {
                    console.log(error);

                });


        } else {


            let urlaccess = API.API_AccessToken;
            let body2 = "username=" + this.email + "&password=" + this.password + '&grant_type=password';
            localStorage.setItem('username', this.email)
            var authdata = btoa('clientBasic' + ':' + 'clientPassword');
            let head2 = new Headers({
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Basic ' + authdata
            });

            this.http.post(urlaccess, body2, {headers: head2})
                .map(res => res.json())
                // do any other checking for statuses here

                .subscribe(data => {
                    this.access_token = data.access_token;
                    this.refresh_token = data.refresh_token;
                    console.log('access_token' + this.access_token + '\n refresh_token' + this.refresh_token)
                    // localStorage.setItem('objectId',data.userObjectId)
                    localStorage.setItem('access_token', this.access_token)
                    localStorage.setItem('refresh_token', this.refresh_token)
                    localStorage.setItem('User', "commite")
                    localStorage.setItem('code', this.email);
                    this.router.navigate(['/dashboard']);
                }, error => {
                    console.log(error + "customer error");

                });


        }


    }
}



