import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
/*
make some updates here later for when user has logged in
give some options for what to do or some instructions
*/
@IonicPage()
@Component({
  selector: 'page-logged-in',
  templateUrl: 'logged-in.html',
})
export class LoggedInPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

}