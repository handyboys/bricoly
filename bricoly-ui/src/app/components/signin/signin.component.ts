import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { User } from '../../models/user/user.model';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  @Input() pattern: string | RegExp;
  constructor(
    private authService: AuthService
  ) { }
  user: User = new User(null,null,null,null,null,null,null);
  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.user)
    this.authService.signIn(this.user);
  }

  // TODO : remove when done 
  get diagnostic() { return JSON.stringify(this.user) }
}
