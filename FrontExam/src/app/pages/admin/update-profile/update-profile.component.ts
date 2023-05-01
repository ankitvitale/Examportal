import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {

  username=0;
  user;

  constructor(private _route:ActivatedRoute , private _user:UserService) { }

  ngOnInit(): void {
    this.username=this._route.snapshot.params.userName;
    //alert(this.id);
    this._user.getUser(this.username).subscribe(
      (data:any)=>{
        this.user=data;
        console.log(this.user);
      },
      (error)=>{
        console.log(error);
      }
    );
  }

}
