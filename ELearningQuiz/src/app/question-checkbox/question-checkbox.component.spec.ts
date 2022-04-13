import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionCheckboxComponent } from './question-checkbox.component';

describe('QuestionCheckboxComponent', () => {
  let component: QuestionCheckboxComponent;
  let fixture: ComponentFixture<QuestionCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionCheckboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
