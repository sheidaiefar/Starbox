import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';
import { MatTable, MatTableModule } from '@angular/material/table';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';

const matModules = [
  MatCardModule,
  MatIconModule,
  MatButtonModule,
  MatToolbarModule,
  MatSidenavModule,
  MatFormFieldModule,
  MatSelectModule,
  MatListModule,
  MatTableModule,
  MatAutocompleteModule,
  MatInputModule,
];

@NgModule({
  declarations: [],
  imports: [CommonModule, matModules],
  exports: [matModules],
})
export class MaterialsModule {}
