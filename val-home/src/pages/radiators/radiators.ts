/**
 * Created by filip on 2017-04-04.
 */
import {NavController, NavParams,Slides} from 'ionic-angular';
import { Component, ViewChild } from '@angular/core';
import {Device} from "../../app/device";
import {ApiCallsservice} from "../../app/apicalls.service";


@Component({
  selector: 'page-radiators',
  templateUrl: 'radiators.html',
  providers: [ApiCallsservice]
})
export class RadiatorsPage {
  @ViewChild(Slides) slides: Slides;
  selectedSegment: string;
  device: Device;

  constructor(private apicallsservice: ApiCallsservice, public navCtrl: NavController, public navParams: NavParams){
    this.selectedSegment = 'first';
    this.device = navParams.get('device');
  }

  itemToggled(event, dev){
    console.log(this.device.temp);
    this.apicallsservice.updateDevice(dev);
  }

  onSegmentChanged(segmentButton) {
    console.log("Segment changed to", segmentButton.value);
    if(segmentButton.value ===('first')){
      this.slides.slideTo(0)
    }
    else {
      this.slides.slideTo(1)
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
