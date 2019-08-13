import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogStructureComponent } from './catalog-structure.component';

describe('CatalogStructureComponent', () => {
  let component: CatalogStructureComponent;
  let fixture: ComponentFixture<CatalogStructureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogStructureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
