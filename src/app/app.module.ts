import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import {MenubarModule} from 'primeng/menubar';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { HeaderComponent } from './header/header.component';
import { MidBodyComponent } from './mid-body/mid-body.component';
import { AllSitesComponent } from './all-sites/all-sites.component';
import { LoginPageComponent } from './login-page/login-page.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MidBodyComponent,
    AllSitesComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,BrowserAnimationsModule, MenubarModule,TableModule,AccordionModule,ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
