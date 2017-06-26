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
  templateUrl: './tasks.component.html',
})

export class TasksComponent implements OnInit{ 




    
    
    
    constructor(private router: Router,public http:Http){
       
    }
    
    
    
    // on init
    ngOnInit(){


    }

    

  
}
