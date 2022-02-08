import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FilterPage } from './filter.page';

const routes: Routes = [
  {
    path: '',
    component: FilterPage,
    children: [
      {
        path: 'filter-list',
        loadChildren: () => import('./filter-list/filter-list.module').then(m => m.FilterListPageModule)
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FilterPageRoutingModule { }
