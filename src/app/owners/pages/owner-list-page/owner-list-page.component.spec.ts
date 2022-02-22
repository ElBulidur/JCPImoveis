import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerListPageComponent } from './owner-list-page.component';

describe('OwnerListPageComponent', () => {
  let component: OwnerListPageComponent;
  let fixture: ComponentFixture<OwnerListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwnerListPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
