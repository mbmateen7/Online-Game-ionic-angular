import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FilterUnlockedPage } from './filter-unlocked.page';

const routes: Routes = [
  {
    path: '',
    component: FilterUnlockedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FilterUnlockedPageRoutingModule {}
