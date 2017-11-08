import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {
	UserName:string;
	ApplicationID:string;
	Status:string;

  constructor( ) { 
  	this.UserName = "Suresh Prasad";
	this.ApplicationID = "2341";
	this.Status = "In Progress";
  }

  ngOnInit() {

  }

}
