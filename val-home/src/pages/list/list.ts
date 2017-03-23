/**
 * Created by filip on 2017-03-23.
 */
import { Component, ViewChild } from '@angular/core';
import { List } from 'ionic-angular';

const namn: string[] = [
  "string","hej"
  ];



@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  titles = namn;
  @ViewChild(List) list: List;
  // this tells the tabs component which Pages
  // should be each tab's root Page


  constructor() { }
 // Don't know what this is for
  /* stopSliding()
  {
    this.list.enableSlidingItems(false);
  }*/
}
