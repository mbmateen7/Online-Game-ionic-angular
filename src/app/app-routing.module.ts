import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './guards/auth-guard.service';
import { HomeGuardServiceService } from './guards/home-guard-service.service';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule),
    canActivate: [HomeGuardServiceService]
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadChildren: () => import('./auth/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'sign-up',
    loadChildren: () => import('./auth/sign-up/sign-up.module').then(m => m.SignUpPageModule)
  },
  {
    path: 'main',
    loadChildren: () => import('./main/main/main.module').then(m => m.MainPageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'contactlist',
    loadChildren: () => import('./main/contactlist/contactlist.module').then(m => m.ContactlistPageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'add-contact',
    loadChildren: () => import('./main/add-contact/add-contact.module').then(m => m.AddContactPageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'reset',
    loadChildren: () => import('./auth/reset/reset.module').then(m => m.ResetPageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'play-game',
    loadChildren: () => import('./main/play-game/play-game.module').then(m => m.PlayGamePageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'send-code',
    loadChildren: () => import('./auth/send-code/send-code.module').then(m => m.SendCodePageModule)
  },
  {
    path: 'update-password',
    loadChildren: () => import('./auth/update-password/update-password.module').then(m => m.UpdatePasswordPageModule)
  },
  {
    path: 'filter',
    loadChildren: () => import('./main/filter/filter.module').then(m => m.FilterPageModule)
  },
  {
    path: 'update-profile',
    loadChildren: () => import('./auth/update-profile/update-profile.module').then(m => m.UpdateProfilePageModule)
  },
  {
    path: 'send-game',
    loadChildren: () => import('./main/send-game/send-game.module').then(m => m.SendGamePageModule)
  },
  {
    path: 'main/store/filter/filter-list',
    loadChildren: () => import('./main/main/store/filter/filter-list/filter-list.module').then(m => m.FilterListPageModule)
  },
  {
    path: '**',
    component: NotFoundComponent
  },




];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
