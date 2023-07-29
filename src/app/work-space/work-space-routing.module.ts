import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './work-space-pages/content/home/home.component';
import { RoleGuardService } from '../_core/auth/role-gaurd.service';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'admin',
    canActivate: [RoleGuardService],
    data: {
      expectedRole: 'admin'
    },
    loadChildren: () =>
      import('./work-space-pages/admin/admin.module').then(
        (x) => x.AdminModule
      ),
  },
  {
    path: 'content',
    loadChildren: () =>
      import('./work-space-pages/content/content.module').then(
        (x) => x.ContentModule
      ),
  },
  {
    path: 'collection',
    loadChildren: () =>
      import('./work-space-pages/collection/collection.module').then(
        (x) => x.CollectionModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorkSpaceRoutingModule {}
