import { Component } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { IonicPage, NavController, NavParams, ToastController,LoadingController } from 'ionic-angular';
import { User } from '../../Models/user';
import {menuPage} from '../../pages/MainMenu/menu';
import { Validators, FormBuilder, FormGroup} from '@angular/forms';
import { matchingPasswords, emailValidator } from '../../validators/validators';


@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  user = {} as User;
  validations_form: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, private afAuth: AngularFireAuth, 
    public formBuilder: FormBuilder, private loadingController: LoadingController, private toast: ToastController) {
      
      this.validations_form = formBuilder.group({
        email: ['', Validators.compose([Validators.required,  emailValidator])],
        password: ['', Validators.required],
        confirmPassword: ['', Validators.required],
      }, {validator: matchingPasswords('password', 'confirmPassword')})
  
    }

async onSubmit(value: Object) {
  let loading = this.loadingController.create({content : "Registering, please wait..."});
  loading.present();    
  try{
    //Result object of creating a user with an email and password
    const result = await this.afAuth.auth.createUserWithEmailAndPassword(value['email'], value['password']);
    this.toast.create({
      message: "Successfully Registered - Please Log In",
      duration: 3000,
      cssClass: "toast"   
    }).present();
    this.navCtrl.push(menuPage);
    loading.dismissAll();
  }
  catch(e){
    console.error("Error Registering: " + e);
    loading.dismiss();
    this.toast.create({
      message: "Error Registering User - Please Try Again",
      duration: 3000,
      cssClass: "toast"   
    }).present();
    this.validations_form.reset();
  }
}
}
