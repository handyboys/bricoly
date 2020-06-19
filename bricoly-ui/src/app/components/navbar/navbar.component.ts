import { AuthService } from './../../services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
@HostListener('window:scroll', ['$event'])
export class NavbarComponent implements OnInit {

  user_id = localStorage.getItem('userId');
  showMenu : boolean =false
  constructor(private authLogout :AuthService , private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

  }
  logout(){
    this.authLogout.logOut()
    //this.router.navigate(['../'], { relativeTo: this.route });
    localStorage.removeItem('userId');
        this.router.navigate(['']);
  }

 }
