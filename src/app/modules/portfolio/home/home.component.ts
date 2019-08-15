import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  showFirstText: boolean = true;
  showSecondText: boolean = false;
  showThirdText: boolean = false;
  lineBreakFirstText: string = 'none';
  lineBreakSecondText: string = 'none';

  constructor() { }

  ngOnInit() {
    this.breakFirstText();
    this.revealSecondText();
  }

  breakFirstText() {
    setTimeout(() => {
      this.lineBreakFirstText = 'line-through';
    }, 2500);
  }

  revealSecondText() {
    setTimeout(() => {
      this.showSecondText = true;
    }, 2500);
    this.breakSecondText();
  }

  breakSecondText() {
    setTimeout(() => {
      this.lineBreakSecondText = 'line-through';
      this.showThirdText = true;
    }, 6600);
  }




}
