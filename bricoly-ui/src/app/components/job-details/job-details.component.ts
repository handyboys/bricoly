import { Component, OnInit } from '@angular/core';
import { JobDraft } from '../../models/jobDraft/jobDraft.model';
import { JobPostService } from 'src/app/services/jobPost/job-post.service';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.scss']
})
export class JobDetailsComponent implements OnInit {

  userId = localStorage.getItem('userId');
  jobDraft: JobDraft = new JobDraft();
  validDraft: boolean = true;
  jobCreated: boolean = false;

  constructor(
    private jobPost: JobPostService
  ) {
  }

  ngOnInit(): void {
  }

  createJob() {
    console.log('Job confirmed : ', this.jobDraft);
    if (!this.jobDraft.isValid()) {
      this.validDraft = false;
    } else {
      this.jobPost.createJob(this.jobDraft)
        .subscribe(result => {
          this.jobCreated = true;
          console.log('Job Created : ', result)
        },
          err => {
            console.log('Error creating job : ', err);
          })
    }

  }



}
