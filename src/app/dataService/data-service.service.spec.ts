import { TestBed } from '@angular/core/testing';

import { DataService} from './data-service.service';
import {
  HttpClientTestingModule,
} from '@angular/common/http/testing';

let fixture;
let dataService;
let component;

describe('DataService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule
      ]
  }));

  beforeEach(async () => {
    fixture = TestBed.get(DataService);
    dataService = jasmine.createSpyObj('DataService', {
        getContacts: 'get Contacts',
        addContact: 'add Contact',
        addFavorite: 'add Favorite',
        deleteContact: 'delete Contact'
      });
    component = fixture.componentInstance;

  });
  it('should be created', () => {
    expect(dataService).toBeTruthy();
  });
  it('should be created', () => {
    dataService.addFavorite();
    expect(dataService.addFavorite).toBeTruthy();
  });
  it('getContacts should return', () => {
    expect(dataService.getContacts()).toBe('get Contacts');
  });
  it('addContact should return', () => {
    expect(dataService.addContact()).toBe('add Contact');
  });
  it('addFavorite should return', () => {
    expect(dataService.addFavorite()).toBe('add Favorite');
  });
  it('deleteContact should return', () => {
    expect(dataService.deleteContact()).toBe('delete Contact');

  });
});

