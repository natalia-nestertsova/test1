import { Component, OnInit } from '@angular/core';
import { DataService } from '../dataService/data-service.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  contacts;
  isSelect = false;
  constructor(private contactsData: DataService) {}

  ngOnInit() {
    this.contacts = this.contactsData.contacts;
  }
  deleteContact(i) {
    return this.contactsData.contacts.splice(i, 1);
  }
  addToFavorites(i) {
    this.contactsData.contacts[i].favorite = !this.contactsData.contacts[i]
      .favorite;
    this.moveToUp(i);
  }
  moveToUp(i) {
    if (!!this.contactsData.contacts[i].favorite) {
      const favorite = this.deleteContact(i);
      this.contactsData.contacts.unshift(...favorite);
    } else {
      const favorite = this.deleteContact(i);
      this.contactsData.contacts.push(...favorite);
    }
  }
}
