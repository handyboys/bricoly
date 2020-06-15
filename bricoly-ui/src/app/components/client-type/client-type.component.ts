import { Component, OnInit,Input ,Output,EventEmitter } from '@angular/core';
import { HttpClient} from '@angular/common/http';

import { ClientType } from '../../interfaces/client-type';


@Component({
  selector: 'app-client-type',
  templateUrl: './client-type.component.html',
  styleUrls: ['./client-type.component.scss']
})
export class ClientTypeComponent implements OnInit {
  @Output () selectClientTypeEvent = new EventEmitter<ClientType>();
 
  clientType: ClientType = {
    type: null,
    related_info: null
  }

  canProceed = this.clientType.related_info && this.clientType.type;
 
  constructor( private http:HttpClient ) { 
    // this.getClientTypes() ;
  }

  // getClientTypes(){
  //   this.http.get(serverUrl).subscribe((data: JobDraft[]) =>{
  //     this.selectClientType = data
  //     console.log(this.selectClientType)
  //   })
  // }

  // sendClientType(selectedType){
  //   console.log('select client type com : ',selectedType)
  //   this.selectClientTypeEvent.emit(selectedType)
  // }

  ngOnInit(): void {
  }
  onClick(){
    this.selectClientTypeEvent.emit(this.clientType)
  }

  

  get diagnostic() { return JSON.stringify(this.clientType) }
}
