import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkSpaceLayoutModule } from './work-space-layout/work-space-layout.module';
import { WorkSpaceRoutingModule } from './work-space-routing.module';
import { MaterialsModule } from '../_core/modules/materials/materials.module';
import { AdminModule } from './work-space-pages/admin/admin.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    WorkSpaceLayoutModule,
    WorkSpaceRoutingModule,
    MaterialsModule,
    AdminModule,
  ],
  exports: [WorkSpaceLayoutModule],
})
export class WorkSpaceModule {}
