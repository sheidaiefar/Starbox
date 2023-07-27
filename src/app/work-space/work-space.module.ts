import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkSpaceLayoutModule } from './work-space-layout/work-space-layout.module';
import { WorkSpaceRoutingModule } from './work-space-routing.module';



@NgModule({
  declarations: [  
  
    
  ],
  imports: [
    CommonModule,
    WorkSpaceLayoutModule,
    WorkSpaceRoutingModule
  ],
  exports:[WorkSpaceLayoutModule]
})
export class WorkSpaceModule { }
