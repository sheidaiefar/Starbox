import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { NewsComponent } from './news/news.component';
import { MaterialsModule } from 'src/app/_core/modules/materials/materials.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: 'news',
    component: NewsComponent
  },
];


@NgModule({
  declarations: [
    HomeComponent,
    NewsComponent
  ],
  imports: [
    CommonModule,
    MaterialsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    HomeComponent
  ],
})
export class ContentModule { }
