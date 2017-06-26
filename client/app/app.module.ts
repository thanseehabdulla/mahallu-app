import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {TasksComponent} from './components/login/login.component';
import {CommiteComponent} from './components/commite/commite.component'
import {AdminComponent} from './components/admin/admin.component'
import { MyDatePickerModule } from 'mydatepicker';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { RouterModule, Routes } from '@angular/router';
import {pageNotFoundComponent} from './components/pagenotfound/pagenotfound.component'
import {CanActivateViaAuthGuard} from './components/security/auth.guard'
import {CanActivateViaAuthGuardAdmin} from './components/security/auth.guard.admin'
import {ConfirmDeactivateGuard} from './components/security/auth.deguard'
import {AuthService} from './components/security/auth.service'

// updated routes
import {CharityComponent} from './components/charity/charity.component'
import {ClientComponent} from './components/clientdetails/client.component'
import {FamilydetailComponent} from './components/familydetails/familydetail.component'
import {MarriageCertificateComponent} from './components/marriagecertificate/marriagecertificate.component'
import {MiscellanousComponent} from './components/miscellanous/miscellanous.component'
import {MoludComponent} from './components/molud/molud.component'
import {NotificationComponent} from './components/notification/notification.component'
import {PerunaalComponent} from './components/perunaal/perunaal.component'
import {RathibComponent} from './components/rathib/rathib.component'
import {VarasangyaComponent} from './components/varasangya/varasangya.component'


const appRoutes: Routes = [

  { path: 'charity',      component: CharityComponent, canActivate: [
    CanActivateViaAuthGuardAdmin
  ] },
  { path: 'client',      component: ClientComponent, canActivate: [
    CanActivateViaAuthGuardAdmin
  ] },
  { path: 'familydetail',      component: FamilydetailComponent, canActivate: [
    CanActivateViaAuthGuardAdmin
  ] },
  { path: 'marriagecertificate',      component: MarriageCertificateComponent, canActivate: [
    CanActivateViaAuthGuardAdmin
  ] },
  { path: 'miscellanous',      component: MiscellanousComponent, canActivate: [
    CanActivateViaAuthGuardAdmin
  ] },
  { path: 'notification',      component: NotificationComponent, canActivate: [
    CanActivateViaAuthGuardAdmin
  ] },
  { path: 'perunaal',      component: PerunaalComponent, canActivate: [
    CanActivateViaAuthGuardAdmin
  ] },
  { path: 'rathib',      component: RathibComponent, canActivate: [
    CanActivateViaAuthGuardAdmin
  ] },
  { path: 'varasangya',      component: VarasangyaComponent, canActivate: [
    CanActivateViaAuthGuardAdmin
  ] },
  { path: 'admin',      component: AdminComponent, canActivate: [
    CanActivateViaAuthGuardAdmin
  ] },
  { path: 'commite',      component: CommiteComponent, canActivate: [
    CanActivateViaAuthGuardAdmin
  ] },
  { path: 'login',      component: TasksComponent },
  { path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  { path: '**', component: pageNotFoundComponent }
];


@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule,MyDatePickerModule,AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDJSftDw2ZAC-PU9AXx0u7UVhbKGqO90j0'
    }),RouterModule.forRoot(appRoutes)],
  declarations: [AppComponent, TasksComponent,AdminComponent,pageNotFoundComponent,CommiteComponent,CharityComponent,ClientComponent,FamilydetailComponent,MarriageCertificateComponent,MiscellanousComponent,MoludComponent,NotificationComponent,PerunaalComponent,RathibComponent,VarasangyaComponent],
   providers: [
    AuthService,
    CanActivateViaAuthGuard,ConfirmDeactivateGuard,CanActivateViaAuthGuardAdmin
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
