import { Component, OnInit } from '@angular/core';
import { JobsService } from '../../services/jobs/jobs.service';
import { Job } from '../../models/jobs/jobs.model'; // User model
import { ReviewsService } from '../../services/reviews/reviews.service';
import { Reviews } from '../../models/reviews/reviews.model';

@Component({
  selector: 'app-job-history',
  templateUrl: './job-history.component.html',
  styleUrls: ['./job-history.component.scss']
})
export class JobHistoryComponent implements OnInit {
  user_id = localStorage.getItem('userId');
  myJobs: Job[];
  ratingService = 0;
  ratingPrice = 0;
  ratingCommunication = 0;
  job_application_id;
  newReviews : Reviews = new Reviews();
  constructor(private jobsService: JobsService,private reviewservice: ReviewsService) {
    this.jobsService.getJobHistory()
    .subscribe((data: Job[]) => {
      this.myJobs = data;
      let jobsNumber = JSON.stringify(this.myJobs.length)
      localStorage.setItem("jobsNumber", jobsNumber);
      console.log(this.myJobs);

    })


  }

  ngOnInit(): void {
  }
  getRatingServiceQuality(event: number) {
    this.ratingService = event;
  }
  getRatingPrice(event : number) {
    this.ratingPrice = event
  }
  getRatingCommunication(event : number) {
    this.ratingCommunication = event
  }
  onSubmit(e) {
    this.newReviews.job_applications_id = this.job_application_id;
    this.newReviews.service_quality = this.ratingService;
    this.newReviews.price =this.ratingPrice;
    this.newReviews.communication = this.ratingCommunication
    let overall = (this.newReviews.service_quality+this.newReviews.price+this.newReviews.communication)/3
    this.newReviews.overall_rating = overall;
    console.log(this.newReviews)
    this.reviewservice.getReviews(this.newReviews)
    .subscribe(data => {
      console.log(data);



    })
  }

}
