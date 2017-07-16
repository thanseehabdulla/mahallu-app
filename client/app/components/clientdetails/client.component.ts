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
  selector: 'client',
  templateUrl: './client.component.html',
})

export class ClientComponent implements OnInit{ 

 

    public options:any;
    public tableWidget:any
    public selectedName:any
    
    constructor(private router: Router,public http:Http){
       
    }
    
    
    
    // on initialization 
    ngOnInit(){

this.memberlist = 'Home / Memberlist'
    }

    ngAfterViewInit() {
    this.initDatatable()

this.options = [{
  name : 'Active'
},
{
  name : 'Inactive'
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
      this.tableWidget=null
    }
    setTimeout(() => this.initDatatable(),0)
  }

public selectRow(index: number, row:any) {
    this.selectedName = "row#" + index + " " + row.name
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
localStorage.removeItem('User');
   localStorage.removeItem('access_token');      
   localStorage.removeItem('refresh_token');    

   this.router.navigate(['/login']);
   
   console.log('logged out');
}



// main screen content



public memberlist:any;
regno:any
name:any
fathername:any
housename:any
email:any
mobile:any
landlinenumber:any
lastmosquename:any
currentmosquename:any
password:any
cpassword:any
memberstatus:any
address:any
appstatus:any
varasangya:any
dd:any
mm:any
yyyy:any
model:any
houseno:any
arraylist:any
public accesstoken:any
date(){
var today = new Date();
 this.dd = today.getDate();
 this.mm = today.getMonth()+1; //January is 0!
 this.yyyy = today.getFullYear();
this.model= { date: { year: this.yyyy, month: this.mm, day: this.dd } };

}


reinitvalues(){
  this.regno=null;
  this.name=null
  this.address=null
  this.email=null
  this.varasangya=null
  this.landlinenumber=null
  this.mobile=null
  this.password=null
  this.cpassword=null
  this.houseno=null;
  

}

back(){
   this.router.navigate(['/commite']);
}

// selector value chAnges
onChange(newValue) {
    console.log(newValue + this.memberstatus);
    this.memberstatus = newValue;
    
}

// selector value chAnges
onChange2(newValue) {
    console.log(newValue + this.appstatus);
    this.appstatus = newValue;
    
}

// load mahal data
loaddata(){
       console.log('load member data');
let url = API.API_GETMEMBERS;
    this.accesstoken=localStorage.getItem('access_token')
             let head2 = new Headers({
             'Content-Type': 'application/x-www-form-urlencoded',
             'Authorization':'Bearer '+ this.accesstoken
    });

  this.http.get(url,{
      headers: head2
    })
    .map(res =>  {
            return res.json();
}).catch(e => {
            if (e.status === 401) {
                return Observable.throw('Unauthorized');
            }
            // do any other checking for statuses here
        }).subscribe(data => {
       console.log(JSON.stringify(data));
this.arraylist = Array();
this.arraylist=data;
this.reInitDatatable()
}, error => {
if(error=="Unauthorized"){
alert(error);
console.log(error);
}
});      
    
       }

// edit button press
edit(id){
  console.log('reached edit');
    localStorage.setItem('tempid',id);
    this.onNone()
    var displass = document.getElementById('editcustomer')
    displass.style.display = 'block';
    
    this.loadsingledata(id); 
}

// load single datta on edit button press
loadsingledata(id){
       console.log('load single member data');
let url = API.API_GETMEMBERS+id;
    this.accesstoken=localStorage.getItem('access_token')
             let head2 = new Headers({
             'Content-Type': 'application/x-www-form-urlencoded',
             'Authorization':'Bearer '+ this.accesstoken
    });

  this.http.get(url,{
      headers: head2
    })
    .map(res =>  {
            return res.json();
}).catch(e => {
            if (e.status === 401) {
                return Observable.throw('Unauthorized');
            }
            // do any other checking for statuses here
        }).subscribe(data => {
       console.log(JSON.stringify(data));
       this.regno=data.regno;
       this.name=data.name;
       this.email=data.email;
       this.landlinenumber=data.landlinenumber;
       this.address=data.address
       this.mobile=data.mobile
       this.varasangya = data.varasangya
       this.housename=data.housename
       this.houseno  =data.houseno
       this.fathername = data.fathername
       this.appstatus =data.appstatus
       this.memberstatus=data.memberstatus
       this.lastmosquename=data.lastmosquename
       this.currentmosquename=data.currentmosquename

}, error => {
if(error=="Unauthorized"){
console.log(error);
}
});      
}

submitform(){

if(  !(this.regno==null) &&
       !(this.name==null) &&
       !(this.password==null)&&
       !(this.email==null)&&
       !(this.landlinenumber==null)&&
       !(this.address==null)&&
       !(this.mobile==null)){
      if(this.password == this.cpassword){

  // get access token
       let urlaccess = API.API_ADDMEMBER;
             let body2 = "name="+this.name+"&memberstatus"+this.memberstatus+"&password="+this.password+'&email='+this.email+'&regno='+this.regno+'&fathername='+this.fathername+'&landlinenumber='+this.landlinenumber+'&address='+this.address+'&mobile='+this.mobile+'&housename='+this.housename+'&lastmosquename='+this.lastmosquename+'&currentmosquename='+this.currentmosquename+'&created_at='+this.model+'&updated_at='+this.model+'&varasangya='+this.varasangya+'&appstatus='+this.appstatus+'&houseno='+this.houseno;
             this.accesstoken=localStorage.getItem('access_token')
             let head2 = new Headers({
             'Content-Type': 'application/x-www-form-urlencoded',
             'Authorization':'Bearer '+ this.accesstoken
    });
    
            this.http.post(urlaccess, body2, {headers : head2})
            .map(res =>  res.json())
            .catch(e => {
            if (e.status === 401) {
                return Observable.throw('Unauthorized');
            }
            // do any other checking for statuses here
        })
       .subscribe(data => {
         this.home();            
         this.router.navigate(['/client']);   
     }, 
     error => {
       if(error=="Unauthorized"){
       console.log(error);
      
    
       }
      console.log(error);
             
            });
 
          }else{
//  console.log(error);
       }
        }else{
//  console.log(error);
 }


}


onNone(){
  var memberlist = document.getElementById('showmemberlist')
  memberlist.style.display = 'none'
var addmembers  =document.getElementById('addcustomer')
addmembers.style.display = 'none'
var editmembers = document.getElementById('editcustomer')
editmembers.style.display = 'none'
}

home(){
this.onNone()
  var memberlist = document.getElementById('showmemberlist')
  memberlist.style.display = 'block'
this.memberlist = 'Home / Memberlist'

}

// functionalities
addmembers(){
this.onNone()
var addmembers  =document.getElementById('addcustomer')
addmembers.style.display = 'block'
this.memberlist = 'Home / Add Members'

}


  
}
