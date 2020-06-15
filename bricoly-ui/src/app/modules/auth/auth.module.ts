import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
// Bootstrap-based material design UI library
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { SignupComponent } from '../../components/signup/signup.component';
import { SignupProfComponent } from '../../components/signup-prof/signup-prof.component';
import { SigninComponent } from '../../components/signin/signin.component';


@NgModule({
  declarations: [
    SignupComponent,
    SignupProfComponent,
    SigninComponent
  ],
  imports: [
    CommonModule,
    MDBBootstrapModule.forRoot(),
    AuthRoutingModule,
    FormsModule,
  ]
})
export class AuthModule { }
