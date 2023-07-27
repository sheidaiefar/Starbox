import { ModuleWithProviders, NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import {MatTable, MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon'
import {MatButtonModule} from '@angular/material/button';


const matModules = [
  MatCardModule,  
  MatTableModule,
  MatIconModule,
  MatButtonModule
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    matModules
  ],
  exports:[matModules]
})
export class MaterialsModule { }
