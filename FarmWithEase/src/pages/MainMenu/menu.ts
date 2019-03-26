import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { User} from "../../Models/user";
import { ForgotPasswordPage } from "../../pages/forgot-password/forgot-password";
import { LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { AngularFireAuth } from 'angularfire2/auth';
import { LoggedInPage } from '../logged-in/logged-in';

@Component({
    selector: 'page-menu',
    templateUrl: 'menu.html'
  })
  export class menuPage {

    user = {} as User;
    email: any;

    passwordType: string = 'password';
    passwordIcon: string = 'eye-off';
  
    constructor(private afAuth: AngularFireAuth, private toast: ToastController, private storage: Storage, public loadingController: LoadingController, public navCtrl: NavController) {
  
    }

    hideShowPassword() {
      this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
      this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
    }

    async login(user: User){

      let loading = this.loadingController.create({content : "Logging in, please wait..."});
      loading.present();
  
      try{    
        // Authenticate the user with firebase and await result object.     
        const result = await this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
        if(result){
          // Store email in local storage
          this.storage.set('email', user.email);
          this.toast.create({
           message: "Welcome To FarmWithEase App " + user.email,
           duration: 3000,
           cssClass: "toast"    
         }).present();
         // Navigate to HomePage
          this.navCtrl.setRoot(LoggedInPage);
          loading.dismissAll();
        }     
      }
      catch(e){ 
        loading.dismiss(); 
        this.toast.create({
          message: "Invalid Login - Please Try Again",
          duration: 3000,
          cssClass: "toast" 
        }).present();
      }  
    }
  
    register(){
      this.navCtrl.push('RegisterPage');
    }
    
    // googleLogin(){
    // }

    resetPassword(){
      this.navCtrl.push(ForgotPasswordPage);
    }
  }