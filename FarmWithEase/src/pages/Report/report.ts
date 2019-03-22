import { Component } from '@angular/core';
import { NavController, ModalController, NavParams, AlertController } from 'ionic-angular';
import { ReportingProvider } from '../../providers/report/reporting';

@Component({
  selector: 'page-Report',
  templateUrl: 'report.html'
})
export class ReportPage {
  reports: any [] = [];

  terms: any='';

  constructor(public navCtrl: NavController,public alertCtrl: AlertController,public navParams: NavParams, public reportingService: ReportingProvider, public modalCtrl: ModalController) {

  }
  ionViewDidLoad(){

    this.reportingService.getReports().then((data) => {
      console.log(data);
      this.reports = data;
    });

  }



}
