import { NgModule } from '@angular/core';

import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';

const COMPONENTS = [
  MatButtonModule,
  MatTabsModule,
];

@NgModule({
  declarations: [],
  exports: [COMPONENTS],
  imports: [COMPONENTS],
})
export class MaterialModule {}
