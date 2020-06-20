import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReviewsComponent } from '../../components/reviews/reviews.component';
import { JobHistoryComponent } from 'src/app/components/job-history/job-history.component';


const routes: Routes = [
  { path :'review', component : ReviewsComponent},
  {path : 'history/:id' , component :JobHistoryComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReviewsRoutingModule { }
