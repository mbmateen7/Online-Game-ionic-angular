import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SendCodePageRoutingModule } from './send-code-routing.module';

import { SendCodePage } from './send-code.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SendCodePageRoutingModule
  ],
  declarations: [SendCodePage]
})
export class SendCodePageModule {}
