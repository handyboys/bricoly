import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../models/user.model'; // User model
import { AuthService } from '../../services/auth/auth.service';

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
  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.authService.signUp(this.newUser)
      .subscribe(data => {
        console.log(data);
      })
  }

  // TODO : remove when done 
  get diagnostic() { return JSON.stringify(this.newUser)+this.passwordConfirmation }

}
