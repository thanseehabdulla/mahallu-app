we are in commitee
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
   
    // let exampleId: any = $('#example');
    // this.tableWidget = exampleId.DataTable({
    //   destroy: true,
    //   select: true
    // });
 
  }


  private reInitDatatable(): void {
    // if (this.tableWidget) {
    //   this.tableWidget.destroy()
    //   this.tableWidget=null
    // }
    // setTimeout(() => this.initDatatable(),0)
  }

  
    
    constructor(private router: Router,public http:Http){
   


    }

     


}



