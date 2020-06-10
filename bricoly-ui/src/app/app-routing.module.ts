import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path : 'messages',
    loadChildren: ()=> import('./modules/messages/messages/messages.module').then(m => m.MessagesModule)
  },
  { path:'job-post',
  loadChildren: ()=> import('./modules/job-post/job-post.module').then(m => m.JobPostModule)},
  {
    path: 'auth',
    loadChildren : () => import('./modules/auth/auth.module').then(module => module.AuthModule)
  },
  {
    path: 'jobs',
    loadChildren : () => import('./modules/jobs/jobs.module').then(module => module.JobsModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
