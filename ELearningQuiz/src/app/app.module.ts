import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { QuestionCheckboxComponent } from './question-checkbox/question-checkbox.component';
import { QuestionRadioComponent } from './question-radio/question-radio.component';
import { QuestionTemplateComponent } from './question-template/question-template.component';
import { QuestionButtonComponent } from './question-button/question-button.component';
import { ResultComponent } from './result/result.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionCheckboxComponent,
    QuestionRadioComponent,
    QuestionTemplateComponent,
    QuestionButtonComponent,
    ResultComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
