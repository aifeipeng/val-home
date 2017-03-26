/**
 * Created by filip on 2017-03-21.
 */
import {NavController, NavParams,Slides} from 'ionic-angular';
import { Component, ViewChild } from '@angular/core';
import {Device} from "../../app/device";


@Component({
  selector: 'page-devices',
  templateUrl: 'devices.html'
})
export class DevicesPage {
  @ViewChild('mySlider') slider: Slides;
  selectedSegment: string;
  slides: any;
  device: Device;
  // device = DEVICES;

  constructor(public navCtrl: NavController, public navParams: NavParams){
    this.selectedSegment = 'first';
    this.slides = [
      {
        id: "first",
        title: "First Slide"
      },
      {
        id: "second",
        title: "Second Slide"
      },
      {
        id: "third",
        title: "Third Slide"
      }
    ];
    this.device = navParams.get('device');
  }

  onSegmentChanged(segmentButton) {
    console.log("Segment changed to", segmentButton.value);
    const selectedIndex = this.slides.findIndex((slide) => {
      return slide.id === segmentButton.value;
    });
    this.slider.slideTo(selectedIndex);
  }

  onSlideChanged(slider) {
    console.log('Slide changed');
    const currentSlide = this.slides[slider.activeIndex];
    this.selectedSegment = currentSlide.id;
  }
}
