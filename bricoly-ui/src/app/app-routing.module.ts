import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FindProfessionalComponent } from './components/find-professional/find-professional.component';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { BlogComponent } from './components/blog/blog.component';

const routes: Routes = [
  {
    path: 'messages',
    loadChildren: () => import('./modules/messages/messages/messages.module').then(m => m.MessagesModule)
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
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.module').then(module => module.AuthModule)
  },
  {
    path: 'jobs',
    loadChildren: () => import('./modules/jobs/jobs.module').then(module => module.JobsModule)
  },
  {
    path: 'findProf',
    component: FindProfessionalComponent,
  },
   {
     path:'aboutus',
     component: AboutUsComponent
   },
   {
     path : 'blog',
     component: BlogComponent
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})

export class AppRoutingModule { }
