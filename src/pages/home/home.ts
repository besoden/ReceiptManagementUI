import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HistoryPage } from '../history/history';
import { Chart } from 'chart.js';

import { reciept } from '../history/reciept';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('doughnutCanvas') doughnutCanvas;
  doughnutChart: Chart;
  pieChartdataArray=[];
  pielabelsArray=[];
  // reciepts: any;

  constructor(public navCtrl: NavController ) {

    // let date1 = new Date(2018, 7, 3);
    // let date2 = new Date(2018, 7, 5);

    // let reciept1 = new reciept(date1.toISOString(), 'target', 14.41);
    // let reciept2 = new reciept(date2.toISOString(), 'target', 13.43);
    // this.reciepts = [];
    // this.reciepts.push(reciept1);
    // this.reciepts.push(reciept2);
  }

  createChart () {
    // var myDoughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
    //   type: 'doughnut',
    //   data: [10, 20, 30],//this.reciepts,
    //   options: { responsive: true}
    // });

    var config = {
      type: 'doughnut',
      data: {
          datasets: [{
              data: this.pieChartdataArray,
          }],
          labels: this.pielabelsArray,
      },
      options: {
          responsive: true,
          legend: {
              position: 'top',
          },
          tooltips: {
              callbacks: {
                  // label: function(tooltipItem, data) {
                  //     var currentValue = that.pieTooltipsArray[tooltipItem.index];
                  //     return currentValue;
                  // }
              }
          }
      }
  };
  this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, config);
  }
  ionViewDidLoad () {
    this.chartTest();
  }


  chartTest() {
    new Chart(this.doughnutCanvas.nativeElement, {
      type: 'pie',
      data: {
        labels: ["Utilies", "Store", "Europe", "Restraurants", "Misc."],
        datasets: [{
          label: "Population (millions)",
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
          data: [2478,5267,734,784,433]
        }]
      },
      options: {
        title: {
          display: true,
          text: 'Break down'
        }
      }
  });
  }



  viewHistory () {
    // this.navCtrl.setRoot(HistoryPage);
    this.navCtrl.push(HistoryPage);
    
  }

}
