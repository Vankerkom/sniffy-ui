import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconNavigationComponent } from './icon-navigation.component';

describe('IconNavigationComponent', () => {
  let component: IconNavigationComponent;
  let fixture: ComponentFixture<IconNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
