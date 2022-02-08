import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FreindPage } from './freind.page';

const routes: Routes = [
  {
    path: '',
    component: FreindPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FreindPageRoutingModule {}
