// required to run app
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
// pages
import { taggingPage } from '../pages/tagging/tagging';
import { FeedPage } from '../pages/feed/feed';
import { medicinePage} from '../pages/medicine/medicine';
import { AIPage } from '../pages/AI/ai';
// Angular stuff
import { AngularFireModule} from "angularfire2";
import { AngularFireAuthModule} from "angularfire2/auth";
// login
import { menuPage } from '../pages/MainMenu/menu';
// firebase stuff
import { FIREBASE_CONFIG } from './app.firebase.config';
// search
import { SearchPipe } from '../pipes/search/search';
// logged in
import { LoggedInPage } from '../pages/logged-in/logged-in';
// medicine
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
import { AddReportsPage } from '../pages/add-reports/add-reports';
import { ReportingProvider } from '../providers/report/reporting';
// ionic storage
import { IonicStorageModule } from '@ionic/storage';

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
    ReportPage,
    AddReportsPage,
    LoggedInPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule,
    HttpModule,
    IonicStorageModule.forRoot()
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
    ReportPage,
    ForgotPasswordPage,
    AddAisPage,
    AddReportsPage,
    LoggedInPage
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
    AiingProvider,
    ReportingProvider
  ]
})
export class AppModule {}