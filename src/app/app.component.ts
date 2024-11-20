import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EtudiantComponent } from './components/etudiant/etudiant.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EtudiantComponent, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'tp1';
  estAuth = false;
  etat = "absent";
  commentaireSeance = "";

  students = [
    { nomEtu: 'Ghomashi', prenomEtu: 'Houman', statutEtu: 'absent' },
    { nomEtu: 'Drouin', prenomEtu: 'Solène', statutEtu: 'absent' },
    { nomEtu: 'Hostache', prenomEtu: 'Guillaume', statutEtu: 'absent' }
  ];

  constructor() {
    console.log(this.students);
  }

  rendTousPresents() {
    this.students.forEach(student => {
      student.statutEtu = 'present';
    });
    this.etat = "present";
    console.log("Tous les étudiants sont présents !");
  }

  rendTousAbsents() {
    this.students.forEach(student => {
      student.statutEtu = 'absent';
    });
    this.etat = "absent";
    console.log("Tous les étudiants sont absents !");
  }
}
