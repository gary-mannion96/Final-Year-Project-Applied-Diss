import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-add-reports',
  templateUrl: 'add-reports.html',
})
export class AddReportsPage {

  reportInfo: any;
  time: any = new String(new Date());
  Date : Date;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  save(): void {

    let review = {
      reportInfo: this.reportInfo,
      Date: new Date()
    };

    this.viewCtrl.dismiss(review);

  }

  close(): void {
    this.viewCtrl.dismiss();
  }

}
