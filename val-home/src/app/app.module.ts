import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import {RoomsPage} from '../pages/rooms/rooms';
import {DevicesPage} from '../pages/devices/devices';

import { HttpModule } from '@angular/http';
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {ApiCallsservice} from "./apicalls.service";
import {LampsPage} from "../pages/lamps/lamps";
import {RadiatorsPage} from "../pages/radiators/radiators";

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    LampsPage,
    RoomsPage,
    DevicesPage,
    RadiatorsPage
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    LampsPage,
    RoomsPage,
    DevicesPage,
    RadiatorsPage
  ],
  providers: [
    ApiCallsservice,
    {provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
