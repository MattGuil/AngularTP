import { Component } from '@angular/core';
import { TestServiceService } from '../test-service.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
	selector: 'app-consult-activitie',
	standalone: true,
	imports: [CommonModule, FormsModule],
	templateUrl: './consult-activitie.component.html',
	styleUrl: './consult-activitie.component.scss'
})

export class ConsultActivitieComponent {
	numAct = 0
	description: String = ""
	inputFieldDesc: String = " "
	isEditing: Boolean = false
	constructor(
		private actRout: ActivatedRoute, 
		private monRouter: Router,
		private monService: TestServiceService
	) {
		this.numAct = actRout.snapshot.params['numAct'];
		this.description = monService.objectifs[this.numAct];
		this.inputFieldDesc = this.description;
	}

	edit() {
		this.isEditing = true;

	}

	save() {
		this.isEditing = false;
		this.monService.mettreAJourItem(this.numAct, this.inputFieldDesc);
		this.description = this.inputFieldDesc;
	}

	retour() {
		this.monRouter.navigate(['accueil']);
	}

	supprimer() {
		this.monService.removeItem(this.numAct);
		this.monRouter.navigate(['accueil']);
	}
}
