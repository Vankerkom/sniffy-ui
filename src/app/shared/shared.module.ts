import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '../material/material.module';
import { SidebarSectionComponent } from './components/sidebar-section/sidebar-section.component';

@NgModule({
  declarations: [SidebarSectionComponent],
  imports: [CommonModule, MaterialModule, RouterModule],
  exports: [MaterialModule, SidebarSectionComponent],
})
export class SharedModule {}
