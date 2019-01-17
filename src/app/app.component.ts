import { Component, ViewChild } from '@angular/core';
import { App, Nav, Platform, ToastController, MenuController  } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireAuth} from 'angularfire2/auth';

import { taggingPage } from '../pages/tagging/tagging';
import { FeedPage } from '../pages/feed/feed';
import { medicinePage } from '../pages/medicine/medicine';
import { AIPage } from '../pages/AI/ai';
import { menuPage } from '../pages/MainMenu/menu';
import { User } from '../Models/user';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  user = {} as User;

  // First page on app start up
  rootPage: any = menuPage;
 

  pages: Array<{title: string, component: any, icon: string}>;

  constructor(public menuCtrl: MenuController, public app: App, private afAuth: AngularFireAuth, private toast: ToastController, public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Tagging', component: taggingPage, icon:'md-pricetag' },
      { title: 'Feed', component: FeedPage, icon:'md-calculator' },
      { title: 'Medicine', component: medicinePage, icon:'md-medical'},
      { title: 'AI', component: AIPage, icon:'md-medkit'}
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  logoutClicked(user: User){
    console.log("logout");
    //this.authService.close();
    this.menuCtrl.close();
    var nav = this.app.getRootNav();
    nav.setRoot(menuPage);
  }
}
