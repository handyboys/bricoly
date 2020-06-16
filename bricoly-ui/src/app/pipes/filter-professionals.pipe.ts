import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../models/user/user.model';
import { Category } from '../models/category/category.model';
import { ProfDetails } from '../interfaces/profDetails/prof-details';

@Pipe({
  name: 'filterProfessionals'
})
export class FilterProfessionalsPipe implements PipeTransform {

  transform(profDetails: ProfDetails[], category_id: number, city: string): ProfDetails[] {
    console.log(`PIPE engaged, cat_id: ${category_id}, city: ${city}`)
    if (!profDetails) return [];
    if (!category_id && !city) return profDetails;
    
    // handling default option selection
    // See components/find-professional/find-professional.component.html lines 7,15
    if (city == "0") city = undefined;
    if (category_id == 0) category_id = undefined;
    
    return profDetails.filter(professional => {
      if (category_id && professional.category_id != category_id) {
        return false;
      } else if (city && professional.adress != city) {
        return false;
      }
      return true;
    })
  }

}
