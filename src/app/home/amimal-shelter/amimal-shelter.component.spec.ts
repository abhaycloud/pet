import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmimalShelterComponent } from './amimal-shelter.component';

describe('AmimalShelterComponent', () => {
  let component: AmimalShelterComponent;
  let fixture: ComponentFixture<AmimalShelterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmimalShelterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmimalShelterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
