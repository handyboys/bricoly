import { Component, OnInit } from '@angular/core';
import { ClientType } from '../../models/client-type/client-type.model'

@Component({
  selector: 'app-client-type',
  templateUrl: './client-type.component.html',
  styleUrls: ['./client-type.component.scss']
})
export class ClientTypeComponent implements OnInit {
  clientType: ClientType ;
  
  constructor() { }

  ngOnInit(): void {
  }

}
