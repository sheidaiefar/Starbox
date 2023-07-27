import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccessLayoutComponent } from './access-layout/access-layout.component';
import { MaterialsModule } from 'src/app/core/modules/materials/materials.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AccessLayoutComponent
  ],
  imports: [
    CommonModule,
    MaterialsModule,
    RouterModule
  ]
})
export class AccessLayoutModule { }
