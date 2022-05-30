import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  public correctAnswers: Number;
  public showSucces = false;
  public showFailure = false;

  constructor(
    private route: ActivatedRoute
  ) {
    this.correctAnswers = this.route.snapshot.params['result'];
  }

  ngOnInit(): void {
    if (this.correctAnswers >= 2) this.showSucces = true;
    else this.showFailure = true;
  }
}
