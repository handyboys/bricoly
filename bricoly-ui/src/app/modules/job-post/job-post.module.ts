import { SelectCategoryComponent } from '../../components/select-category/select-category.component';
import { SelectServiceComponent } from '../../components/select-service/select-service.component';
import { ClientTypeComponent } from '../../components/client-type/client-type.component';
import { ServiceTypeComponent } from '../../components/service-type/service-type.component';
import { SelectJobLocationComponent } from '../../components/select-job-location/select-job-location.component';

import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgmCoreModule } from '@agm/core';

import { PostjobComponent } from './../../components/job-post/postjob.component'
import { JobPostRoutingModule } from './job-post-routing.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

@NgModule({
  imports: [
    CommonModule,
    JobPostRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBMYPnWea___Dw9-tH1JyxaAGuvAI0iWvA'
    }),
    MDBBootstrapModule.forRoot(),
  ],
  declarations: [
    SelectCategoryComponent,
    SelectServiceComponent,
    PostjobComponent,
    ClientTypeComponent,
    ServiceTypeComponent,
    SelectJobLocationComponent
  ]

})
export class JobPostModule { }
