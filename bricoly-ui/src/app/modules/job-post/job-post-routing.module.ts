import { ServicesComponent } from './../../components/services/services.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {SelectCategoryComponent} from '../../components/select-category/select-category.component'

const routes: Routes = [
  {path: 'select-category', component: SelectCategoryComponent},
  {path: 'select-service', component : ServicesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobPostRoutingModule { }
