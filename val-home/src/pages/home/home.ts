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
  shownGroup = null;

  constructor(public loadingCtrl: LoadingController, private apicallsservice: ApiCallsservice, public navCtrl: NavController, public navParams: NavParams) {
    this.selectedSegment = 'first';
  }

  toggleGroup(group) {
    if (this.isGroupShown(group)) {
      this.shownGroup = null;
    } else {
      this.shownGroup = group;
    }
  };

  isGroupShown(group) {
    return this.shownGroup === group;
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

  @ViewChild('barCanvas') barCanvas;
  @ViewChild('lineCanvas') powerCanvas;
  @ViewChild('lineCanvas') temperatureCanvas;

  powerChart: any;
  temperatureChart: any;

  ionViewDidLoad() {

   /* this.lineChart = new Chart(this.lineCanvas.nativeElement, {

      type: 'line',
      data: {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
          {
            label: "My First dataset",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(220,0,0,1)",
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
            data: this.house.powerData,
            spanGaps: false,
          }
        ]
      }

    });*/


  }



  ngOnInit(): void {
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
    });
    loader.present();
    const source = Observable.interval(1000);
//    source.switchMap(e => Observable.forkJoin( this.apicallsservice.getHouses(), this.apicallsservice.getRooms()))
    Observable.forkJoin( this.apicallsservice.getHouses(), this.apicallsservice.getRooms())
      .subscribe(p => {
        this.houses = p[0];
        this.house = this.houses[0];
        this.rooms = p[1];
        this.roomList = this.rooms.filter(h => h.houseId === this.houses[0]._id);

        this.powerChart = new Chart(this.powerCanvas.nativeElement, {

          type: 'line',
          data: {
            labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18"],
            datasets: [
              {
                label: "Power Data",
                fill: false,
                lineTension: 0.1,
                backgroundColor: "rgba(110,0,0,0.4)",
                borderColor: "rgba(1100,0,0,1)",
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: "rgba(110,0,0,1)",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "rgba(220,0,0,1)",
                pointHoverBorderColor: "rgba(220,0,0,1)",
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: this.house.powerData.slice(this.house.powerData.length-19, this.house.powerData.length-1),
                spanGaps: false,
              }
            ]
          }

        });



        loader.dismissAll();
      });
  }
}
