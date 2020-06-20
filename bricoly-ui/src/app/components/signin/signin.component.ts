import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { User } from '../../models/user/user.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  @Input() pattern: string | RegExp;
  constructor(
    private authService: AuthService ,private route: ActivatedRoute, private router: Router
  ) { }
  user: User = new User();
  ngOnInit(): void {
  }

  onSubmit() {
    this.authService.signIn(this.user);
    this.router.navigate(['/'], { relativeTo: this.route });
  }

  // TODO : remove when done
  get diagnostic() { return JSON.stringify(this.user) }
}
