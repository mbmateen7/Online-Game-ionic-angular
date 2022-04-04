import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SettingPage } from './setting.page';

const routes: Routes = [
  {
    path: '',
    component: SettingPage
  },
  {
    path: 'purchase-container',
    loadChildren: () => import('./purchase-container/purchase-container.module').then(m => m.PurchaseContainerPageModule)
  },
  {
    path: 'referrel/:code',
    loadChildren: () => import('./referrel/referrel.module').then(m => m.ReferrelPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingPageRoutingModule { }
