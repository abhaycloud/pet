import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetFoundComponent } from './pet-found.component';

describe('PetFoundComponent', () => {
  let component: PetFoundComponent;
  let fixture: ComponentFixture<PetFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetFoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
