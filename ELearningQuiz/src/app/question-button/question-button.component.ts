import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-question-button',
  templateUrl: './question-button.component.html',
  styleUrls: ['./question-button.component.css'],
})
export class QuestionButtonComponent {
  @Input() question: any;

  public showHintToAnswerQuestion = false;
  public showCorrectAnswerField = false;
  public showFalseAnswerField = false;
  public hideInputs = false;

  public hasSelectedAnswer = false;
  public selectedAnswer: string = "";
  public selectedAnswerText = "";
  public selectedAnswerDescription = "";

  public showSubmitButton = true;
  public showNextButton = false;
  public buttonStatus1 = false;
  public buttonStatus2 = false;

  @Output() updateResultCounter = new EventEmitter<any>();
  @Output() updateCorrectAnswerAmount = new EventEmitter<number>();

  constructor() {}


  public selectEntry (value: any) {
    this.hasSelectedAnswer = true;
    this.selectedAnswer = value.getAttribute("data-answerCorrect");
    this.selectedAnswerText = value.getAttribute("data-answerText");
    this.selectedAnswerDescription = value.getAttribute("data-answerDescription");
  }

  public selectEntry1 (value: any) {
    this.buttonStatus1 = true;
    this.buttonStatus2 = false;

    this.selectEntry(value);
  }

  public selectEntry2 (value: any) {
    this.buttonStatus2 = true;
    this.buttonStatus1 = false;

    this.selectEntry(value);
  }

  public calculateResult() {
    if (this.hasSelectedAnswer) {

      if (this.selectedAnswer == "true") {
        //richtig
        this.showHintToAnswerQuestion = false;
        this.showFalseAnswerField = false;
        this.showCorrectAnswerField = true;

      } else {
        //false
        this.showHintToAnswerQuestion = false;
        this.showCorrectAnswerField = false;
        this.showFalseAnswerField = true;
      }
      this.hideInputs = true;

      this.showSubmitButton = false;
      this.showNextButton = true;

    } else {
      this.showHintToAnswerQuestion = true;
    }
  }

  public navigateToNextQuestion () {
    this.updateResultCounter.emit();
    let counter = 0;

    if (this.selectedAnswer == "true") {
      counter +=1;
      this.updateCorrectAnswerAmount.emit(counter);
    } else {
      this.updateCorrectAnswerAmount.emit(counter);
    }
  }

}
