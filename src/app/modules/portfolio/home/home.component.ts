import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {trigger, state, animate, style, transition} from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('simpleFadeAnimation', [
      state('in', style({opacity: 1})),
      transition(':enter', [
        style({opacity: 0}),
        animate(1000)
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {
  showFirstText: boolean = true;
  showSecondText: boolean = false;
  showThirdText: boolean = false;
  lineBreakFirstText: string = 'none';
  lineBreakSecondText: string = 'none';

  constructor(private _router: Router) { }

  ngOnInit() {
    this.breakFirstText();
    this.revealSecondText();
  }

  breakFirstText() {
    setTimeout(() => {
      this.lineBreakFirstText = 'line-through';
    }, 1500);
  }

  revealSecondText() {
    setTimeout(() => {
      this.showSecondText = true;
    }, 1500);
    this.breakSecondText();
  }

  breakSecondText() {
    setTimeout(() => {
      this.lineBreakSecondText = 'line-through';
      this.showThirdText = true;
    }, 3000);
  }

  redirectToContact() {
    this._router.navigate(['/contact']);
  }

  redirectToPortfolio(){
    this._router.navigate(['/my-work']);

  }

}
