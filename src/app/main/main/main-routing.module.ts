import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainPage } from './main.page';

const routes: Routes = [
  {
    path: '',
    component: MainPage,
    children: [
      {
        path: 'game',
        loadChildren: () => import('./game/game.module').then( m => m.GamePageModule)
      },
      {
        path: 'freind',
        loadChildren: () => import('./freind/freind.module').then( m => m.FreindPageModule)
      },
      {
        path: 'store',
        loadChildren: () => import('./store/store.module').then( m => m.StorePageModule)
      },
      {
        path: 'setting',
        loadChildren: () => import('./setting/setting.module').then( m => m.SettingPageModule)
      },
      {
        path: '',
        redirectTo: '/main/game',
        pathMatch: 'full'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainPageRoutingModule {}
