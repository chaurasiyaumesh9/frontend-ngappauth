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

  	// Q2 = false;
   // 	Q3 = false;
   // 	Q1 = false;
   // 	Q4 = false;
   // 	Q5 = false;
   // 	Q6 = false;
   // 	Q7 = false;
   // 	Q8 = false;
   // 	Q9 = false;
   // 	Q10 = false;
   // 	Q11 = false;
   // 	Q12 = false;
   // 	Q13 = false;

  ngOnInit() {

  	this._questionService.getAllQuestions()
  	.subscribe(resQuestionData => this.questions = resQuestionData);
  }

}
