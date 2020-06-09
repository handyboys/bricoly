import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { JobDraft } from './../../models/jobDraft/jobDraft.model';

@Component({
  selector: 'app-service-type',
  templateUrl: './service-type.component.html',
  styleUrls: ['./service-type.component.scss']
})
export class ServiceTypeComponent implements OnInit {
  selectService: string = null;
  @Output () selectServiceTypeEvent = new EventEmitter<string>();
  constructor() { }
  
  // sendCategory(selectedType){
  //   console.log('selectcategory com : ',selectedType)
  //   this.selectServiceTypeEvent.emit(selectedType)
  // }
  
  ngOnInit(): void {
  }
  onClick(selectedType){
    console.log(this.selectService)
    this.selectServiceTypeEvent.emit(selectedType)
  }
  get diagnostic() { return JSON.stringify(this.selectService) }
}
