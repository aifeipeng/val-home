import {Component, OnInit, ViewChild} from '@angular/core';

import {NavController, NavParams,Slides} from 'ionic-angular';
import {ApiCallsservice} from "../../app/apicalls.service";
import {Room} from "../../app/room";
import {House} from "../../app/house";
import {RoomsPage} from "../rooms/rooms";
import { Chart } from 'chart.js';


const HOUSES: House[] = [{
  _id: "58c864569bbc23f8585658dd",
  name: "myhouse",
  powerData: [22],
  temperature: [23]
}];

const ROOMS: Room[] = [{
  _id: "58c868bd9bbc23f8585658df",
  houseId: "58c864569bbc23f8585658dd",
  name: "living_room",
  powerData: [22],
  temperature: [23]
},
  {
    _id: "58cf07e742a50aec795e6aaf",
    houseId: "58c864569bbc23f8585658dd",
    name: "kitchen",
    powerData: [22],
    temperature: [23]
  }];

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
  rooms = ROOMS;
  listingrooms: Room[];

  constructor(private apicallsservice: ApiCallsservice, public navCtrl: NavController, public navParams: NavParams) {
    this.listingrooms = this.rooms.filter(r => r.houseId=== this.houses[0]._id);
    this.house = this.houses[0];
    this.selectedSegment = 'first';
  }

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

  @ViewChild('barCanvas') barCanvas;
  @ViewChild('lineCanvas') lineCanvas;

  barChart: any;
  lineChart: any;

  ionViewDidLoad() {

    this.lineChart = new Chart(this.lineCanvas.nativeElement, {

      type: 'line',
      data: {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
          {
            label: "My First dataset",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [65, 59, 80, 81, 56, 55, 40],
            spanGaps: false,
          }
        ]
      }

    });


  }

  ngOnInit(): void {
    this.apicallsservice
      .getHouses()
      .subscribe(p => this.houses = p);
    /*this.apicallsservice
      .getRooms()
      .subscribe(r => this.rooms = r);*/
  }
}
