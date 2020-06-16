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
    if (city == "0") city = undefined;
    if (category_id == 0) category_id = undefined;
    // var filteredProfs: ProfDetails[] = profDetails;
    // if (category_id) {
    //   filteredProfs = profDetails.filter(professional => {
    //     // Replacing undefined values with current professional corresponding property
    //     // To avoid falsy evaluation of return statement due to undefined values
    //     // category_id = category_id || professional.category_id;
    //     // city = city || professional.adress;

    //     console.log(`Filtering professional ${professional.first_name}, prof_cat_id ${professional.category_id}, prof_city ${professional.adress}`)
    //     console.log(`Filter conditions: cat_id: ${category_id}`)
    //     if (category_id == 0) category_id = professional.category_id;
    //     return professional.category_id == category_id;
    //   });
    // }

    // if (city) {
    //   filteredProfs = filteredProfs.filter(professional => {
    //     // Replacing undefined values with current professional corresponding property
    //     // To avoid falsy evaluation of return statement due to undefined values
    //     // category_id = category_id || professional.category_id;
    //     // city = city || professional.adress;

    //     console.log(`Filtering professional ${professional.first_name}, prof_cat_id ${professional.category_id}, prof_city ${professional.adress}`)
    //     console.log(`Filter conditions: city ${city}`)

    //     return professional.adress == city;
    //   });
    // }
    
    var filteredProfs = profDetails.filter(professional => {
      if (category_id && professional.category_id != category_id) {
        return false;
      } else if (city && professional.adress != city) {
        return false;
      }
      return true;
    })

    console.log(filteredProfs)
    return filteredProfs;
  }

}
