import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiHeaderDefaultComponent } from './bi-header-default.component';

describe('BiHeaderDefaultComponent', () => {
  let component: BiHeaderDefaultComponent;
  let fixture: ComponentFixture<BiHeaderDefaultComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BiHeaderDefaultComponent]
    });
    fixture = TestBed.createComponent(BiHeaderDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
