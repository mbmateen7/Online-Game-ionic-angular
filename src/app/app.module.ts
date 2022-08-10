import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


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
import { SocialSharing } from '@awesome-cordova-plugins/social-sharing/ngx';
import { Facebook, FacebookLoginResponse } from '@awesome-cordova-plugins/facebook/ngx';
import { InterceptorService } from './service/interceptor.service';
import { LoaderComponent } from './components/loader/loader.component';
import { StorageService } from './service/storage.service';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';

@NgModule({
    declarations: [AppComponent, DialogComponent, LoaderComponent],
    entryComponents: [],
    imports: [
        provideFirebaseApp(() => initializeApp(firebaseConfig)),
        provideFirestore(() => getFirestore()),
        BrowserModule,
        HttpClientModule,
        IonicModule.forRoot(),
        AppRoutingModule,
        ReactiveFormsModule
    ],
    providers: [
        StorageService,
        NativeStorage,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: InterceptorService,
            multi: true,
        },
        SpinnerDialog,
        GooglePlus,
        SocialSharing,
        { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
        InAppPurchase2,
        Facebook
    ],
    bootstrap: [AppComponent],

})
export class AppModule { }
