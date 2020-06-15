import { JobNotService } from './../../services/jobNot/job-not.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../../models/user/user.model';

@Component({
  selector: 'app-job-not',
  templateUrl: './job-not.component.html',
  styleUrls: ['./job-not.component.scss']
})

export class JobNotComponent implements OnInit {
  allNoti;
  // @ViewChild('element') element;
  // public position = { X: 'Right', Y: 'Top' };
  constructor(private jobsNot : JobNotService) {
    this.jobsNot.getNotificaion()
    .subscribe((data)=>{
       this.allNoti = data;
       console.log(this.allNoti)
       });
  }

  ngOnInit(): void {
  }

}
