import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
contacts = [
  {firstName: 'Иван',
  lastName: 'Иванов',
  patronymic: 'Иванович',
  phone: '+7696666667',
  favorite: false},
  {firstName: 'Иван1',
  lastName: 'Иванов1',
  patronymic: 'Иванович1',
  phone: '+7696666667',
  favorite: false},
  {firstName: 'Иван2',
  lastName: 'Иванов2',
  patronymic: 'Иванович2',
  phone: '+7696666667',
  favorite: false},
];
}
