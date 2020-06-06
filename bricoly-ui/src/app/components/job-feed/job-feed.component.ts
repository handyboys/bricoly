import { Component, OnInit } from '@angular/core';
import { JobsService } from '../../services/jobs/jobs.service';
import { Job } from '../../models/jobs/jobs.model'; // User model

@Component({
  selector: 'app-job-feed',
  templateUrl: './job-feed.component.html',
  styleUrls: ['./job-feed.component.scss']
})
export class JobFeedComponent implements OnInit {
  
  openJobs: Job[] = []
  constructor(private jobsService : JobsService) { 
    this.jobsService.getAllJobs()
    .subscribe((data : Job[]) =>{
      this.openJobs = data
      console.log(this.openJobs)
    })
  }


  ngOnInit(): void {
  }

}
