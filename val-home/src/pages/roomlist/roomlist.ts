/**
 * Created by filip on 2017-03-23.
 */
import {Component, OnInit, ViewChild} from '@angular/core';
import {List, NavController, NavParams} from 'ionic-angular';
import { ApiCallsservice} from '../../app/apicalls.service';
import {House} from "../../app/house";
import {RoomsPage} from "../rooms/rooms";
import {Room} from "../../app/room";


const namn: string[] = [
  "string","hej"
  ];
const HOUSES: House[] = [{
  _id: "58c864569bbc23f8585658dd",
  name: "myhouse",
  powerData: [22],
  temperature: [23]
}];

const ROOMS: Room[] = [{
  _id: "58c868bd9bbc23f8585658df",
  houseId: "58c864569bbc23f8585658dd",
  name: "living_room",
  powerData: [22],
  temperature: [23]
},
  {
    _id: "58cf07e742a50aec795e6aaf",
    houseId: "58c864569bbc23f8585658dd",
    name: "kitchen",
    powerData: [22],
    temperature: [23]
  }];


@Component({
  selector: 'page-roomlist',
  templateUrl: 'roomlist.html',
  providers: [ApiCallsservice]
})
export class RoomListPage implements OnInit{
  houses = HOUSES;
  rooms = ROOMS;
  items: Array<{title: string, note: string, icon: string}>;
  names = namn;
  listingrooms: Room[];

  @ViewChild(List) list: List;
  // this tells the tabs component which Pages
  // should be each tab's root Page


  constructor(private apicallsservice: ApiCallsservice,public navCtrl: NavController, public navParams: NavParams) {

    this.listingrooms = this.rooms.filter(r => r.houseId=== this.houses[0]._id);
    //this.selectedItem = navParams.get('item');
  }


  itemTapped(event, item) {
    this.navCtrl.push(RoomsPage, {
      room: item
    });
  }

  ngOnInit(): void {
    this.apicallsservice
      .getHouses()
      .subscribe(p => this.houses = p)
  }


  // Don't know what this is for
  /* stopSliding()
  {
    this.list.enableSlidingItems(false);
  }*/
}
