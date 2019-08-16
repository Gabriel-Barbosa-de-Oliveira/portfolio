import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyWorkRoutingModule } from './my-work-routing.module';
import { MyWorkComponent } from './my-work/my-work.component';
import { StructureModule } from '../structure/structure.module';

@NgModule({
  declarations: [MyWorkComponent],
  imports: [
    CommonModule,
    StructureModule,
    MyWorkRoutingModule
  ]
})
export class MyWorkModule { }
