import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-medicine',
  templateUrl: 'medicine.html'
})
export class medicinePage {
  selectedItem: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
 
  }
 
}
