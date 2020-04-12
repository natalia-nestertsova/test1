import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataService } from '../dataService/data-service.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
})

export class ContactFormComponent {
  firstName = 'Имя';
  lastName = 'Фамилия';
  patronymic = 'Отчество';
  phone = 'Телефон';

  contactForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(
      '',
       Validators.required
       ),
    patronymic: new FormControl(''),
    phone: new FormControl('+7',
     [
        // Validators.required,
        // Validators.minLength(11),
        // Validators.pattern('^[\+]?(7)[0-9]{10}')
      ]
        ),
    favorite: new FormControl(false),
  });

  constructor(private contactsData: DataService) {}

  addContact() {
    if (!!this.contactForm.valid) {
      this.contactsData.contacts.push(this.contactForm.value);
      this.contactForm.reset();
    }
  }
}
