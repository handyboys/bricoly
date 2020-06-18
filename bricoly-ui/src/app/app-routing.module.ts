import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FindProfessionalComponent } from './components/find-professional/find-professional.component';

const routes: Routes = [
  {path : 'messages',
  loadChildren: ()=> import('./modules/messages/messages/messages.module').then(m => m.MessagesModule)
},
{path : 'reviews',
  loadChildren: ()=> import('./modules/reviews/reviews.module').then(m => m.ReviewsModule)
},
  {
    path: 'job-post',
    loadChildren: () => import('./modules/job-post/job-post.module').then(m => m.JobPostModule)
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.module').then(module => module.AuthModule)
  },
  {
    path: 'jobs',
    loadChildren : () => import('./modules/jobs/jobs.module').then(module => module.JobsModule)
  },
  {
    path:'findProf',
    component: FindProfessionalComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
