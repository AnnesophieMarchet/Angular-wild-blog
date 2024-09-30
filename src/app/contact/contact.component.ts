import { Component } from '@angular/core';
import { ContactFormComponent } from '../contact-form/contact-form.component';
import { SignupFormComponent } from '../signup-form/signup-form.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ContactFormComponent, SignupFormComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {}
