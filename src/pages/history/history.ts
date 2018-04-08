import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { PeronsalPage } from '../peronsal/peronsal';
import { SharedPage } from '../shared/shared';
import { reciept } from './reciept';

/**
 * Generated class for the HistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-history',
  templateUrl: 'history.html',
})
export class HistoryPage {
  historyToggle: any;
  reciepts: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.historyToggle = 'personal';

    let date1 = new Date(2018, 7, 3);
    let date2 = new Date(2018, 7, 5);

    let reciept1 = new reciept(date1.toISOString(), 'target', 14.41);
    let reciept2 = new reciept(date2.toISOString(), 'target', 13.43);
    this.reciepts = [];
    this.reciepts.push(reciept1);
    this.reciepts.push(reciept2);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HistoryPage');
  }

  parseInput (currDate) {
    var dateParts = currDate.split("-");
			var date = new Date(dateParts[0], dateParts[1] - 1, dateParts[2]);
			return date;
  }

  filterByCal() {
    alert('filter by calander');
    
  }

  filterByStore() {
    alert('filter by Store');
  }

  filterByText() {
    alert('filter by Text');
  }

  segmentChanged () {}
}
