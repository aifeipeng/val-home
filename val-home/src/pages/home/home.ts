import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { RoomListpage } from './page-roomlist';

const namn: string[] = [
  "string","hej"
];
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  names = namn;
  constructor(public navCtrl: NavController) {

  }

}
