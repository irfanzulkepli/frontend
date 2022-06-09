import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

export interface User {
  username:string,
  password:string,
  roles:string,
  pNum:string,
}


@Component({
  selector: 'app-users-role',
  templateUrl: './users-role.component.html',
  styleUrls: ['./users-role.component.scss']
})
export class UsersRoleComponent implements OnInit {
  
  constructor(private http:HttpClient) { }

  ngOnInit() {
    
  }
  

}
