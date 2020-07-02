import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HexBoxComponent } from './hex-box.component';

describe('HexBoxComponent', () => {
  let component: HexBoxComponent;
  let fixture: ComponentFixture<HexBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HexBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HexBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
