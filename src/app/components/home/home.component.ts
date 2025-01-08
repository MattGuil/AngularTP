import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  animations: [trigger('toto', [
    transition('*=>*', [
      query(':enter', style({ opacity: 0 }), { optional: true }),
      query(':enter', stagger('300ms', [animate('.9s ease-in', keyframes([
        style({ opacity: 0, transform: 'translateX(-75%)', offset: 0, backgroundColor: "lightblue", }),
        style({ opacity: .5, transform: 'translateY(35px)', offset: .3, backgroundColor: "red", }),
        style({ opacity: 1, transform: 'translateX(0)', offset: 1, backgroundColor: "airsuperiorityblue", }),]))]), { optional: true })
    ])])]
})
export class HomeComponent {
  objectifs: String[] = [];
  nbItems: number = 4;
  btnText: String = "";

  constructor(private monRouteur: Router) {

  }

  ngOnInit() {
    this.nbItems = 0;
  }

  ajoutItem() {
    this.objectifs.push(this.btnText);
    this.nbItems = this.objectifs.length
    setTimeout(() => {
      this.monRouteur.navigate(['about']);
    }, 3000);
  }
  getExplicitClass() {
    if (this.btnText == "..." || this.btnText == "") {
      return 'btn'
    } else {
      return 'btnok'
    }
  }
}
