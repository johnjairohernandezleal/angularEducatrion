import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {AuthModule} from './auth/auth.module';
import {LoginComponent} from './auth/login/login.component';
import {RegisterComponent} from './auth/register/register.component';
import {ForgetPasswordComponent} from './auth/forget-password/forget-password.component';
import {SmartTemplateComponent} from './template/smart-template/smart-template.component';
import {TemplateModule} from './template/template.module';
import {DashboardModule} from './pages/dashboard/dashboard.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( response => response.AuthModule )
  },
  {
    path: 'pages',
    component: SmartTemplateComponent,
    loadChildren: () => import('./pages/dashboard/dashboard.module').then(response => response.DashboardModule)
  }
]


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AuthModule,
    TemplateModule,
    DashboardModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
