import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgbtShowcaseComponent } from './ngbt-showcase.component';

describe('NgbtShowcaseComponent', () => {
  let component: NgbtShowcaseComponent;
  let fixture: ComponentFixture<NgbtShowcaseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgbtShowcaseComponent]
    });
    fixture = TestBed.createComponent(NgbtShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
