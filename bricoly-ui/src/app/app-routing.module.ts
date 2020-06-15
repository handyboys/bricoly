import { JobNotComponent } from './components/job-not/job-not.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'job-post',
    loadChildren: () => import('./modules/job-post/job-post.module').then(m => m.JobPostModule)
  },
  {
    path: '',
    redirectTo: 'auth',
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
    path: 'notification', 
    component : JobNotComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
