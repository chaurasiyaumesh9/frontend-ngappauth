import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../../Services/question.service';



@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  constructor( private _questionService: QuestionService ) { }
  questions = [];

  ngOnInit() {

  	this._questionService.getAllQuestions()
  	.subscribe(resQuestionData => this.questions = resQuestionData);
  }

}
