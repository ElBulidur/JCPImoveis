import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyFormPageComponent } from './property-form-page.component';

describe('PropertyFormPageComponent', () => {
  let component: PropertyFormPageComponent;
  let fixture: ComponentFixture<PropertyFormPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertyFormPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyFormPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
