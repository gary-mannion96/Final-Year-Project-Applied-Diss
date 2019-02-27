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
  selector: 'page-add-tags',
  templateUrl: 'add-tags.html',
})
export class AddTagsPage {

  tagNumber: any;



  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  save(): void {

    let review = {
      tagNumber: this.tagNumber,
    };

    this.viewCtrl.dismiss(review);

  }

  close(): void {
    this.viewCtrl.dismiss();
  }

}
