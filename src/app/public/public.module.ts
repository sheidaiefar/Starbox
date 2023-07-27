import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicHomeComponent } from './public-pages/public-home/public-home.component';
import { MaterialsModule } from '../core/modules/materials/materials.module';
import { PublicLayoutModule } from './public-layout/public-layout.module';
import { PublicRoutingModule } from './public-routing.module';


@NgModule({
  declarations: [
    PublicHomeComponent
  ],
  imports: [
    CommonModule,
    PublicLayoutModule,
    MaterialsModule,
    PublicRoutingModule
  ]
})
export class PublicModule { }
