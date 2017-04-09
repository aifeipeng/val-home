/**
 * Created by filip on 2017-04-04.
 */
import {NavController, NavParams,Slides} from 'ionic-angular';
import { Component, ViewChild } from '@angular/core';
import {Device} from "../../app/device";


@Component({
  selector: 'page-lamps',
  templateUrl: 'lamps.html'
})
export class LampsPage {
  @ViewChild(Slides) slides: Slides;
  selectedSegment: string;
  device: Device;

  constructor(public navCtrl: NavController, public navParams: NavParams){
    this.selectedSegment = 'first';
    this.device = navParams.get('device');
  }

  itemToggled(event){
    console.log(this.device.powered);
    this.device.powered = !this.device.powered;
    console.log(this.device.powered);
  }

  onSegmentChanged(segmentButton) {
    console.log("Segment changed to", segmentButton.value);
    if(segmentButton.value ===('first')){
      this.slides.slideTo(0);
    }
    else {
      this.slides.slideTo(1);
    }
  }

  onSlideChanged(slider) {
    console.log('Slide changed');
    const currentSlide = this.slides.getActiveIndex();
    if(currentSlide === 0){
      this.selectedSegment = 'first';
    }
    else {
      this.selectedSegment = 'second';
    }
    console.log(currentSlide);
  }
}
