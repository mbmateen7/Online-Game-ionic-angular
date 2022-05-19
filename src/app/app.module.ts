import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { firebaseConfig } from '../../firebase.config';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { SpinnerDialog } from '@ionic-native/spinner-dialog/ngx';
import { InAppPurchase2 } from '@ionic-native/in-app-purchase-2/ngx';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { DialogComponent } from './dialog/dialog.component';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { Facebook, FacebookLoginResponse } from '@awesome-cordova-plugins/facebook/ngx';

@NgModule({
  declarations: [AppComponent, DialogComponent],
  entryComponents: [],
  imports: [
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore()),
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [
    SpinnerDialog,
    GooglePlus,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    InAppPurchase2,
    Facebook
  ],
  bootstrap: [AppComponent],

})
export class AppModule { }
