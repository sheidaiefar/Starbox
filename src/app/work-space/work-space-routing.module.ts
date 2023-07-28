import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './work-space-pages/content/home/home.component';
import { AuthGuard } from '../_core/auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard],
  },
  {
    path: 'content',
    loadChildren: () =>
      import('./work-space-pages/content/content.module').then(
        (x) => x.ContentModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorkSpaceRoutingModule {}
