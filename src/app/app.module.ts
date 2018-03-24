import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';




import {DialogModule} from 'primeng/dialog';
import {FileUploadModule} from 'primeng/fileupload';
import {DropdownModule} from 'primeng/dropdown';


import { AppComponent } from './app.component';

import {MenubarModule} from 'primeng/menubar';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {InputTextModule} from 'primeng/inputtext';
import {PasswordModule} from 'primeng/password';
import { HeaderComponent } from './header/header.component';
import { MidBodyComponent } from './mid-body/mid-body.component';
import { AllSitesComponent } from './all-sites/all-sites.component';
import { LoginPageComponent } from './login-page/login-page.component';

import {TabViewModule} from 'primeng/tabview';
import {DataTableModule} from 'primeng/datatable';

import { SitesComponent } from './sites/sites.component';
import { SectionsComponent } from './sections/sections.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MidBodyComponent,
    AllSitesComponent,
    LoginPageComponent,
    SitesComponent,
    SectionsComponent
  ],
  imports: [

    BrowserModule,BrowserAnimationsModule, MenubarModule,TableModule,AccordionModule,ButtonModule,DataTableModule,TabViewModule,InputTextModule,DialogModule,FileUploadModule,DropdownModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
