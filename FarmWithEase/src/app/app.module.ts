import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { taggingPage } from '../pages/tagging/tagging';
import { FeedPage } from '../pages/feed/feed';
import { medicinePage} from '../pages/medicine/medicine';
import { AIPage } from '../pages/AI/ai';

import { AngularFireModule} from "angularfire2";
import { AngularFireAuthModule} from "angularfire2/auth";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { menuPage } from '../pages/MainMenu/menu';
import { FIREBASE_CONFIG } from './app.firebase.config';

import { SearchPipe } from '../pipes/search/search';


import { MedicineAddProvider } from '../providers/medicine-add/medicine-add';
//Tagging
import { TaggingProvider } from '../providers/tagging/tagging';
import { AddTagsPage } from '../pages/add-tags/add-tags';
//AI
import { AiingProvider } from '../providers/ai/aiing';
import { AddAisPage } from '../pages/add-ais/add-ais';


@NgModule({
  declarations: [
    MyApp,
    taggingPage,
    FeedPage,
    medicinePage,
    AIPage,
    menuPage,
    SearchPipe,
    AddTagsPage,
    AddAisPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule,
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    taggingPage,
    FeedPage,
    medicinePage,
    AIPage,
    menuPage,
    AddTagsPage,
    AddAisPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},

    MedicineAddProvider,
    TaggingProvider,
    AiingProvider
  ]
})
export class AppModule {}
