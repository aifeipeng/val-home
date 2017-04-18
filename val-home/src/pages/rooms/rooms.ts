/**
 * Created by filip on 2017-03-20.
 */
import {NavController, NavParams, Slides, Toggle} from 'ionic-angular';
import { Component, OnInit, ViewChild } from '@angular/core';
import {Device} from "../../app/device";
import {ApiCallsservice} from "../../app/apicalls.service";
import {Lamp} from "../../app/lamp";
import {LampsPage} from "../lamps/lamps";
import {RadiatorsPage} from "../radiators/radiators";
import {Observable} from "rxjs";
import {Room} from "../../app/room";

@Component({
  selector: 'page-rooms',
  templateUrl: 'rooms.html',
  providers: [ApiCallsservice]
})
export class RoomsPage implements OnInit{
  @ViewChild(Slides) slides: Slides;
  @ViewChild(Toggle) toggle: Toggle;
  selectedSegment: string;
  title = 'Rooms';
  devices: Device[];
  deviceList: Device[];
  room: Room;

  constructor(private apicallsservice: ApiCallsservice,public navCtrl: NavController, public navParams: NavParams){
    this.selectedSegment = 'first';
    this.room = navParams.get('room');
  }

  itemToggled(event, dev){
    console.log(dev.powered);
    this.apicallsservice.updateDevice(dev).subscribe();
  }

  itemTapped(event, item) {
    if(item.__t === 'Lamp'){
      this.navCtrl.push(LampsPage, {
        device: item
      });
    }
    else {
      this.navCtrl.push(RadiatorsPage, {
        device: item
      });
    }

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

  ngOnInit(): void {
   Observable.forkJoin( this.apicallsservice.getDevices())
     .subscribe(p => {
       this.devices = p[0];
       this.deviceList = this.devices.filter(d => d.roomId === this.room._id);
       console.log(this.devices);
       console.log(this.deviceList);
     })

  }
}
