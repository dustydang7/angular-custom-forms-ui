import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomMultiCheckComponent } from './custom-multi-check.component';

describe('CustomMultiCheckComponent', () => {
  let component: CustomMultiCheckComponent;
  let fixture: ComponentFixture<CustomMultiCheckComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomMultiCheckComponent]
    });
    fixture = TestBed.createComponent(CustomMultiCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
