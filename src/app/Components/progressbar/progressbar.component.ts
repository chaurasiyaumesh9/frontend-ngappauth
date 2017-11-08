import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progressbar',
  templateUrl: './progressbar.component.html',
  styleUrls: ['./progressbar.component.css']
})
export class ProgressbarComponent implements OnInit {
	
	ActiveStep: number;
	TotalSteps: number;
	fakeArray = [];
  
  constructor() { 
  	this.ActiveStep = 1; //considering starts from 0
  	this.TotalSteps = 4;

  	this.fakeArray = new Array(4);
  }

  ngOnInit() {


  }

}
