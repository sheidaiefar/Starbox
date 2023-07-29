import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicLayoutComponent } from './public-layout/public-layout.component';
import { RouterModule } from '@angular/router';
import { MaterialsModule } from 'src/app/_core/modules/materials/materials.module';

@NgModule({
  declarations: [PublicLayoutComponent],
  imports: [CommonModule, RouterModule, MaterialsModule],
  exports: [PublicLayoutComponent],
})
export class PublicLayoutModule {}
