import { Component, ViewChild, OnInit, Input ,Output,EventEmitter  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import {Service} from './../../models/service/service.model';

import { SelectCategoryComponent } from './../select-category/select-category.component'



@Component({
  selector: 'app-select-service',
  templateUrl: './select-service.component.html',
  styleUrls: ['./select-service.component.scss']
})
export class SelectServiceComponent implements OnInit {

  services: Service[] = [];
  @Output () selectServiceEvent = new EventEmitter<object>();
  constructor(private http: HttpClient,
    private activatedRoute: ActivatedRoute,
    ) {}

    selectService(id) {
      return this.http.get<any>(`http://localhost:8080/jobPost/services/${id}`);
    }
    sendService(selectedService){
     this.selectServiceEvent.emit(selectedService)
    }
  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params.id;
    console.log(id)
    this.selectService(id).subscribe(
      (result) => {
        console.log('res', result);
        this.services = result;

      },
      (error) => {
        console.log('error fetching services', error);
      }
    );
  }

}
