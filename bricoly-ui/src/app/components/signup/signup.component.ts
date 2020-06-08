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
  newUser: User = new User();
  passwordConfirmation: string = null;
  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  professionalSelect() {
    this.newUser.isProfessional = !this.newUser.isProfessional;
  }

  onSubmit() {
    this.authService.signUp(this.newUser)
      .subscribe(data => {
        console.log(data);
        localStorage.setItem('userId', data.id) 
        localStorage.setItem('accessToken', data.accessToken)
      }) 
  }

  // TODO : remove when done 
  get diagnostic() { return JSON.stringify(this.newUser) }
}
