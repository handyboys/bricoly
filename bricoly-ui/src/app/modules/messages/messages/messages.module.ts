import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MessagesComponent} from '../../../components/messages/messages.component';
import { MessagesRoutingModule } from './messages-routing.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MessagesComponent
  ],

  imports: [
    CommonModule,
    MDBBootstrapModule.forRoot(),
    MessagesRoutingModule,
    FormsModule

  ]

})
export class MessagesModule { }
