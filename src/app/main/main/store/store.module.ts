import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StorePageRoutingModule } from './store-routing.module';

import { StorePage } from './store.page';
import { FilterPage } from './filter/filter.page';
import { ItemPage } from './item/item.page';
import { BundlePage } from './bundle/bundle.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StorePageRoutingModule,

  ],
  declarations: [StorePage, FilterPage, ItemPage, BundlePage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class StorePageModule { }
