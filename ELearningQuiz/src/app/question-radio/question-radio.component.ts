import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-question-radio',
  templateUrl: './question-radio.component.html',
  styleUrls: ['./question-radio.component.css'],
})
export class QuestionRadioComponent implements OnInit {
  @Input() question: any;

  constructor() {}

  ngOnInit(): void {}
}
