import { Component, OnInit, Input } from '@angular/core';
// User model
import { User } from '../../models/user.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})

export class SignupComponent implements OnInit {
  @Input() pattern: string | RegExp;
  // init empty user object
  newUser:User = new User(null,null,null,null,null,null,null);
  passwordConfirmation:string = null;
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form) {
    console.log(form);
  }

  // TODO : remove when done 
  get diagnostic() { return JSON.stringify(this.newUser)+this.passwordConfirmation }

}
