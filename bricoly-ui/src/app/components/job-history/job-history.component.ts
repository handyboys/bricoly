import { Component, OnInit } from '@angular/core';
import { JobsService } from '../../services/jobs/jobs.service';
import { Job } from '../../models/jobs/jobs.model'; // User model

@Component({
  selector: 'app-job-history',
  templateUrl: './job-history.component.html',
  styleUrls: ['./job-history.component.scss']
})
export class JobHistoryComponent implements OnInit {
  user_id = localStorage.getItem('userId');
  myJobs: Job[];

  constructor(private jobsService: JobsService) {
    this.jobsService.getJobHistory()
      .subscribe((data: Job[]) => {
        this.myJobs = data;
        console.log(this.myJobs)
      })


  }

  ngOnInit(): void {
  }

}
