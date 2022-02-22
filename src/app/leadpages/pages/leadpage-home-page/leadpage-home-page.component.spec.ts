import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadpageHomePageComponent } from './leadpage-home-page.component';

describe('LeadpageHomePageComponent', () => {
  let component: LeadpageHomePageComponent;
  let fixture: ComponentFixture<LeadpageHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeadpageHomePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadpageHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
