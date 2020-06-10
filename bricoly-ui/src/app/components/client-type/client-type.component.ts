import { Component, OnInit,Input ,Output,EventEmitter } from '@angular/core';
import { HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-client-type',
  templateUrl: './client-type.component.html',
  styleUrls: ['./client-type.component.scss']
})
export class ClientTypeComponent implements OnInit {
  client_type: string = null;
  related_info: string = null;
 @Output () selectClientTypeEvent = new EventEmitter<string>();
 @Output () selectRelatedInfoEvent = new EventEmitter<string>();
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
  onClick(selectedType){
    this.selectClientTypeEvent.emit(selectedType)
  }

  setRelatedInfo(value){
    this.selectClientTypeEvent.emit(value)
  }

  get diagnostic() { return JSON.stringify(this.client_type) }
}
