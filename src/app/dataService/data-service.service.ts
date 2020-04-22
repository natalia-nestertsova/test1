import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from '../interface/contact';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})

export class DataService {
  source = 'https://5e981b765eabe7001681bad5.mockapi.io/test/contacts';

  constructor(private http: HttpClient) {}

  getContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>(this.source);
  }

  addContact(contact: Contact) {
   return this.http.post<Contact>(this.source, contact);
  }

  addFavorite(contact: Contact) {
    return this.http.put<Contact>(this.source + '/' + contact.id, contact);
  }

  deleteContact(id: string) {
    return this.http.delete<Contact>(this.source + '/' + id);
  }
}
