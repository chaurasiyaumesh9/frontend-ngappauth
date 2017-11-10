import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { QuestionService } from './Services/question.service';
import { UserdetailsService } from './Services/userdetails.service';

import { AppComponent } from './app.component';
import { QuestionComponent } from './Components/question/question.component';
import { UserdetailsComponent } from './Components/userdetails/userdetails.component';
import { ProgressbarComponent } from './Components/progressbar/progressbar.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatRadioModule} from '@angular/material';


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
    ReactiveFormsModule   ,
    BrowserAnimationsModule,
    MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatRadioModule
  ],
  exports: [MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatRadioModule],
  providers: [ QuestionService, UserdetailsService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
