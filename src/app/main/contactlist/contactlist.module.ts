import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContactlistPageRoutingModule } from './contactlist-routing.module';

import { ContactlistPage } from './contactlist.page';
import { Contacts } from '@ionic-native/contacts/ngx';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContactlistPageRoutingModule,
  ],
  declarations: [ContactlistPage],
  providers: [Contacts]

})
export class ContactlistPageModule {}
