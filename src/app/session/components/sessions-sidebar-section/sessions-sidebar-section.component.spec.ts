import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SessionsSidebarSectionComponent } from './sessions-sidebar-section.component';

describe('SessionsSidebarSectionComponent', () => {
  let component: SessionsSidebarSectionComponent;
  let fixture: ComponentFixture<SessionsSidebarSectionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SessionsSidebarSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionsSidebarSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
