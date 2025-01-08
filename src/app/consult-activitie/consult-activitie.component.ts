import { Component } from '@angular/core';
import { TestServiceService } from '../test-service.service';
import { CommonModule } from '@angular/common';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-consult-activitie',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './consult-activitie.component.html',
  styleUrl: './consult-activitie.component.scss'
})
export class ConsultActivitieComponent {
  numAct = 0
  description : String = ""
  constructor(private unRouteur: ActivatedRoute, 
    private monService: TestServiceService){
      this.numAct = unRouteur.snapshot.params['numAct']
      this.description = monService.objectifs[this.numAct]
  }
  edit(){
    
  }
}
