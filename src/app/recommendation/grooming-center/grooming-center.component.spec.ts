import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroomingCenterComponent } from './grooming-center.component';

describe('GroomingCenterComponent', () => {
  let component: GroomingCenterComponent;
  let fixture: ComponentFixture<GroomingCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroomingCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroomingCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
