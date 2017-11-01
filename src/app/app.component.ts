import { Component } from '@angular/core';
import { QuestionService } from './Services/question.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ QuestionService ]
})
export class AppComponent {
  title = 'app';
  
}
