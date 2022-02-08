import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FreindPageRoutingModule } from './freind-routing.module';

import { FreindPage } from './freind.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FreindPageRoutingModule
  ],
  declarations: [FreindPage]
})
export class FreindPageModule {}
