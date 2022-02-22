import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerFormPageComponent } from './owner-form-page.component';

describe('OwnerFormPageComponent', () => {
  let component: OwnerFormPageComponent;
  let fixture: ComponentFixture<OwnerFormPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwnerFormPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerFormPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
