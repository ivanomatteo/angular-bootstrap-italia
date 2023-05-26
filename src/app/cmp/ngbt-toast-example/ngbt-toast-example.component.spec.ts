import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgbtToastExampleComponent } from './ngbt-toast-example.component';

describe('NgbtToastExampleComponent', () => {
  let component: NgbtToastExampleComponent;
  let fixture: ComponentFixture<NgbtToastExampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgbtToastExampleComponent]
    });
    fixture = TestBed.createComponent(NgbtToastExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
