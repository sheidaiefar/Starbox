import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicLayoutComponent } from './public/public-layout/public-layout/public-layout.component';
import { PublicHomeComponent } from './public/public-pages/public-home/public-home.component';
import { WorkSpaceLayoutComponent } from './work-space/work-space-layout/work-space-layout/work-space-layout.component';
import { AccountLayoutComponent } from './account/account-layout/account-layout/account-layout.component';
import { AuthGuard } from './_core/auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: PublicLayoutComponent,
    children: [
      {
        path: '',
        component: PublicHomeComponent,
      },
    ],
    pathMatch: 'full',
  },
  {
    path: 'public',
    component: PublicLayoutComponent,
    loadChildren: () =>
      import('./public/public.module').then((x) => x.PublicModule),
  },
  {
    path: 'account',
    component: AccountLayoutComponent,
    loadChildren: () =>
      import('./account/account.module').then((x) => x.AccountModule),
  },
  {
    path: 'work-space',
    canActivate: [AuthGuard],
    component: WorkSpaceLayoutComponent,
    loadChildren: () =>
      import('./work-space/work-space.module').then((x) => x.WorkSpaceModule),
  },

  // otherwise redirect to home
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
