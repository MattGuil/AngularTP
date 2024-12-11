import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  animations: [ trigger('animobjectifs', [
    transition ( '*=>*', [
      query(':enter', style({opacity: 0}), {optional: true}),
      query(':enter', stagger('300ms',[ animate ( '.9s ease-in' , keyframes ([
      style({opacity: 0, transform: 'translateY(-75%)', offset: 0, backgroundColor: "lightblue",}), style({opacity: .5, transform: 'translateY(35px)', offset: .3,  backgroundColor: "aero",}),
      style({opacity: 1, transform: 'translateY(0)', offset: 1,  backgroundColor: "airsuperiorityblue",}), ]))]),{optional: true})
    ])
  ]) ]
})
export class HomeComponent {
  objectifs: String[] = [];
  nbItems: number = 4;
  btnText: String = "";
  
  ngOnInit() {
    this.nbItems = 0;
  }

  ajoutItem() {
    this.objectifs.push(this.btnText);
    this.nbItems = this.objectifs.length;
  }
}
