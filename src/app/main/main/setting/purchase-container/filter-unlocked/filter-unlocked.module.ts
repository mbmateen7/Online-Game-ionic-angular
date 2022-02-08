import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FilterUnlockedPageRoutingModule } from './filter-unlocked-routing.module';

import { FilterUnlockedPage } from './filter-unlocked.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FilterUnlockedPageRoutingModule
  ],
  declarations: []
})
export class FilterUnlockedPageModule { }
