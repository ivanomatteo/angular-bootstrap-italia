import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiHeaderComponent } from './bi-header.component';

describe('BiHeaderComponent', () => {
  let component: BiHeaderComponent;
  let fixture: ComponentFixture<BiHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BiHeaderComponent]
    });
    fixture = TestBed.createComponent(BiHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
