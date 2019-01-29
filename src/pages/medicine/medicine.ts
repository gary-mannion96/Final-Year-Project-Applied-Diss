import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import PouchDB from 'pouchdb';

@Component({
  selector: 'page-medicine',
  templateUrl: 'medicine.html'
})
export class medicinePage {
  private medicines;

  private db;

  constructor(public alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams) {
 
  }

  ionViewDidEnter(){
   this.refresh();
  }

  refresh(){
    this.medicines = [];
    this.medicines.push({
      name: 'Aminoral',
      id: '1234567',
      dosage: '10ml'
    });
  }

  createNew(){
    let prompt = this.alertCtrl.create({
      title: 'Enter Medicine Details',
        // all the details to input into user trips
        inputs: [
            {
                name: 'name',
                placeholder: "Medicine Name"
            }
        ],
         // buttons at the end of the form (Cancel, Create)
         buttons: [
          {
              text: "Cancel"
          }, // end Cancel
          {
              text: "Create Medicine"
            
          } // end create
      ] // end buttons
    });

    prompt.present();
  }
 
}
