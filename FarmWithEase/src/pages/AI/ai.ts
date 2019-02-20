import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-ai',
  templateUrl: 'ai.html'
})
export class AIPage {
  tab1 = 'CowPage';
  tab2 = 'BullPage';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
}

  ionViewDidLoad(){
    console.log('ionViewDidLoad AIPage');
  }
}