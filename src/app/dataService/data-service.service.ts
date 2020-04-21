import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from '../interface/contact';
import { HttpClient } from '@angular/common/http';
// import { map } from 'rxjs/operators';
import { tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  contacts$: Observable<Contact[]>;
  // source = 'assets/contacts.json';
  source = 'https://5e981b765eabe7001681bad5.mockapi.io/test/contacts';
  contacts;
  // httpOptions = {
  //   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  // };

  constructor(private http: HttpClient) {}

  getContacts(): Observable<Contact[]> {
  // getContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>(this.source);

  }

  addContact(contact: Contact) {
   return this.http.post<Contact>(this.source, contact);
    // this.http.post(this.source, contact).subscribe();
    // return this.contacts$;
  }
  addFavorite(contact: Contact) {
    return this.http.put<Contact>(this.source + '/' + contact.id, contact);
  }

  deleteContact(id: string) {
    return this.http.delete(this.source + '/' + id);
  }
}
