import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgbtNavbarComponent } from './ngbt-navbar.component';

describe('NgbtNavbarComponent', () => {
  let component: NgbtNavbarComponent;
  let fixture: ComponentFixture<NgbtNavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgbtNavbarComponent]
    });
    fixture = TestBed.createComponent(NgbtNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
