import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MenubarModule} from 'primeng/menubar'; 
import {TabViewModule} from 'primeng/tabview';
import {DataTableModule} from 'primeng/datatable';
import {ButtonModule} from 'primeng/button';
import {DialogModule} from 'primeng/dialog';
import {FileUploadModule} from 'primeng/fileupload';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DropdownModule} from 'primeng/dropdown';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MidBodyComponent } from './mid-body/mid-body.component';
import { SitesComponent } from './sites/sites.component';
import { SectionsComponent } from './sections/sections.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MidBodyComponent,
    SitesComponent,
    SectionsComponent
  ],
  imports: [
    BrowserModule, MenubarModule, TabViewModule, DataTableModule, ButtonModule, DialogModule, FileUploadModule, BrowserAnimationsModule, DropdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
