/**
 * Created by filip on 2017-03-21.
 */
import { NavController} from 'ionic-angular';
import { Component, ViewChild } from '@angular/core';
import { List } from 'ionic-angular';


@Component({
  selector: 'page-devices',
  templateUrl: 'devices.html'
})
export class DevicesPage {
  @ViewChild(List) list: List;
  // device = DEVICES;

  constructor(public navCtrl: NavController){
//    stopSliding() {
//      this.list.enableSlidingItems(false);
  }
}
