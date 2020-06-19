import { JobNotificationService } from './../../resolvers/job-notification/job-notification.service';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JobFeedComponent } from 'src/app/components/job-feed/job-feed.component';
import { JobNotComponent } from "src/app/components/job-not/job-not.component";
import { JobHistoryComponent } from 'src/app/components/job-history/job-history.component';



const routes: Routes = [
  {
    path:'',
    redirectTo:'feed',
    pathMatch:'full'
  },
  {
    path:'feed',
    component:JobFeedComponent
  },
  {
    path: 'notification/:id', 
    component : JobNotComponent,
    resolve: { notification: JobNotificationService}
  },
  {
    path:'history/:id',
    component:JobHistoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobsRoutingModule { }
