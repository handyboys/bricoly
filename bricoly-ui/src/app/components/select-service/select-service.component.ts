import { Component, ViewChild, OnInit, Input, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

import { SelectCategoryComponent } from './../select-category/select-category.component'



@Component({
  selector: 'app-select-service',
  templateUrl: './select-service.component.html',
  styleUrls: ['./select-service.component.scss']
})
export class SelectServiceComponent implements OnInit {
  @Input() categoryId
  constructor(private http: HttpClient,
    private activatedRoute: ActivatedRoute,
    ) {}

  ngOnInit(): void {

  }

}
