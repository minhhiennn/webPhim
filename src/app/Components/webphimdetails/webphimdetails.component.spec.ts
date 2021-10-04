import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebphimdetailsComponent } from './webphimdetails.component';

describe('WebphimdetailsComponent', () => {
  let component: WebphimdetailsComponent;
  let fixture: ComponentFixture<WebphimdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebphimdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebphimdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
