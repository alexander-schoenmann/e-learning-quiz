import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionButtonComponent } from './question-button.component';

describe('QuestionButtonComponent', () => {
  let component: QuestionButtonComponent;
  let fixture: ComponentFixture<QuestionButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
