import {Component, OnInit, ViewChild} from '@angular/core';
import { Observable } from 'rxjs/Rx';

import {NavController, NavParams,Slides} from 'ionic-angular';
import {ApiCallsservice} from "../../app/apicalls.service";
import {Room} from "../../app/room";
import {House} from "../../app/house";
import {RoomsPage} from "../rooms/rooms";
import { Chart } from 'chart.js';
import { LoadingController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [ApiCallsservice]
})
export class HomePage implements OnInit{
  @ViewChild(Slides) slides: Slides;
  selectedSegment: string;
  houses: House[];
  house: House;
  rooms: Room[];
  roomList: Room[];
  shownPowerChart = false;
  shownTemperatureChart = false;

  constructor(public loadingCtrl: LoadingController, private apicallsservice: ApiCallsservice, public navCtrl: NavController, public navParams: NavParams) {
    this.selectedSegment = 'first';
  }

  togglePowerChart() {
    if (this.isPowerChartShown()) {
      this.shownPowerChart = false;
    } else {
      this.shownPowerChart = true;
    }
  };

  isPowerChartShown() {
    return this.shownPowerChart;
  };

  toggleTemperatureChart() {
    if (this.isTemperatureChartShown()) {
      this.shownTemperatureChart = false;
    } else {
      this.shownTemperatureChart = true;
    }
  };

  isTemperatureChartShown() {
    return this.shownTemperatureChart;
  };

  itemTapped(event, item) {
    this.navCtrl.push(RoomsPage, {
      room: item
    });
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


  ngOnInit(): void {
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
    });
    loader.present();

    Observable.forkJoin( this.apicallsservice.getHouses(), this.apicallsservice.getRooms())
      .subscribe(p => {
        this.houses = p[0];
        this.house = this.houses[0];
        this.rooms = p[1];
        this.roomList = this.rooms.filter(h => h.houseId === this.houses[0]._id);


        loader.dismissAll();
      });
    const source = Observable.interval(1000);
    source.switchMap(e => Observable.forkJoin( this.apicallsservice.getHouse(this.house._id)))
      .subscribe(h => {
        this.house.powerData = h[0].powerData;
        this.house.temperature = h[0].temperature;

      });
  }
}
