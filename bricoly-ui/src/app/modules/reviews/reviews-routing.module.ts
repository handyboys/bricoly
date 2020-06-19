import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReviewsComponent } from '../../components/reviews/reviews.component';


const routes: Routes = [
  { path :'review', component : ReviewsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReviewsRoutingModule { }
