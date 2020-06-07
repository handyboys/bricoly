import { Job } from './../../models/jobs/jobs.model';
import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-job-card',
  templateUrl: './job-card.component.html',
  styleUrls: ['./job-card.component.scss']
})
export class JobCardComponent implements OnInit {
  /**
   * @input openJob - two way data binding 
   */
  @Input()openJob : Job
  constructor() { }


  ngOnInit(): void {
  }

}
