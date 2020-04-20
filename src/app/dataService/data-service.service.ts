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

  getContacts(): Observable<any> {
  // getContacts(): Observable<Contact[]> {
    return this.http.get(this.source);
    // this.http.get(this.source).subscribe((data: Contact[]) => { this.contacts = data; console.log(this.contacts)} );
    // this.http.get(this.source).pipe(
    //   tap(data => this.contacts = data)
    // );
    // console.log(this.contacts);
    // .subscribe((data: Contact[]) => { this.contacts = data; console.log(this.contacts)} );
    // this.contacts = this.http.get(this.source).subscribe();
    // console.log(this.contacts);
    // if (!!this.contacts) {
    //   console.log(this.contacts);
    //   return this.contacts;
    // }
    // return this.contacts;

    // return this.http.get(this.source);


    // return this.http.get(this.source);
    //  this.contacts = this.http.get(this.source); // work

    //  .pipe(
    //    map(contact => console.log(contact))
    //    );
    //  console.log( this.http.get(this.source, 2));

    //  return this.contacts;


    // return this.contacts$;
  }

  addContact(contact: Contact) {
    // this.contacts = [...this.contacts, { id: this.contacts.length, ...contact }];
    // console.log(...contact);
    // this.contacts = [...this.contacts, contact];
    // this.contacts$.pipe(merge(contact));
    // this.contacts$.subscribe((arr) => {
    //   // arr.next(contact);
    //   // arr = [...arr, contact];
    //   arr.push(contact);
    // //  arr = this.contacts = [...this.contacts, contact];
    //   // arr = [...arr, contact];
    // });
    // console.log(this.contacts);
    console.log(contact);
    // console.log('new');
    // return this.http.post(this.source, contact);
    // console.log(this.http.post('assets/contacts.json', contact)) ;
    this.http.post(this.source, contact).subscribe((c) => {
      console.log(c);
    });

    return this.contacts;
    // return this.http.get(this.source);
  }
  addFavorite(contact) {
    // console.log(id);
    this.http.put(this.source + '/' + contact.id, contact).subscribe();
    // this.contacts = [...contact, ...this.contacts];
    // console.log(this.contacts);
  }
  addToFavorite(i: number) {
    // this.contacts[i].favorite = !this.contacts[i].favorite;
  }
  deleteContact(id) {
    // this.contacts$.subscribe((arr) => {
    //   // arr.next(contact);
    //   this.contacts = this.contacts.filter((obj) => {
    //     console.log(obj);
    //     // obj.id !== id
    // });
    // });
    // this.http.delete(this.source + `/${id}`, id);
    // .subscribe( () =>
    return this.http.delete(this.source + '/' + id);
    // return this.contacts;
    // this.http.get(this.source)
    // console.log('delete')
    // )
  }
  // this.contacts.find((contact) => {
  //   return contact.id === id;
  // })
}
