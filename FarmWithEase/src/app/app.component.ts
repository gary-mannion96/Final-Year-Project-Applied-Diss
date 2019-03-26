import { RegisterPage } from './../pages/register/register';
import { Component, ViewChild } from '@angular/core';
import { App, Nav, Platform, MenuController, ToastController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireAuth } from 'angularfire2/auth';
import { Storage } from '@ionic/storage';

import { taggingPage } from '../pages/tagging/tagging';
import { FeedPage } from '../pages/feed/feed';
import { medicinePage } from '../pages/medicine/medicine';
import { AIPage } from '../pages/AI/ai';
import { menuPage } from '../pages/MainMenu/menu';
import { User } from '../Models/user';
import { HomePage } from '../pages/home/home';
import { ReportPage } from '../pages/Report/report';
import { LoggedInPage } from './../pages/logged-in/logged-in';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  user = {} as User;

  // First page on app start up
  rootPage: any;
  showAccount : any = false;
  email: string = '';
  //googleUser: any;
  counter = 0;


  pages: Array<{title: string, component: any, icon: string}>;
  loggedInPages: Array<{title: string, component: any, icon: string}>;

  constructor(private toast: ToastController, private storage: Storage, private afAuth: AngularFireAuth, public menu: MenuController, public app: App,  public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // Check to see if logged in with firebase
    this.afAuth.authState.subscribe(data => {
      if(data && data.uid){
        this.storage.get('email').then((val) => {
          this.email = val;
          this.rootPage = menuPage;
        });
        this.showAccount = true;
      }
      else{
        this.rootPage = menuPage;
      }       
    },error => {
      this.rootPage = menuPage;
    });

        // used for an example of ngFor and navigation
        this.pages = [
        //   { title: 'Tagging', component: taggingPage, icon:'md-pricetag' },
        //   { title: 'Feed', component: FeedPage, icon:'md-calculator' },
        //   { title: 'Medicine', component: medicinePage, icon:'md-medical'},
        //   { title: 'AI', component: AIPage, icon:'md-medkit'},
        //   { title: 'Medicine Scanner', component: HomePage, icon:'md-medkit'},
        //   { title: 'Report', component: ReportPage, icon:'md-medkit'}
         ];
        this.loggedInPages = [
          { title: 'Tagging', component: taggingPage, icon:'md-pricetag' },
          { title: 'Feed', component: FeedPage, icon:'md-calculator' },
          { title: 'Medicine', component: medicinePage, icon:'md-medical'},
          { title: 'AI', component: AIPage, icon:'md-medkit'},
          { title: 'Medicine Scanner', component: HomePage, icon:'md-medkit'},
          { title: 'Report', component: ReportPage, icon:'md-medkit'}
        ];
      }

      initializeApp() {
        this.platform.ready().then(() => {
          // Okay, so the platform is ready and our plugins are available.
          // Here you can do any higher level native things you might need.
          this.statusBar.styleDefault();
          this.splashScreen.hide();
    
          /** Close App if back button is pressed twice within 3 seconds
           *  Adapted: https://pointdeveloper.com/ionic-double-tap-back-button-exit/
           */
          this.platform.registerBackButtonAction(() => {
            if(this.menu.isOpen()){
               this.menu.close()
            } 
            else if(this.nav.canGoBack()){
              this.nav.pop();
            }else{
              if(this.counter == 0){
                this.counter++;
                this.toast.create({
                  message: "Press Back Again To Exit App",
                  duration: 3000,
                  cssClass: "toast"       
                }).present();
                setTimeout(() => { this.counter = 0 }, 3000)
              }
              else{
                this.platform.exitApp();
              }
            }
          });
        });
      }
    
      openPage(page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
      }
    
      // logout function
      logout(){
        this.afAuth.auth.signOut();
        this.showAccount = false;
        
    
        this.storage.get('email').then((val) => {
          this.email = val;
    
          this.toast.create({
            message: "Successfully Logged Out " + this.email,
            duration: 3000     
          }).present();
        });
    
        this.nav.setRoot(menuPage);
      }
    
      login(){
        this.nav.push(menuPage);
      }
    
      register(){
        this.nav.push(RegisterPage);
      }
    }