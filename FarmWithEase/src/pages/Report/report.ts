import { Component } from '@angular/core';
import { NavController, ModalController, NavParams, AlertController } from 'ionic-angular';
import { AddReportsPage } from '../add-reports/add-reports';
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

  addReport(){

    let modal = this.modalCtrl.create(AddReportsPage);

    modal.onDidDismiss(report => {
      if(report){
        this.reports.push(report);
        this.reportingService.createReports(report);
      }
    });

    modal.present();

  }

  deleteReport(report){

    //Remove locally
      let index = this.reports.indexOf(report);

      if(index > -1){
        this.reports.splice(index, 1);
      }

    //Remove from database
    this.reportingService.deleteAis(report._id);
  }
}
