import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataInspectorComponent } from './data-inspector.component';

describe('DataInspectorComponent', () => {
  let component: DataInspectorComponent;
  let fixture: ComponentFixture<DataInspectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataInspectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataInspectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
