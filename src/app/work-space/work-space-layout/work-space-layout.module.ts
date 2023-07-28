import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkSpaceMenuComponent } from './work-space-menu/work-space-menu.component';
import { HeaderComponent } from './header/header.component';
import { WorkSpaceLayoutComponent } from './work-space-layout/work-space-layout.component';
import { RouterModule } from '@angular/router';
import { MaterialsModule } from 'src/app/_core/modules/materials/materials.module';

@NgModule({
  declarations: [
    WorkSpaceMenuComponent,
    WorkSpaceLayoutComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule, 
    MaterialsModule, 
    RouterModule
  ],
  exports: [WorkSpaceLayoutComponent,HeaderComponent],
})
export class WorkSpaceLayoutModule {}
