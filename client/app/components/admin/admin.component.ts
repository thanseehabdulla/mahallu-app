
import { Component , OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Http, Headers} from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {API} from './../../api_config/api_config';
import {Base64} from 'js-base64';

import "jquery";

import 'datatables.net';





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

export class AdminComponent implements OnInit{ 



// on init
    ngOnInit(){



    }

ngAfterViewInit() {
    this.initDatatable()
  }

    private initDatatable(): void {
   
    
 
  }


  private reInitDatatable(): void {
    
  }

  
    
    constructor(private router: Router,public http:Http){
   


    }


// main menu
  // about function
    aboutmahal(){

    }  

  //instruction function 
  instruction(){

  }

 // setting function
 setting(){

 }

// help
help(){

}

// report us
report(){

}

// Logout
Logout(){

}



// panel items

// home

home(){
this.router.navigate(['/admin']); 
}

addmember()
{
this.router.navigate(['/client']); 
}

inbox(){
// class disabled
}

varasangya(){
this.router.navigate(['/varasangya']); 
}

eidsangya(){
this.router.navigate(['/perunaal']); 
}

moludsangya()
{
this.router.navigate(['/molud']); 
}


rathibsangya(){
this.router.navigate(['/rathib']); 
}


charitysangya(){
this.router.navigate(['/charity']); 
}

miscellanous(){
this.router.navigate(['/miscellanous']); 
}

madrass(){
// currently disabled
}

onlinetranscation(){
// currently disabled
}

Sendnotification(){
this.router.navigate(['/notification']); 
}

marriagecertificate(){
this.router.navigate(['/marriagecertificate']); 
}

gallery(){
// currently disabled
}



}



