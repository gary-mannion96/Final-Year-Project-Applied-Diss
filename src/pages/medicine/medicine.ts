import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

import { MedicineAddProvider } from '../../providers/medicine-add/medicine-add';


@Component({
  selector: 'page-medicine',
  templateUrl: 'medicine.html'
})
export class medicinePage {
  medicine: any;

  constructor(public medicineService: MedicineAddProvider,public alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams) {
 
  }
  
  ionViewLoaded(){
    this.medicineService.getMedicine().then((data) => {
    this.medicine = data;
    });
    }

  createMedicine(){

    let prompt = this.alertCtrl.create({
      title: 'Medicine',
      message: '',
      inputs: [
        {
          name: 'title'
        }
      ],
      buttons: [
        {
          text: 'Cancel'
        },
        {
          text: 'Save',
          handler: data => {
            this.medicineService.createMedicine({name: data.name});
          }
        }
      ]
    });

    prompt.present();

  }
 
}
