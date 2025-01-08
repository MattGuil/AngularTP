import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})

export class AboutComponent {

  public param: String = "truc";

  constructor(private monActRoot: ActivatedRoute) {
    if (this.monActRoot.snapshot.params['toto'])
      this.param = monActRoot.snapshot.params['toto'];
      this.param = monActRoot.snapshot.params['toto'];
  }

}
