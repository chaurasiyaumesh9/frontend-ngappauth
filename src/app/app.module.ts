import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { QuestionService } from './Services/question.service';

import { AppComponent } from './app.component';
import { QuestionComponent } from './Components/question/question.component';
import { UserdetailsComponent } from './Components/userdetails/userdetails.component';
import { ProgressbarComponent } from './Components/progressbar/progressbar.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    UserdetailsComponent,
    ProgressbarComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule    
  ],
  providers: [ QuestionService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
