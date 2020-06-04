import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-select-category',
  templateUrl: './select-category.component.html',
  styleUrls: ['./select-category.component.scss']
})
export class SelectCategoryComponent implements OnInit {
  category;
  constructor( private http:HttpClient) {}

  ngOnInit(): void {
  this.category.http.get('http://localhost:8080/select-category').subscribe(data =>{ 
    this.category = data;
  })
  }

}
