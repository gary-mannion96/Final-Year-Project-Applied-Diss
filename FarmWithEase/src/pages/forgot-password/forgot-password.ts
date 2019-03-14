import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { User } from '../../Models/user';
import { menuPage } from '../../pages/MainMenu/menu';
import { AngularFireAuth } from 'angularfire2/auth';

/**
 * Generated class for the ForgotPasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-forgot-password',
  templateUrl: 'forgot-password.html',
})
export class ForgotPasswordPage {
  user = {} as User;

  constructor(public afAuth: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams, private toastCtrl: ToastController) {
  }

  resetPassword(user){
    return this.afAuth.auth.sendPasswordResetEmail(user.email).then(suc => {
      let toast = this.toastCtrl.create({
        message: 'Success - Check your email for instructions.',
        duration: 3000,
        position: 'bottom',
        cssClass: "toast"
      });
      toast.present();
      this.navCtrl.push(menuPage);
    }).catch(err => {
      let toast = this.toastCtrl.create({
        message: 'Password Reset Failed, Please try again',
        duration: 3000,
        position: 'bottom',
        cssClass: "toast"
      });
      toast.present();
    })
  }
}