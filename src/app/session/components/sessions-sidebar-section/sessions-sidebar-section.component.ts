import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Session } from '@app/core/models';

@Component({
  selector: 'app-sessions-sidebar-section',
  templateUrl: './sessions-sidebar-section.component.html',
  styleUrls: ['./sessions-sidebar-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SessionsSidebarSectionComponent {
  @Input() sessions: Session[] = [];

  trackByFn(index: number, item: Session): string {
    return item.id.toString(10);
  }
}
