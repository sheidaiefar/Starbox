import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkSpaceMenuComponent } from './work-space-menu/work-space-menu.component';
import { HeaderComponent } from './header/header.component';
import { WorkSpaceLayoutComponent } from './work-space-layout/work-space-layout.component';
import { MaterialsModule } from 'src/app/core/modules/materials/materials.module';
import { RouterModule } from '@angular/router';

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
