import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SendGamePage } from './send-game.page';

const routes: Routes = [
  {
    path: '',
    component: SendGamePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SendGamePageRoutingModule {}
