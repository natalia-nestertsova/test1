import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableComponent } from './table.component';
import { DataService } from '../dataService/data-service.service';
import { ContactFormComponent } from '../contact-form/contact-form.component';

describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TableComponent],
      providers: [
        DataService,
        ContactFormComponent, //
        ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
  // it('button addToFavorites should add', () => {
  //   fixture.detectChanges();

  //   spyOn(component, 'addToFavorites');
  //   const add = fixture.nativeElement.querySelector('.selectFavorite');
  //   add.click(1);
  //   expect(component.addToFavorites).toHaveBeenCalled();
  // });

  // it('button deleteContact should delete', () => {
  //   fixture.detectChanges();

  //   spyOn(component, 'deleteContact');
  //   const del = fixture.nativeElement.querySelector('.deleteContact');
  //   del.click();
  //   expect(component.deleteContact).toHaveBeenCalled();
  // });
});
