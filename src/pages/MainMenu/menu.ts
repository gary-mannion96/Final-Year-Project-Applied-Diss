import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { User} from "../../Models/user";

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
      this.navCtrl.push('LoggedInPage');
    }

    googleLogin(){
    }
  }