import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { IconNavigationComponent } from './icon-navigation.component';

describe('IconNavigationComponent', () => {
  let component: IconNavigationComponent;
  let fixture: ComponentFixture<IconNavigationComponent>;

  beforeEach(waitForAsync(() => {
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
