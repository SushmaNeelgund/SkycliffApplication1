import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { userResolved, User } from '../userdisplay/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  userArr:User[]=[];
  userData:any;
  error:string='';
  constructor(private _actRoute:ActivatedRoute) {
    this.userData=this._actRoute.snapshot.data['uData'];
   }

  ngOnInit(){
    this.userArr=this.userData.users;
    this.error=this.userData.errormessage;
  }

}
