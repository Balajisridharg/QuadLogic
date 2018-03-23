import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MenubarModule} from 'primeng/menubar';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MidBodyComponent } from './mid-body/mid-body.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MidBodyComponent
  ],
  imports: [
    BrowserModule, MenubarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
