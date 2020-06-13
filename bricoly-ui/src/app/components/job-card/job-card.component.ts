import { JobApplication } from './../../models/job_application/job-application.model';
import { Job } from './../../models/jobs/jobs.model';
import {JobApplicationService} from '../../services/job-application/job-application.service'

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
  JobApplication : JobApplication = new JobApplication();
  constructor(private jobApplicationService :JobApplicationService) { }


  ngOnInit(): void {
  }
  onSubmit(e){
    e.preventDefault()
    this.JobApplication.job_id = this.openJob.id
    console.log(this.JobApplication)
    this.jobApplicationService.getjobApplication(4,2).subscribe(data=>{
      console.log(data)
    })

  }
}
