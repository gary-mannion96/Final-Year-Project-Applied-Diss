import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { taggingPage } from '../pages/tagging/tagging';
import { FeedPage } from '../pages/feed/feed';
import { medicinePage } from '../pages/medicine/medicine';
import { AIPage } from '../pages/AI/ai';
import { menuPage } from '../pages/MainMenu/menu';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // First page on app start up
  rootPage: any = menuPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
    //  { title: 'Home', component: menuPage},
      { title: 'Tagging', component: taggingPage },
      { title: 'Feed', component: FeedPage },
      { title: 'Medicine', component: medicinePage},
      { title: 'AI', component: AIPage}
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
}
