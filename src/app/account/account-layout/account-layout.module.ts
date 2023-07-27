import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialsModule } from 'src/app/core/modules/materials/materials.module';
import { RouterModule } from '@angular/router';
import { AccountLayoutComponent } from './account-layout/account-layout.component';



@NgModule({
  declarations: [
    AccountLayoutComponent
  ],
  imports: [
    CommonModule,
    MaterialsModule,
    RouterModule
  ]
})
export class AccountLayoutModule { }
