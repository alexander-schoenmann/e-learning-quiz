import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionRadioComponent } from './question-radio.component';

describe('QuestionRadioComponent', () => {
  let component: QuestionRadioComponent;
  let fixture: ComponentFixture<QuestionRadioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionRadioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
