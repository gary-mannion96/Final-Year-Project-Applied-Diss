import { Component } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../Models/user';
import {menuPage} from '../../pages/MainMenu/menu'

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  user = {} as User;

  constructor(private afAuth: AngularFireAuth,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  async register(user: User){
    try{
    const result = await this.afAuth.auth.createUserWithEmailAndPassword(this.user.email, this.user.password);
    if(result){
      this.navCtrl.setRoot('LoginPage');
    }
  }
    catch (e){
      console.error(e);
    }
  }

  home(){
    this.navCtrl.setRoot(menuPage);
  }

}
