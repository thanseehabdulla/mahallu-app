import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {AppComponent} from "./app.component";
import {TasksComponent} from "./components/login/login.component";
import {AdminComponent} from "./components/admin/admin.component";
import {MyDatePickerModule} from "mydatepicker";
import {RouterModule, Routes} from "@angular/router";
import {pageNotFoundComponent} from "./components/pagenotfound/pagenotfound.component";
import {CanActivateViaAuthGuard} from "./components/security/auth.guard";
import {CanActivateViaAuthGuardAdmin} from "./components/security/auth.guard.admin";
import {AuthService} from "./components/security/auth.service";
import {dashboard} from "./components/Dashboard/dashboard";

const appRoutes: Routes = [
    {
        path: 'admin', component: AdminComponent, canActivate: [
        CanActivateViaAuthGuardAdmin
    ]
    },
    {path: 'login', component: TasksComponent},
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    }, {
        path: 'dashboard', component: dashboard, canActivate: [
            CanActivateViaAuthGuardAdmin
        ]
    },

    {path: '**', component: pageNotFoundComponent}
];


@NgModule({
    imports: [BrowserModule, HttpModule, FormsModule, MyDatePickerModule, RouterModule.forRoot(appRoutes)],
    declarations: [dashboard, AppComponent, TasksComponent, AdminComponent, pageNotFoundComponent],
    providers: [
        AuthService,
        CanActivateViaAuthGuard, CanActivateViaAuthGuardAdmin
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
