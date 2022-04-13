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
      title: 'lorem ipsum?',
      answers: [
        { text: '124', correct: true },
        { text: 'hallo', correct: false },
      ],
    },
    {
      id: 2,
      type: 'button',
      title: 'lorem ipsum?',
      image: './',
      answers: [
        { text: 'Ja', correct: true },
        { text: 'Nein', correct: false },
      ],
    },
    {
      id: 3,
      type: 'checkbox',
      title: 'lorem ipsum?',
      answers: [
        { text: 'abdads', correct: true },
        { text: 'dsfds', correct: false },
      ],
    },
  ];

  ngOnInit(): void {}
}
