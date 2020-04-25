import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VetCareComponent } from './vet-care.component';

describe('VetCareComponent', () => {
  let component: VetCareComponent;
  let fixture: ComponentFixture<VetCareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VetCareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VetCareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
