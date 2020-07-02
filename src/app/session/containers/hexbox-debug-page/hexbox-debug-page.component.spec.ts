import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HexboxDebugPageComponent } from './hexbox-debug-page.component';

describe('HexboxDebugPageComponent', () => {
  let component: HexboxDebugPageComponent;
  let fixture: ComponentFixture<HexboxDebugPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HexboxDebugPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HexboxDebugPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
