import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { SkillsComponent } from './skills/skills.component';


const COMPONENTS = [
  HomeComponent, 
  SidenavComponent
]
@NgModule({
  declarations: [...COMPONENTS, ContactComponent, SkillsComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ...COMPONENTS
  ]
})
export class PortfolioModule { }
