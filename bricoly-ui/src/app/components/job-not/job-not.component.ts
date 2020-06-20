import { Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router } from '@angular/router';
import {MessagesService} from '../../services/messages/messages.service';
import { Reviews } from '../../models/reviews/reviews.model';
import { ReviewsService } from '../../services/reviews/reviews.service';

@Component({
  selector: 'app-job-not',
  templateUrl: './job-not.component.html',
  styleUrls: ['./job-not.component.scss']
})

export class JobNotComponent implements OnInit {
  allNoti;
  professional;
  message: string;
  username: string = localStorage.getItem("7layba");
  feedback : string;
  output : any[]=[];
  ratingService = 0;
  ratingPrice = 0;
  ratingCommunication = 0;
  job_applications_id;
  newReviews : Reviews = new Reviews();
  // @ViewChild('element') element;
  // public position = { X: 'Right', Y: 'Top' };
  constructor(private route: ActivatedRoute, private router: Router, private messages : MessagesService, private reviewservice: ReviewsService) {
    this.allNoti = this.route.snapshot.data.notification
    this.professional = this.allNoti.professional
    this.job_applications_id = this.professional.id
    console.log(this.allNoti)
    console.log(this.professional)
    console.log(this.job_applications_id)
  }

  ngOnInit(): void {
    this.messages
    .listen('typing')
    .subscribe((data) => this.updateFeedback(data));
  this.messages
    .listen('chat')
    .subscribe((data) => this.updateMessage(data));
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
  this.newReviews.job_applications_id = this.job_applications_id;
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


messageTyping(): void {
  this.messages.emit('typing', this.username);
}
sendMessage(): void {
  this.messages.emit('chat', {
    message: this.message,
    handle: this.username,
  });
  this.message = '';
  document.getElementById('exampleFormControlTextarea2').innerHTML = '';
}
updateMessage(data: any) {
  this.feedback = '';
  if (!!!data) return;
  console.log(`${data.handle} : ${data.message}`);
  this.output.push(data);
}
updateFeedback(data: any) {
  this.feedback = `${data} is typing a message`;
}

}
