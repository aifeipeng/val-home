/**
 * Created by filip on 2017-03-20.
 */
import { NavController} from 'ionic-angular';
import { Component, ViewChild } from '@angular/core';
import { List } from 'ionic-angular';

//const DEVICES
@Component({
  selector: 'page-rooms',
  templateUrl: 'rooms.html'
})
export class RoomsPage {
  @ViewChild(List) list: List;
  title = 'Rooms';
 // device = DEVICES;

  constructor(public navCtrl: NavController){
//    stopSliding() {
//      this.list.enableSlidingItems(false);
  }
}
