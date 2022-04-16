import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public showProgress = false;
  public quizLink = "../quiz"

  constructor(
    private route: ActivatedRoute
  ) {
    this.showProgress = !!this.route.snapshot.params['progress'];
    if (this.showProgress) {
      this.quizLink = "../../quiz"
    }
  }

  ngOnInit(): void {
  }
}
