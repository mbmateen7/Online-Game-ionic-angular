import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReferrelPageRoutingModule } from './referrel-routing.module';

import { ReferrelPage } from './referrel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReferrelPageRoutingModule
  ],
  declarations: [ReferrelPage]
})
export class ReferrelPageModule {}
