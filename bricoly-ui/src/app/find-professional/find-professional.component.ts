import { Component, OnInit } from '@angular/core';

import { ProfDetails } from '../interfaces/profDetails/prof-details';
import { FindProfessionalService } from '../services/findProfessional/find-professional.service';

@Component({
  selector: 'app-find-professional',
  templateUrl: './find-professional.component.html',
  styleUrls: ['./find-professional.component.scss']
})
export class FindProfessionalComponent implements OnInit {

  profDetails: ProfDetails [];

  constructor(private findProf: FindProfessionalService) { 
    this.findProf.getAllProfessionals()
    .subscribe((data :ProfDetails [])=>{
      
       this.profDetails = data;
       console.log('FIND PROFFFFF', data)
       });  
  }

  ngOnInit(): void {
   
    
  }

}
