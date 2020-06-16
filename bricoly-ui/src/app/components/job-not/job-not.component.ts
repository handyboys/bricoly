import { Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-job-not',
  templateUrl: './job-not.component.html',
  styleUrls: ['./job-not.component.scss']
})

export class JobNotComponent implements OnInit {
  allNoti;
  professional;
  // @ViewChild('element') element;
  // public position = { X: 'Right', Y: 'Top' };
  constructor(private route: ActivatedRoute, private router: Router) {
    this.allNoti = this.route.snapshot.data.notification
    this.professional = this.allNoti.professional
    console.log(this.allNoti)
    console.log(this.professional)
  }

  ngOnInit(): void {
  }

}
