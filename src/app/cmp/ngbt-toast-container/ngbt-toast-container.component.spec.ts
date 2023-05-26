import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgbtToastContainerComponent } from './ngbt-toast-container.component';

describe('NgbtToastContainerComponent', () => {
  let component: NgbtToastContainerComponent;
  let fixture: ComponentFixture<NgbtToastContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgbtToastContainerComponent]
    });
    fixture = TestBed.createComponent(NgbtToastContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
