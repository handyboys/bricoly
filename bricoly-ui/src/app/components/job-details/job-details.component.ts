import { Component, OnInit } from '@angular/core';
import { JobDraft } from '../../models/jobDraft/jobDraft.model';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.scss']
})
export class JobDetailsComponent implements OnInit {

  jobDraft: JobDraft = new JobDraft();
  
  

  constructor() { 
    // MOCK DATA : Remove when done
    this.jobDraft.client_type = "Home";
    this.jobDraft.latitude = 10.3154;
    this.jobDraft.longitude = 7.353;
    this.jobDraft.related_info = "job description";
    this.jobDraft.service_id = 1;
    this.jobDraft.service_type = "Installation";
  }

  ngOnInit(): void {
  }

}
