import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicLayoutComponent } from './public/public-layout/public-layout/public-layout.component';
import { PublicHomeComponent } from './public/public-pages/public-home/public-home.component';
import { WorkSpaceLayoutComponent } from './work-space/work-space-layout/work-space-layout/work-space-layout.component';
import { AccessLayoutComponent } from './access/access-layout/access-layout/access-layout.component';

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
    path: 'access',
    component: AccessLayoutComponent,
    loadChildren: () =>
      import('./access/access.module').then((x) => x.AccessModule),
  },
  {
    path: 'work-space',
    component: WorkSpaceLayoutComponent,
    loadChildren: () =>
      import('./work-space/work-space.module').then((x) => x.WorkSpaceModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
