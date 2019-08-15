import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { RouterModule } from '@angular/router';


const COMPONENTS = [
  HomeComponent, 
  SidenavComponent
]
@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ...COMPONENTS
  ]
})
export class PortfolioModule { }
