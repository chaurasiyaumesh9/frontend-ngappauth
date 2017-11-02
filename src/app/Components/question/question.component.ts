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
  savedReponses = {};

  private _prevSelected: any;

    collapsed = false;
    toggleCollapse(evt){

      this.collapsed = !this.collapsed;
    }

    saveResponses( question ){
      if (!question) {return null;};
     
      this.savedReponses[question.q_id] = question.response;
    }

    ifAlreadyResponded( questionid ){
        for (let qid in this.savedReponses) {
          if (this.savedReponses.hasOwnProperty(questionid)) {
            return true;
          }
        }
        return false;
    }
    loadDependentQuestions(evt) {
      let target = evt.target;
      //console.log('handleChange ',target.id.split('_'));
       // this._questionService.getQuestionsMultipleProgramIds(['P3','P4','P5']).subscribe(questions => {
       //    console.log('questions :',questions);
          
       //  });

      let question_id,answer_id;
      if (target.nodeName.toLowerCase() == "input") {
          question_id = target.id.split('_')[1];
          answer_id = target.id.split('_')[2];;
      }else if( target.nodeName.toLowerCase() == "select" ){
          question_id = target.id.split('_')[1];
          answer_id = target.value;;
      }

      let response = {
        "q_id": question_id,
        "response": answer_id
      };
      //console.log('response : ',response);
      this.saveResponses( response );
      //console.log('question_id : ',question_id,',answer_id : ',answer_id);

      if (question_id && answer_id) {
        this._questionService.getProgram(question_id,answer_id).subscribe(programs => {
          //console.log('programs : ',programs);
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

  	 this._questionService.getAllQuestions()
  	 .subscribe(resQuestionData => {
      //this.questions = resQuestionData
      for(let i=0;i<resQuestionData.length;i++){
        let question = resQuestionData[i];
        if (question.q_type.toLowerCase() == "dropdown") {
          this.savedReponses[question['q_id']] = "-1";
        };
        
      }
     });

    this._questionService.getQuestionByScope('global')
    .subscribe(resQuestionData => {
      this.globalQuestions = resQuestionData;
      this.questions = this.globalQuestions;
    });
    


  }

}
