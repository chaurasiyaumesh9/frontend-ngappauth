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
  globalQuestions = [];
  visibleQuestions = [];

  private _prevSelected: any;

    collapsed = false;
    toggleCollapse(evt){

      this.collapsed = !this.collapsed;
    }
    loadDependentQuestions(evt) {
      let target = evt.target;
      //console.log('handleChange ',target.id.split('_'));
      let question_id,answer_id;
      if (target.nodeName.toLowerCase() == "input") {
          question_id = target.id.split('_')[1];
          answer_id = target.id.split('_')[2];;
      }else if( target.nodeName.toLowerCase() == "select" ){
          question_id = target.id.split('_')[1];
          answer_id = target.value;;
      }
      if (question_id && answer_id) {
        this._questionService.getProgram(question_id,answer_id).subscribe(programs => {
          if( programs && programs.length > 0 ){
            this._questionService.getQuestionsByProgramId(programs[0]).subscribe(questions => {
            //  console.log('questions :',questions);
              this.questions = this.globalQuestions.concat(questions);
            });
          }
        });
      };
      
      
    }


  ngOnInit() {

  	// this._questionService.getAllQuestions()
  	// .subscribe(resQuestionData => this.questions = resQuestionData);

    this._questionService.getQuestionByScope('global')
    .subscribe(resQuestionData => {
      this.globalQuestions = resQuestionData;
      this.questions = this.globalQuestions;
    });
    


  }

}
