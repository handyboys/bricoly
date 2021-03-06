import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReviewsRoutingModule } from './reviews-routing.module';
import { StarRatingModule } from '@sreyaj/ng-star-rating';
import {ReviewsComponent } from '../../components/reviews/reviews.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

@NgModule({
  declarations: [
    ReviewsComponent
  ],
  imports: [
    CommonModule,
    ReviewsRoutingModule,
    StarRatingModule,
    MDBBootstrapModule.forRoot(),
    FormsModule
  ]
})
export class ReviewsModule { }
