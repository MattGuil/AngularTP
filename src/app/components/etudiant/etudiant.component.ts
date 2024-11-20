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
}
