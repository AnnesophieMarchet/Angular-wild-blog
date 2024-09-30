import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Form } from '../model/form.model';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss',
})
export class ContactFormComponent {
  newMessage: Form = {
    lastname: '',
    firstname: '',
    email: '',
    content: '',
  };

  onSubmit(): void {
    console.log(this.newMessage);
  }
}
