import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { JobsRoutingModule } from './jobs-routing.module';
import { JobCardComponent } from '../../components/job-card/job-card.component';
import { JobFeedComponent } from '../../components/job-feed/job-feed.component';


@NgModule({
  declarations: [
    JobCardComponent,
    JobFeedComponent
  ],
  imports: [
    CommonModule,
    JobsRoutingModule,
    MDBBootstrapModule.forRoot(),
  ]
})
export class JobsModule { }
