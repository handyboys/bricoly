import { SelectServiceComponent } from '../../components/select-service/select-service.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PostjobComponent} from './../../components/job-post/postjob.component'
import {SelectCategoryComponent} from '../../components/select-category/select-category.component'

const routes: Routes = [
  { path :'',component : PostjobComponent,
children : [
  {path: 'select-category', component: SelectCategoryComponent},
  {path: 'select-service/:id', component : SelectServiceComponent}
]
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobPostRoutingModule { }
