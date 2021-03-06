import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactFormComponent } from './contact-form.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {
  HttpClientTestingModule,
} from '@angular/common/http/testing';

describe('ContactFormComponent', () => {
  let component: ContactFormComponent;
  let fixture: ComponentFixture<ContactFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ContactFormComponent],
      imports: [FormsModule, ReactiveFormsModule, HttpClientTestingModule],
    }).compileComponents();
  }));

  beforeEach(async() => {
    fixture = TestBed.createComponent(ContactFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('form phone invalid when empty', () => {
    expect(component.contactForm.value.phone.valid).toBeFalsy();
  });
  it('form lastName invalid when empty', () => {
    expect(component.contactForm.value.lastName.valid).toBeFalsy();
  });
  it('lastName field validity', () => {
    const lastName = component.contactForm.controls['lastName'];
    expect(lastName.valid).toBeFalsy();

    lastName.setValue('');
    expect(lastName.hasError('required')).toBeTruthy();

    lastName.setValue('A');
    expect(lastName.valid).toBeTruthy();
  });
  it('addContact', () => {
    fixture.detectChanges();

    component.contactForm.controls['firstName'].setValue('firstName3');
    component.contactForm.controls['lastName'].setValue('lastName3');
    component.contactForm.controls['patronymic'].setValue('patronymic3');
    component.contactForm.controls['phone'].setValue('+72325326451');

    spyOn(component, 'addContact');
    const el = fixture.nativeElement.querySelector('button');
    el.click();
    console.log(el);
    console.log(component);
    expect(component.addContact).toHaveBeenCalled();
  });
  it('add', () => {
    fixture.detectChanges();
    spyOn(component, 'add');
    const el = fixture.nativeElement.querySelector('button');
    el.click();
    expect(component.add).toHaveBeenCalled();
  });

  it('add', () => {
    fixture.detectChanges();
    spyOn(component.addNewContact, 'emit');
    const el = fixture.nativeElement.querySelector('button');
    el.dispatchEvent(new Event('click'));
    fixture.detectChanges();
    expect(component.addNewContact.emit).toHaveBeenCalled();
  });

  it('phone field validity true', () => {
    const phone = component.contactForm.controls['phone'];
    fixture.detectChanges();
    phone.setValue('+72223322928');
    expect(phone.value).toBeTruthy();
  });
    it('phone field minLength error', () => {
    const phone = component.contactForm.controls['phone'];

    fixture.detectChanges();
    phone.setValue('+73631254687');
    console.log(phone.hasError('minLength'));
    expect(phone.hasError('minLength')).toBeFalsy();

  });
});
