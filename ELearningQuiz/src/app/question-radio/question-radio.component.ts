import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-question-radio',
  templateUrl: './question-radio.component.html',
  styleUrls: ['./question-radio.component.css'],
})
export class QuestionRadioComponent implements OnInit {
  @Input() question: any;

  public hasSelectedAnswer = false;
  public selectedAnswer: string = "";
  public selectedAnswerText = "";
  public selectedAnswerDescription = "";

  public showHintToAnswerQuestion = false;
  public showCorrectAnswerField = false;
  public showFalseAnswerField = false;
  public hideInputs = false;

  public showSubmitButton = true;
  public showNextButton = false;


  @Output() updateResultCounter = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  public calculateResult () {
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

  public onItemChange (value: any) {
    this.hasSelectedAnswer = true;
    this.selectedAnswer = value.value;
    this.selectedAnswerText = value.getAttribute("data-answerText");
    this.selectedAnswerDescription = value.getAttribute("data-answerDescription");
  }

  public navigateToNextQuestion () {
    this.updateResultCounter.emit();
  }
}
