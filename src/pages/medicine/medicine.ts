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
  
  ionViewDidLoad(){

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
          placeholder: 'Name'
        },
        {
          name: 'date',
          placeholder: 'Date used'
        }
      ],
      buttons: [
        {
          text: 'Cancel'
        },
        {
          text: 'Save',
          handler: data => {
            this.medicineService.createMedicine({name: data.name, date: data.date});
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
