import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from '../../components/signin/signin.component';
import { SignupComponent } from '../../components/signup/signup.component';
import { SignupProfComponent } from '../../components/signup-prof/signup-prof.component';


const routes: Routes = [
  {
    path: '',
    redirectTo : '/signin',
    pathMatch: 'full'
  },
  {
    path:'signin',
    component: SigninComponent
  },
  {
    path:'signup',
    component: SignupComponent
  },
  {
    path:'signup-professional',
    component: SignupProfComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
