import { Component, OnInit } from '@angular/core';
import { ProfDetails } from '../../interfaces/profDetails/prof-details';
import { FindProfessionalService } from '../../services/findProfessional/find-professional.service'
import { JobPostService } from '../../services/jobPost/job-post.service';
import { Category } from '../../models/category/category.model';
import { CITIES } from '../../../../cities.js'

@Component({
  selector: 'app-find-professional',
  templateUrl: './find-professional.component.html',
  styleUrls: ['./find-professional.component.scss']
})
export class FindProfessionalComponent implements OnInit {

  profDetails: ProfDetails[];
  categories: Category[];
  cities: string[] = Object.keys(CITIES);

  // Filter props
  selectedCategoryId: number;
  selectedCity: string;

  constructor(private findProf: FindProfessionalService, private findCat: JobPostService) {

    this.findProf.getAllProfessionals()
      .subscribe((data: ProfDetails[]) => {
        this.profDetails = data;
        console.log('FIND PROFFFFF', data)
      });

  }

  // onActivate(elementRef){
  //   console.log(elementRef)
  //   if (elementRef.filterEvent){
  //       elementRef.filterEvent.subscribe((event)=> {
  //         console.log("EVENTTT", event)
  //         this.myFilter = event

  //     });
  //   }
  // }

  // receiveFilter($event) {
  //   this.myFilter = $event;

  //   if (this.myFilter) {

  //     console.log("FILTERRRR", this.myFilter);
  //     return this.profDetails.filter(profDetail => {
  //       return profDetail.category_id == this.myFilter.category;
  //     });
  //   }
  // }




  get diagnostic() { return `${this.selectedCategoryId}, ${this.selectedCity}` }

  ngOnInit(): void {
    this.findCat.getCategories()
      .subscribe((result: Category[]) => {
        this.categories = result;
      });
  }

}
