import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PurchaseContainerPageRoutingModule } from './purchase-container-routing.module';

import { PurchaseContainerPage } from './purchase-container.page';
import { FilterUnlockedPage } from './filter-unlocked/filter-unlocked.page';
import { ItemsPage } from './items/items.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PurchaseContainerPageRoutingModule
  ],
  declarations: [PurchaseContainerPage, FilterUnlockedPage, ItemsPage]
})
export class PurchaseContainerPageModule { }
