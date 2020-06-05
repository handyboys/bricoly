import { SelectCategoryComponent } from './../../components/select-category/select-category.component';
import { ServicesComponent} from './../../components/services/services.component';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';


import { JobPostRoutingModule } from './job-post-routing.module';


@NgModule({
  imports: [
    CommonModule,
    JobPostRoutingModule,
  ],
  declarations: [
    SelectCategoryComponent,
    ServicesComponent
  ]

})
export class JobPostModule { }
