import { JobHistoryComponent } from './../../components/job-history/job-history.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { JobsRoutingModule } from './jobs-routing.module';
import { JobCardComponent } from '../../components/job-card/job-card.component';
import { JobFeedComponent } from '../../components/job-feed/job-feed.component';
import { JobNotComponent } from "../../components/job-not/job-not.component";
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    JobCardComponent,
    JobFeedComponent,
    JobNotComponent,
    JobHistoryComponent
  ],
  imports: [
    CommonModule,
    JobsRoutingModule,
    MDBBootstrapModule.forRoot(),
    FormsModule
  ],
})
export class JobsModule { }
