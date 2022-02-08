import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddContactPageRoutingModule } from './add-contact-routing.module';

import { AddContactPage } from './add-contact.page';
import { Contacts } from '@ionic-native/contacts/ngx';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddContactPageRoutingModule,
  ],
  providers: [Contacts],
  declarations: [AddContactPage]
})
export class AddContactPageModule {}
