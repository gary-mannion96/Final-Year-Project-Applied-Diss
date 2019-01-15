import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AngularFireAuth} from 'angularfire2/auth';



@IonicPage()
@Component({
  selector: 'page-logged-in',
  templateUrl: 'logged-in.html',
})
export class LoggedInPage {

  constructor(private afAuth: AngularFireAuth, private toast: ToastController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.afAuth.authState.subscribe(data =>{
      if(data && data.email && data.uid){      
        this.toast.create({
        message: 'Welcome to farm with ease, ${data.email}',
        duration: 3000
      }).present();
      }
      else{
        this.toast.create({
          message: 'No user found',
          duration: 3000
        }).present();
      }
    })
  }
  
}