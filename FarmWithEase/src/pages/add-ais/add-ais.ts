import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the AddTagsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-ais',
  templateUrl: 'add-ais.html',
})
export class AddAisPage {

  aiTagNumber: any;
  weeksGone: any;
  inCalf: any;
 // name: any;


  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  save(): void {

    let review = {
      aiTagNumber: this.aiTagNumber,
      weeksGone: this.weeksGone,
      inCalf: this.inCalf
     // name: this.name
    };

    this.viewCtrl.dismiss(review);

  }

  close(): void {
    this.viewCtrl.dismiss();
  }

}
