/**
 * Created by filip on 2017-03-20.
 */
import {NavController, NavParams } from 'ionic-angular';
import { Component, OnInit, ViewChild } from '@angular/core';
import {Device} from "../../app/device";
import {ApiCallsservice} from "../../app/apicalls.service";
import {DevicesPage} from "../devices/devices";

const DEVICES: Device[] = [{
  _id: "58c99bbc3404c29b31ec2237",
  roomId: "58c868bd9bbc23f8585658df",
  name: "ceiling_lamp",
  __v: 332,
  __t: "Lamp",
  powered: true,
  temp: 3,
  powerConsumption: 22,
  powerData: [33],
  temperature: [22],
  dimmer: 3
},
  {
    _id: "58cf084942a50aec795e6ab0",
    roomId: "58c868bd9bbc23f8585658df",
    name: "ceiling_lamp",
    __v: 332,
    __t: "Lamp",
    powered: true,
    temp: 3,
    powerConsumption: 22,
    powerData: [33],
    temperature: [22],
    dimmer: 3
  },
  {
    _id: "58cf089d42a50aec795e6ab1",
    roomId: "58cf07e742a50aec795e6aaf",
    name: "radiator by the window",
    __v: 474,
    __t: "Radiator",
    powered: true,
    temp: 3,
    powerConsumption: 0,
    powerData: [33],
    temperature: [22],
    dimmer: 3
  }];

//const DEVICES
@Component({
  selector: 'page-rooms',
  templateUrl: 'rooms.html'
})
export class RoomsPage implements OnInit{
  title = 'Rooms';
  devices = DEVICES;
  listingdevices: Device[];

 // device = DEVICES;

  constructor(private apicallsservice: ApiCallsservice,public navCtrl: NavController, public navParams: NavParams){
//    stopSliding() {
//      this.list.enableSlidingItems(false);
   // console.log(navParams.get('room'));
    this.listingdevices = this.devices.filter(d => d.roomId===navParams.get('room')._id);
  }

  itemTapped(event, item) {
    this.navCtrl.push(DevicesPage, {
      device: item
    });
  }

  ngOnInit(): void {
    this.apicallsservice
      //.getHouses()
     // .subscribe(p => this.houses = p)
  }
}
