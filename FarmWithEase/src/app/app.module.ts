import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Toast } from '@ionic-native/toast';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DataServiceProvider } from '../providers/data-service/data-service';

//
import { taggingPage } from '../pages/tagging/tagging';
import { FeedPage } from '../pages/feed/feed';
import { medicinePage} from '../pages/medicine/medicine';
import { AIPage } from '../pages/AI/ai';

import { AngularFireModule} from "angularfire2";
import { AngularFireAuthModule} from "angularfire2/auth";

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
import { ForgotPasswordPage } from "../pages/forgot-password/forgot-password";

//Report
import { ReportPage } from '../pages/Report/report';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    taggingPage,
    FeedPage,
    medicinePage,
    AIPage,
    menuPage,
    SearchPipe,
    AddTagsPage,
    ForgotPasswordPage,
    AddAisPage,
    ReportPage
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
    HomePage,
    taggingPage,
    FeedPage,
    medicinePage,
    AIPage,
    menuPage,
    AddTagsPage,
    ForgotPasswordPage,
    AddAisPage,
    ReportPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BarcodeScanner,
    Toast,
    DataServiceProvider,
    MedicineAddProvider,
    TaggingProvider,
    AiingProvider
  ]
})
export class AppModule {}
