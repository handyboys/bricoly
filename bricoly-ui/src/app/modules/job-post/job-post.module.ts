import { SelectCategoryComponent } from '../../components/select-category/select-category.component';
import { SelectServiceComponent } from '../../components/select-service/select-service.component';
import { ClientTypeComponent } from '../../components/client-type/client-type.component';
import { ServiceTypeComponent } from '../../components/service-type/service-type.component';
import { SelectJobLocationComponent } from '../../components/select-job-location/select-job-location.component';
import { JobDetailsComponent } from '../../components/job-details/job-details.component';

import { FormsModule } from '@angular/forms';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {PostjobComponent} from './../../components/job-post/postjob.component'
import { JobPostRoutingModule } from './job-post-routing.module';
import { AgmCoreModule } from '@agm/core';
import {  CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    JobPostRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBMYPnWea___Dw9-tH1JyxaAGuvAI0iWvA'
    }),
    MDBBootstrapModule.forRoot(),
    FormsModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  declarations: [
    SelectCategoryComponent,
    SelectServiceComponent,
    PostjobComponent,
    ClientTypeComponent,
    ServiceTypeComponent,
    SelectJobLocationComponent,
    JobDetailsComponent
  ],


})
export class JobPostModule { }
