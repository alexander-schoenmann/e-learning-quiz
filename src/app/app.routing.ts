import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { QuestionTemplateComponent } from './question-template/question-template.component';
import { ResultComponent } from './result/result.component';
import {DownloadComponent} from "./download/download.component";

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'home/:progress', component: HomeComponent },
  { path: 'quiz', component: QuestionTemplateComponent },
  { path: 'result/:result', component: ResultComponent },
  { path: 'download', component: DownloadComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
