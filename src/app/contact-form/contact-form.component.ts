import { Component, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { DataService } from '../dataService/data-service.service';
import { Fields } from '../definition/fields';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ContactFormComponent {
  fields: typeof Fields = Fields;
  PHONE_MASK = new RegExp(/^[+]*7[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g);
  contactForm = this.fb.group({
    firstName: [''],
    lastName:  ['', Validators.required],
    patronymic: [''],
    phone: ['+7',
     [
        Validators.required,
        Validators.pattern( this.PHONE_MASK ),
        Validators.minLength(11)
      ]
    ],
    favorite: [false],
  });

  constructor(private contactsData: DataService, private fb: FormBuilder) {}

  @Output() addNewContact = new EventEmitter<boolean>();
  add() {
      this.addNewContact.emit();
  }

  addContact() {
    if (this.contactForm.valid) {
      this.contactsData.addContact(this.contactForm.value).subscribe();
      this.contactForm.reset();
    }
      this.add();
  }
}
