import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MenubarModule} from 'primeng/menubar'; 
import {TabViewModule} from 'primeng/tabview';
import {DataTableModule} from 'primeng/datatable';

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
    BrowserModule, MenubarModule, TabViewModule, DataTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
