import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { DataService } from '../dataService/data-service.service';
import { Fields } from '../definition/fields';
import { Contact } from '../interface/contact';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent implements OnInit {
  contacts;
  fields: typeof Fields = Fields;
  constructor(private contactsData: DataService, private cd: ChangeDetectorRef) {}

  ngOnInit() {
    this.loadContacts();
  }

  loadContacts() {
    this.contactsData.getContacts().subscribe((data) => {
      data.sort((el1, el2) => +el2.favorite - +el1.favorite);
      this.contacts = data;
      this.cd.markForCheck();
    });

  }
  deleteContact(id: string) {
    this.contactsData.deleteContact(id).subscribe(() => {
      this.loadContacts();
    });
  }
  addToFavorites(contact: Contact) {
    contact.favorite = !contact.favorite;
    this.contactsData.addFavorite(contact).subscribe();
  }
}
