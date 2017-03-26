import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import {RoomsPage} from '../pages/rooms/rooms';
import {DevicesPage} from '../pages/devices/devices';

import { HttpModule } from '@angular/http';
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {ApiCallsservice} from "./apicalls.service";
import {RoomListPage} from "../pages/roomlist/roomlist";

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    RoomsPage,
    DevicesPage,
    RoomListPage
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
    TabsPage,
    RoomsPage,
    DevicesPage,
    RoomListPage
  ],
  providers: [
    ApiCallsservice,
    {provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
