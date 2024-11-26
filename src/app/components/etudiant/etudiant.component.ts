import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-etudiant',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './etudiant.component.html',
  styleUrl: './etudiant.component.scss'
})
export class EtudiantComponent {
  
  @Input() nomEtu = "Bon";
  @Input() prenomEtu = "Jean";
  @Input() statutEtu = "absent";
  @Input() commentaire = "";
  derniereDateModif = new Date();

  retNomEtu(): string {
    return this.nomEtu;
  }

  retPrenomEtu(): string {
    return this.prenomEtu;
  }

  retStatutEtu(): string {
    return this.statutEtu;
  }

  retCommentaire(): string {
    return this.commentaire;
  }

  retDerniereDateModif(): string {
    return this.derniereDateModif.toString();
  }

  isAbsent(): boolean {
    return this.statutEtu == "absent";
  }

  setAbsent(): void {
    this.statutEtu = "absent";
    this.derniereDateModif = new Date();
  }

  setPresent(): void {
    this.statutEtu = "present";
    this.derniereDateModif = new Date();
  }
}
