import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

import { MedicineAddProvider } from '../../providers/medicine-add/medicine-add';


@Component({
  selector: 'page-medicine',
  templateUrl: 'medicine.html'
})
export class medicinePage {
  medicines: any;

  constructor(public medicineService: MedicineAddProvider,public alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams) {
 
  }
  
  ionViewLoaded(){
    this.medicineService.getMedicine().then((data) => {
    this.medicines = data;
    });
  }

  createMedicine(){

    let prompt = this.alertCtrl.create({
      title: 'Medicine',
      inputs: [
        {
          name: 'name',
          placeholder: "Medicine Name"
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

  deleteMedicine(medicine){
    this.medicineService.deleteMedicine(medicine);
  }
 
}
