import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-question-button',
  templateUrl: './question-button.component.html',
  styleUrls: ['./question-button.component.css']
})
export class QuestionButtonComponent implements OnInit {
  @Input() question: any;
  constructor() { }

  ngOnInit(): void {
  }

}
