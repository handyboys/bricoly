import { SelectServiceComponent } from '../../components/select-service/select-service.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostjobComponent } from './../../components/job-post/postjob.component'
import { SelectCategoryComponent } from '../../components/select-category/select-category.component'
import { ClientTypeComponent } from '../../components/client-type/client-type.component';
import { ServiceTypeComponent } from '../../components/service-type/service-type.component';
import { SelectJobLocationComponent } from '../../components/select-job-location/select-job-location.component';

const routes: Routes = [
  {
    path: '', component: PostjobComponent,
    children: [
      { path: 'select-category', component: SelectCategoryComponent },
      { path: 'select-service/:id', component: SelectServiceComponent },
      { path: 'client-type', component: ClientTypeComponent },
      { path: 'service-type', component: ServiceTypeComponent },
      { path: 'job-location', component: SelectJobLocationComponent}
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobPostRoutingModule { }
