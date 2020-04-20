import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DataService } from '../dataService/data-service.service';
import { Fields } from '../definition/fields';
// import { from } from 'rxjs';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent implements OnInit {
  contacts;
  subscribe;
  fields: typeof Fields = Fields;
  constructor(private contactsData: DataService) {}

  ngOnInit() {
    // this.contacts = this.contactsData.contacts;
    // this.contacts = this.contactsData.getContacts();
    // console.log(this.contacts);

    // this.contacts = this.contactsData.getContacts();

    this.loadContacts();
  }
  loadContacts() {
    // this.contacts = this.contactsData.getContacts();
    this.contacts = this.contactsData.getContacts();
    // console.log(this.contacts);
    // return this.contactsData.getContacts();
    // this.contactsData.getContacts().subscribe((data)=>this.contacts=data );
    //  this.contactsData.getContacts()
    // .subscribe((value) => {
    //   this.contacts = value;
    //   console.log(this.contacts);
    // });

    // console.log(this.subscribe);
    // console.log(this.contacts);
  }
  deleteContact(id) {
    // return this.contactsData.contacts.splice(i, 1);
    // this.contactsData.getContacts().subscribe((value) => {
    // this.contacts = value;
    // });
    this.contactsData.deleteContact(id).subscribe(() => {
      this.loadContacts();
    });
    //  pipe(() => {

    //   this.contacts = this.contactsData.getContacts();
    // });
  }
  // addToFavorites(i: number) {
  //   this.contactsData.addToFavorite(i);
  //   this.moveContact(i);
  // }
  addToFavorites(contact) {
    contact.favorite = !contact.favorite;
    this.contactsData.addFavorite(contact);
    // this.contactsData.contacts[i].favorite = !this.contactsData.contacts[i]
    //   .favorite;
    // this.moveContact(i);
  }
  moveContact(i: number) {
    // if (!!this.contactsData.contacts[i].favorite) {
    //   const favorite = this.deleteContact(i);
    //   // this.contactsData.contacts.unshift(...favorite);
    //   // this.contactsData.contacts = [...favorite, this.contactsData];
    //   // this.contacts = [{...favorite}, ...this.contacts];
    //   // this.contactsData.addFavorite(...favorite);
    // } else {
    //   const favorite = this.deleteContact(i);
    //   // this.contactsData.contacts.push(...favorite);
    //   // this.contacts = [...this.contacts, {...favorite}];
    //   // this.contactsData.addContact(favorite);
    // }
    // // this.contacts = this.contactsData.contacts;
  }
}
