import { SelectCategoryComponent } from './../../components/select-category/select-category.component';
import { SelectServiceComponent} from './../../components/select-service/select-service.component';

import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import {PostjobComponent} from './../../components/job-post/postjob.component'
import { JobPostRoutingModule } from './job-post-routing.module';


@NgModule({
  imports: [
    CommonModule,
    JobPostRoutingModule,

  ],
  declarations: [
    SelectCategoryComponent,
    SelectServiceComponent,
    PostjobComponent

  ]

})
export class JobPostModule { }
