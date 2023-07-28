import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialsModule } from 'src/app/_core/modules/materials/materials.module';
import { RouterModule } from '@angular/router';
import { AccountLayoutComponent } from './account-layout/account-layout.component';

@NgModule({
  declarations: [AccountLayoutComponent],
  imports: [CommonModule, MaterialsModule, RouterModule],
  exports: [AccountLayoutComponent],
})
export class AccountLayoutModule {}
