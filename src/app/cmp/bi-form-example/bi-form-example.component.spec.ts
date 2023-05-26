import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiFormExampleComponent } from './bi-form-example.component';

describe('BiFormExampleComponent', () => {
  let component: BiFormExampleComponent;
  let fixture: ComponentFixture<BiFormExampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BiFormExampleComponent]
    });
    fixture = TestBed.createComponent(BiFormExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
