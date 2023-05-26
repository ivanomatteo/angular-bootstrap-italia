import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiLayoutComponent } from './bi-layout.component';

describe('BiLayoutComponent', () => {
  let component: BiLayoutComponent;
  let fixture: ComponentFixture<BiLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BiLayoutComponent]
    });
    fixture = TestBed.createComponent(BiLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
