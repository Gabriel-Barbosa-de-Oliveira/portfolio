import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogStructureComponent } from './catalog-structure/catalog-structure.component';

const COMPONENTS = [
  CatalogStructureComponent
]

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
  ],
  exports: [...COMPONENTS]
})
export class StructureModule { }

