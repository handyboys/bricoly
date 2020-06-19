import { Component, OnInit } from '@angular/core';
import { Reviews } from '../../models/reviews/reviews.model';
import { ReviewsService } from '../../services/reviews/reviews.service';



@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit {
  ratingService = 0;
  ratingPrice = 0;
  ratingCommunication = 0;
  job_applications_id;
  newReviews : Reviews = new Reviews();
  constructor(private reviewservice: ReviewsService) { }

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
    this.newReviews.job_applications_id = 1;
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
