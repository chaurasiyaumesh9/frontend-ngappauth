import { Component, OnInit } from '@angular/core';
import { UserdetailsService } from '../../Services/userdetails.service';


@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {
	UserName:string;
	ApplicationID:string;
	Status:string;
   

  constructor( private _userService: UserdetailsService) { 
  	 // this.UserName = "Suresh Prasad";
	   // this.ApplicationID = "2341";
	   // this.Status = "In Progress";
  }

  ngOnInit() {
    this._userService.getUserDetails()
    .subscribe(userResponse => {
      this.UserName = userResponse['UserName'];
      this.ApplicationID = userResponse['ApplicationID'];
      this.Status = userResponse['Status'];
    });
  }

}
