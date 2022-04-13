import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question-template',
  templateUrl: './question-template.component.html',
  styleUrls: ['./question-template.component.css'],
})
export class QuestionTemplateComponent implements OnInit {
  constructor() {}

  public questions = [
    {
      id: 1,
      type: 'radio',
      title: 'lorem ipsum',
      answers: ['lorem ipsum', '123', 'hallo'],
    },
    {
      id: 2,
      type: 'button',
      title: 'lorem ipsum',
      image: './',
      answers: ['Ja', 'Nein'],
    },
    {
      id: 3,
      type: 'checkbox',
      title: 'lorem ipsum',
      answers: ['lorem ipsum', '123', 'hallo'],
    },
  ];

  ngOnInit(): void {}
}
