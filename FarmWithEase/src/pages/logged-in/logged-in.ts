import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

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

  displayName: any;
  email: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
  }

  ionViewWillLoad(){
    // Load email, display name and photo url from local storage
    this.storage.get('email').then((val) => {
      this.email = val;
    });
    this.storage.get('displayName').then((val) => {
      this.displayName = val;      
    });
  }

}