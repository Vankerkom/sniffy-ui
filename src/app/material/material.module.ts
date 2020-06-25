import { NgModule } from '@angular/core';

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

const COMPONENTS = [
  MatAutocompleteModule,
  MatBadgeModule,
  MatButtonModule,
  MatDialogModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatIconModule,
  MatFormFieldModule,
  MatProgressSpinnerModule,
  MatInputModule,
  MatSelectModule,
];

@NgModule({
  declarations: [],
  exports: [COMPONENTS],
  imports: [COMPONENTS],
})
export class MaterialModule {}
