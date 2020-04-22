import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableComponent } from './table.component';
import { DataService } from '../dataService/data-service.service';
import { ContactFormComponent } from '../contact-form/contact-form.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;
  let service: DataService;
  const contacts = [
    {
      id: '14',
      patronymic: 'ss',
      phone: '+70413947623',
      favorite: false,
      firstName: 'new',
      lastName: 'ff',
    },
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TableComponent],
      providers: [DataService, ContactFormComponent],
      imports: [HttpClientTestingModule],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(async () => {
    fixture = TestBed.createComponent(TableComponent);
    service = TestBed.get(DataService);
    component = fixture.componentInstance;
    component.contacts = contacts;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('button addToFavorites should add', async () => {
    fixture.detectChanges();

    spyOn(component, 'addToFavorites');
    const add = fixture.nativeElement.querySelector('.selectFavorite');
    add.click();
    expect(component.addToFavorites).toHaveBeenCalled();
  });
  it('button addToFavorites should add', async () => {
    fixture.detectChanges();

    spyOn(component, 'addToFavorites');
    const add = fixture.nativeElement.querySelector('.selectFavorite');
    add.click();
    expect(component.addToFavorites).toHaveBeenCalled();

  });
  it('button deleteContact should delete', async () => {
    const id = '12';
    fixture.detectChanges();

    spyOn(component, 'deleteContact');
    const del = fixture.nativeElement.querySelector('.deleteContact');
    del.click();
    expect(component.deleteContact).toHaveBeenCalled();
    component.deleteContact(id);
    expect(component.deleteContact).toBeTruthy();
  });

  it('button loadContacts should load', async () => {
    fixture.detectChanges();
    spyOn(component, 'loadContacts');
    component.ngOnInit();
    expect(component.loadContacts).toHaveBeenCalled();
  });
});
