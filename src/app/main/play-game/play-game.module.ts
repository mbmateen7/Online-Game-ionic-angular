import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlayGamePageRoutingModule } from './play-game-routing.module';
import { Keyboard } from "@ionic-native/keyboard/ngx";
import { DragulaModule, DragulaService } from 'ng2-dragula';

import { PlayGamePage } from './play-game.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlayGamePageRoutingModule,
    ReactiveFormsModule,
    DragulaModule,
  ],
  providers: [Keyboard, DragulaService],
  declarations: [PlayGamePage]
})
export class PlayGamePageModule { }
