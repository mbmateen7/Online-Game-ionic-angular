import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PurchaseContainerPage } from './purchase-container.page';

const routes: Routes = [
  {
    path: '',
    component: PurchaseContainerPage
  },
  {
    path: 'filter-unlocked',
    loadChildren: () => import('./filter-unlocked/filter-unlocked.module').then( m => m.FilterUnlockedPageModule)
  },
  {
    path: 'items',
    loadChildren: () => import('./items/items.module').then( m => m.ItemsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PurchaseContainerPageRoutingModule {}
