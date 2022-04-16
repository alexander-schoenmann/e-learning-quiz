import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question-template',
  templateUrl: './question-template.component.html',
  styleUrls: ['./question-template.component.css'],
})
export class QuestionTemplateComponent implements OnInit {
  constructor() {}

  public progress: number = 0;
  public correctAnswers = 0;

  public questions = [
    {
      id: 1,
      type: 'radio',
      title: 'Michael1998 - Findest du dieses Passwort sicher?',
      answers: [
        { text: 'Ja', correct: false, description: "Das Passwort sollte keine personenbezogenen Inhalte wie Name oder Passwort sein." },
        { text: 'Nein', correct: true, description: "Das Passwort sollte keine personenbezogenen Inhalte wie Name oder Passwort sein." },
      ],
    },
    {
      id: 2,
      type: 'button',
      title: 'Handelt es sich hierbei um eine Phishing E-Mail?',
      image: '../../assets/images/example.jpg',
      answers: [
        { text: 'Ja', correct: true, description: "Wir verwenden Global Pay nicht in unserem Unternehmen. Der Anhang enthält somit wahrscheinlich Schadsoftware."},
        { text: 'Nein', correct: false, description: "Wir verwenden Global Pay nicht in unserem Unternehmen. Der Anhang enthält somit wahrscheinlich Schadsoftware." },
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

  updateProgress () {
    this.progress += 1;
  }

  updateCorrectAnswerCounter (number: number) {
    this.correctAnswers += number;
  }
}
