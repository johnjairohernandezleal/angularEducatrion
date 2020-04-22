import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthModule } from './auth/auth.module';
import {ProfileComponent} from './pages/users/profile/profile.component';
import {SmartTemplateComponent} from './template/smart-template/smart-template.component';
import {LoginComponent} from './auth/login/login.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: '/auth',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    component: LoginComponent,
  },
  {
    path: '',
    component: SmartTemplateComponent,
    loadChildren: () => import('./pages/pages.module').then(response => response.PagesModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true }), AuthModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
