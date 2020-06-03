import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AuthRoutingModule } from './auth-routing.module';

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
    FormsModule
  ]
})
export class AuthModule { }
