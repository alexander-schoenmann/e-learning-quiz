import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-question-checkbox',
  templateUrl: './question-checkbox.component.html',
  styleUrls: ['./question-checkbox.component.css']
})
export class QuestionCheckboxComponent implements OnInit {
  @Input() question: any;
  @Input() correctAnswers: any;

  public answerValues : string[] = [];

  public currentQuestion = 0;
  public selected : number[] = [0, 0, 0];

  public selectedAnswer: string = "";
  public selectedAnswerTexts: string[] = ['', '', ''];
  public selectedAnswerDescriptions: string[] = ['', '', ''];

  public showHintToAnswerQuestion = false;
  public showCorrectAnswerField = false;
  public showFalseAnswerField = false;
  public showPartiallyRightAnswerField = false;
  public hideInputs = false;

  public showSubmitButton = true;
  public showNextButton = false;

  @Output() updateResultCounter = new EventEmitter<any>();
  @Output() updateCorrectAnswerAmount = new EventEmitter<number>();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {}

  public calculateResult () {
    if (this.answerValues.length >= 1) {
      if (this.answerValues.filter(item => item == "false").length == 0
        && this.answerValues.filter(item => item == "true").length == 2) {
        //richtig
        this.showHintToAnswerQuestion = false;
        this.showFalseAnswerField = false;
        this.showPartiallyRightAnswerField = false;
        this.showCorrectAnswerField = true;

      } else if(this.answerValues.filter(item => item == "false").length == 0
        && this.answerValues.filter(item => item == "true").length < 2){
        this.showPartiallyRightAnswerField = true;
        this.showFalseAnswerField = false;
        this.showHintToAnswerQuestion = false;
        this.showCorrectAnswerField = false;
      }
      else {
        //false
        this.showHintToAnswerQuestion = false;
        this.showPartiallyRightAnswerField = false;
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

  public onItemSelection (value: any) {
    this.selectedAnswer = value.value;
    this.currentQuestion = value.getAttribute("data-answerId");
    if (this.selected[this.currentQuestion] == 0){
      this.answerValues[this.currentQuestion] = this.selectedAnswer;
      this.selectedAnswerTexts[this.currentQuestion] = value.getAttribute("data-answerText");
      this.selectedAnswerDescriptions[this.currentQuestion] = value.getAttribute("data-answerDescription");
      this.selected[this.currentQuestion] = 1;
    }
    else {
      this.answerValues[this.currentQuestion] = '';
      this.selectedAnswerTexts[this.currentQuestion] = '';
      this.selectedAnswerDescriptions[this.currentQuestion] = '';
      this.selected[this.currentQuestion] = 0;
    }
  }

  public navigateToNextQuestion () {
    this.updateResultCounter.emit();
    let counter = 0;

    if (this.answerValues.filter(item => item == "true").length == 2) {
      counter +=1;
      this.correctAnswers += 1;
      this.updateCorrectAnswerAmount.emit(counter);
      this.router.navigate(["../result", this.correctAnswers], {relativeTo: this.route});
    } else {
      this.updateCorrectAnswerAmount.emit(counter);
      this.router.navigate(["../result", this.correctAnswers], {relativeTo: this.route});
    }
  }
}

