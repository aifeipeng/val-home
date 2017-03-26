/**
 * Created by filip on 2017-03-26.
 */
import {Component, OnInit, ViewChild} from '@angular/core';
import {List, NavController, NavParams} from 'ionic-angular';
import { ApiCallsservice} from '../../app/apicalls.service';
import {Room} from "../../app/room";





@Component({
  selector: 'page-devicelist',
  templateUrl: 'devicelist.html',
  providers: [ApiCallsservice]
})
export class DeviceListPage implements OnInit {
  ngOnInit(): void {
  }
  selectedItem: any;
  icons: string[];
  items: Array<{ title: string, note: string, icon: string }>;

  listingrooms: Room[];

  @ViewChild(List) list: List;
  // this tells the tabs component which Pages
  // should be each tab's root Page


  constructor(private apicallsservice: ApiCallsservice, public navCtrl: NavController, public navParams: NavParams) {


  }

}
