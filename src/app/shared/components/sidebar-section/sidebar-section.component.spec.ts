import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SidebarSectionComponent } from './sidebar-section.component';

describe('SidebarSectionComponent', () => {
  let component: SidebarSectionComponent;
  let fixture: ComponentFixture<SidebarSectionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
