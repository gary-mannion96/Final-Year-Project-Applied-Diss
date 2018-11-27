import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { taggingPage } from '../pages/tagging/tagging';
import { FeedPage } from '../pages/feed/feed';
import { medicinePage} from '../pages/medicine/medicine';
import { AIPage } from '../pages/AI/ai';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { menuPage } from '../pages/MainMenu/menu';

@NgModule({
  declarations: [
    MyApp,
    taggingPage,
    FeedPage,
    medicinePage,
    AIPage,
    menuPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    taggingPage,
    FeedPage,
    medicinePage,
    AIPage,
    menuPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
