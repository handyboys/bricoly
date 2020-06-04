import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {SelectCategoryComponent} from '../../components/select-category/select-category.component'

const routes: Routes = [
  { path: 'select-category', component:SelectCategoryComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobPostRoutingModule { }
