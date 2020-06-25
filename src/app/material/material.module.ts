import { NgModule } from '@angular/core';

import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';

const COMPONENTS = [
  MatBadgeModule,
  MatButtonModule,
  MatTableModule,
  MatTabsModule,
];

@NgModule({
  declarations: [],
  exports: [COMPONENTS],
  imports: [COMPONENTS],
})
export class MaterialModule {}
