import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomSelectComponent } from './custom-select.component';

describe('CustomSelectComponent', () => {
  let component: CustomSelectComponent<string>;
  let fixture: ComponentFixture<CustomSelectComponent<string>>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomSelectComponent]
    });
    fixture = TestBed.createComponent(CustomSelectComponent<string>);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
