import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReferrelPage } from './referrel.page';

const routes: Routes = [
  {
    path: '',
    component: ReferrelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReferrelPageRoutingModule {}
