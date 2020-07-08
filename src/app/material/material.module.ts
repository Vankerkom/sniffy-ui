import { NgModule } from '@angular/core';

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { CdkTableModule } from '@angular/cdk/table';

const COMPONENTS = [
  MatAutocompleteModule,
  MatBadgeModule,
  MatButtonModule,
  MatDialogModule,
  MatIconModule,
  MatFormFieldModule,
  MatProgressSpinnerModule,
  MatInputModule,
  MatSelectModule,
  CdkTableModule,
];

@NgModule({
  declarations: [],
  exports: [COMPONENTS],
  imports: [COMPONENTS],
})
export class MaterialModule {}
