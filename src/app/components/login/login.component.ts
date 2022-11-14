import { Component, OnInit } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  public user:User = {
      userName: '',
      email: '',
      password: ''
  }

  public loginData():void{
    console.log(this.user)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
