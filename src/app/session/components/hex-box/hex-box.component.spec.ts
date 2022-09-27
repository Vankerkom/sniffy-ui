import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HexBoxComponent } from './hex-box.component';

describe('HexBoxComponent', () => {
  let component: HexBoxComponent;
  let fixture: ComponentFixture<HexBoxComponent>;

  beforeEach(waitForAsync(() => {
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
