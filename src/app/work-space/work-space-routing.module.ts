import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './work-space-pages/content/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
    // canActivate: [AuthGuard],
  },
  // {
  //   path: 'admin',
  //   component: AdminComponent,
  //   canActivate: [RoleGuard],
  //   data: {
  //     expectedRole: 'admin'
  //   }
  // },
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
