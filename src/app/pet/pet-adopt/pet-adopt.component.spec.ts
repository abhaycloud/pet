import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetAdoptComponent } from './pet-adopt.component';

describe('PetAdoptComponent', () => {
  let component: PetAdoptComponent;
  let fixture: ComponentFixture<PetAdoptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetAdoptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetAdoptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
