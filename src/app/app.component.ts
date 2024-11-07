import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EtudiantComponent } from './components/etudiant/etudiant.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EtudiantComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'tp1';
  estAuth = false;

  students = [
    { nomEtu: 'Ghomashi', prenomEtu: 'Houman', statutEtu: 'absent' },
    { nomEtu: 'Drouin', prenomEtu: 'Solène', statutEtu: 'absent' },
    { nomEtu: 'Hostache', prenomEtu: 'Guillaume', statutEtu: 'absent' }
  ];

  constructor() {
    setTimeout(() => {
      this.estAuth = true;
    }, 5000);

    console.log(this.students);
  }

  rendTousPresents() {
    this.students.forEach(student => {
      student.statutEtu = 'présent';
    });
    console.log("Tous les étudiants sont présents !");
  }
}
