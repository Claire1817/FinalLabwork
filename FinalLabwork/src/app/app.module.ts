import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';

import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import { Facebook } from '@ionic-native/facebook'
import { FirebaseProvider } from '../providers/firebase/firebase';
import { HttpModule } from '@angular/http';
import { AngularFireDatabaseModule } from 'angularfire2/database-deprecated';

/* 
Pierre Munin 1106420
Claire Gizard 1106363
 */

var firebaseConfig = {
  apiKey: "AIzaSyDHXPOevL35ZPZx25lrrhMTeMgpmlRv3Bs",
  authDomain: "labwork5-bfcb8.firebaseapp.com",
  databaseURL: "https://labwork5-bfcb8.firebaseio.com",
  projectId: "labwork5-bfcb8",
  storageBucket: "labwork5-bfcb8.appspot.com",
  messagingSenderId: "625626025533"
};

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,    
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    Facebook,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirebaseProvider
  ]
})
export class AppModule {}
