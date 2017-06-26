import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Http, Headers} from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {API} from './../../api_config/api_config';
import {Base64} from 'js-base64';


@Component({
  moduleId: module.id,
  selector: 'login',
  templateUrl: './login.component.html',
})

export class TasksComponent implements OnInit{ 

    public name:any;
    public password:any;
    public registration:any;
    public access_token:any;
    public refresh_token:any;


    
    
    
    constructor(private router: Router,public http:Http){
       
    }
    
    
    
    // on initialization 
    ngOnInit(){
// if(sessionStorage.getItem('User')=='admin'){
     
//      this.router.navigate(['/admin']);

//         }
//      else if(sessionStorage.getItem('User')=='commite'){
//         this.router.navigate(['/commite']);
//      }

    }

    
// on login button press
onLogin(){
    
console.log('reached login')
       // if admin

          if(this.name == 'admin'){
                 
                 // redirect
                    sessionStorage.setItem('User',this.name)
                    this.router.navigate(['/admin']);  



          }else{

            // if users
                    
                    // redirect
                    sessionStorage.setItem('User',this.name)
                    this.router.navigate(['/commite']);  





              }  
}

  
}
