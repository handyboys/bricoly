import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'auth',
    loadChildren : () => import('./modules/auth/auth.module').then(module => module.AuthModule)
  },
  {
    path: 'jobs',
    loadChildren : () => import('./modules/jobs/jobs.module').then(module => module.JobsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
