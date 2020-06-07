import { SelectCategoryComponent} from '../../components/select-category/select-category.component'
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobPostRoutingModule } from './job-post-routing.module';


@NgModule({
  imports: [
    CommonModule,
    JobPostRoutingModule
  ],
  declarations: [
    SelectCategoryComponent,
   ]
})
export class JobPostModule { }
