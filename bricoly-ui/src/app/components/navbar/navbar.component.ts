import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
@HostListener('window:scroll', ['$event'])
export class NavbarComponent implements OnInit {
  showMenu : boolean =false
  constructor() { }

  ngOnInit(): void {

  }


 }
