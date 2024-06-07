import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home-menu/home-menu.module').then((m) => m.HomeMenuModule),
    pathMatch: 'full',
  },
  {
    path: '',
    loadChildren: () => import('./rxjs-layout-page/rxjs-layout-page.module').then((m) => m.RxjsLayoutPageModule),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
