import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollectionListComponent } from './collection-list/collection-list.component';
import { CollectionEditComponent } from './collection-edit/collection-edit.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialsModule } from '../../../_core/modules/materials/materials.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: CollectionListComponent,
  },
  {
    path: 'add',
    component: CollectionEditComponent,
  },
  {
    path: 'edit/:id',
    component: CollectionEditComponent,
  },
];

@NgModule({
  declarations: [CollectionListComponent, CollectionEditComponent],
  imports: [
    CommonModule,
    MaterialsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
})
export class CollectionModule {}
