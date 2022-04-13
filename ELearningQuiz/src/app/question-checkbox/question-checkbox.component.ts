import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-question-checkbox',
  templateUrl: './question-checkbox.component.html',
  styleUrls: ['./question-checkbox.component.css']
})
export class QuestionCheckboxComponent implements OnInit {
  @Input() question: any;
  constructor() { }

  ngOnInit(): void {
  }

}
