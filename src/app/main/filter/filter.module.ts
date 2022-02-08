import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DragulaModule, DragulaService } from 'ng2-dragula';
import { FilterPageRoutingModule } from './filter-routing.module';


import { FilterPage } from './filter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FilterPageRoutingModule,
    DragulaModule,
    ReactiveFormsModule
  ],
  providers: [DragulaService],
  declarations: [FilterPage],

})
export class FilterPageModule { }

