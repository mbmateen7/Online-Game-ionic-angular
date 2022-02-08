import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SendGamePageRoutingModule } from './send-game-routing.module';

import { SendGamePage } from './send-game.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SendGamePageRoutingModule
  ],
  declarations: [SendGamePage]
})
export class SendGamePageModule {}
