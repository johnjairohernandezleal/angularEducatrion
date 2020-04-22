import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmartTemplateComponent } from './smart-template/smart-template.component';
import { HeaderComponent } from './header/header.component';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { ProfileMenuComponent } from './profile-menu/profile-menu.component';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [SmartTemplateComponent, HeaderComponent, LeftMenuComponent, ProfileMenuComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    SmartTemplateComponent
  ]
})
export class TemplateModule { }
