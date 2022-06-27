import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { LoginPage } from './login.page';
import { SignInWithApple } from '@awesome-cordova-plugins/sign-in-with-apple/ngx';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        LoginPageRoutingModule,
        ReactiveFormsModule,
    ],
    providers: [GooglePlus, SignInWithApple],
    declarations: [LoginPage]
})
export class LoginPageModule { }
