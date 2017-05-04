/**
 * Created by filip on 2017-05-01.
 */
import {Component, Input, SimpleChanges, ViewChild} from '@angular/core';

import { Chart } from 'chart.js';

@Component({
  selector: 'linechart',
  template: '<canvas #lineCanvas></canvas>',
})
export class LineChart {
  @ViewChild('lineCanvas') lineCanvas;
  @Input() points;

  lineChart: any;

  ngOnChanges(changes: SimpleChanges) {
    if(this.points){
      console.log(this.points);
      this.lineChart = new Chart(this.lineCanvas.nativeElement, {

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
              data: this.points.slice(this.points.length-19, this.points.length-1),
              spanGaps: false,
            }
          ]
        }

      });
    }
  }

}
