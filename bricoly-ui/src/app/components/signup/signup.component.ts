import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../models/user/user.model'; // User model
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})

export class SignupComponent implements OnInit {

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
        localStorage.setItem('userId', data.id) 
        localStorage.setItem('accessToken', data.accessToken)
      }) 
  }
}
