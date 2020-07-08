import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusStripComponent } from './status-strip.component';

describe('StatusStripComponent', () => {
  let component: StatusStripComponent;
  let fixture: ComponentFixture<StatusStripComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatusStripComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusStripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
