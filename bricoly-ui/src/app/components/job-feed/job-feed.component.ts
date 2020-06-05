import { JobsService } from '../../services/jobs/jobs.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-job-feed',
  templateUrl: './job-feed.component.html',
  styleUrls: ['./job-feed.component.scss']
})
export class JobFeedComponent implements OnInit {

  constructor(private jobsService : JobsService) { 
    this.jobsService.getAllJobs()
    .subscribe(openJobs =>{
      console.log(openJobs)
    })
  }

  ngOnInit(): void {
  }

}
