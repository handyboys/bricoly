import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JobFeedComponent } from 'src/app/components/job-feed/job-feed.component';


const routes: Routes = [
  {
    path:'',
    redirectTo:'feed',
    pathMatch:'full'
  },
  {
    path:'feed',
    component:JobFeedComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobsRoutingModule { }
