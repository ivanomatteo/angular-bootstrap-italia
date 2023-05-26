import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiFooterComponent } from './bi-footer.component';

describe('BiFooterComponent', () => {
  let component: BiFooterComponent;
  let fixture: ComponentFixture<BiFooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BiFooterComponent]
    });
    fixture = TestBed.createComponent(BiFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
