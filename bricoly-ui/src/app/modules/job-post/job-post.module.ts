import { SelectCategoryComponent } from '../../components/select-category/select-category.component';
import { SelectServiceComponent} from '../../components/select-service/select-service.component';
import { ClientTypeComponent } from '../../components/client-type/client-type.component';
import { ServiceTypeComponent } from '../../components/service-type/service-type.component';

import { FormsModule } from '@angular/forms';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MDBBootstrapModule } from 'angular-bootstrap-md'; 
import {PostjobComponent} from './../../components/job-post/postjob.component'
import { JobPostRoutingModule } from './job-post-routing.module';


@NgModule({
  imports: [
    CommonModule,
    JobPostRoutingModule,
    MDBBootstrapModule.forRoot(),
    FormsModule 
  ],
  declarations: [
    SelectCategoryComponent,
    SelectServiceComponent,
    PostjobComponent,
    ClientTypeComponent,
    ServiceTypeComponent
  ]

})
export class JobPostModule { }
