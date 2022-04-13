import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionTemplateComponent } from './question-template.component';

describe('QuestionTemplateComponent', () => {
  let component: QuestionTemplateComponent;
  let fixture: ComponentFixture<QuestionTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
