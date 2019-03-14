import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { User} from "../../Models/user";
import { ForgotPasswordPage } from "../../pages/forgot-password/forgot-password";

@Component({
    selector: 'page-menu',
    templateUrl: 'menu.html'
  })
  export class menuPage {

    user = {} as User;
  
    constructor(public navCtrl: NavController) {
  
    }
  
    register(){
      this.navCtrl.push('RegisterPage');
    }
    login(user){
      this.navCtrl.setRoot('LoggedInPage');
    }

    // googleLogin(){
    // }

    resetPassword(){
      this.navCtrl.push(ForgotPasswordPage);
    }
  }