import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DayCareComponent } from './day-care.component';

describe('DayCareComponent', () => {
  let component: DayCareComponent;
  let fixture: ComponentFixture<DayCareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DayCareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DayCareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
