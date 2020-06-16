import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../models/user/user.model';
import { Category } from '../models/category/category.model';
import { ProfDetails } from '../interfaces/profDetails/prof-details';

@Pipe({
  name: 'filterProfessionals'
})
export class FilterProfessionalsPipe implements PipeTransform {

  transform(profDetails: ProfDetails[], category_id: number): ProfDetails[] {
    if (!profDetails) return [];
    if (!category_id) return profDetails;
    var filteredProfs = profDetails.filter(professional => {
      console.log(`Filtering professional ${professional.first_name}, prof_cat_id ${professional.category_id}, f_cat_id ${category_id}`)
      return professional.category_id == category_id
    });
    console.log('PIPE Engaged, category : ', category_id, filteredProfs)
    return filteredProfs;
  }

}
