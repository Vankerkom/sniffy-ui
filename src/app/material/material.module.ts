import { NgModule } from '@angular/core';

import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

const COMPONENTS = [
  MatBadgeModule,
  MatButtonModule,
  MatDialogModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatIconModule,
];

@NgModule({
  declarations: [],
  exports: [COMPONENTS],
  imports: [COMPONENTS],
})
export class MaterialModule {}
