import { Component } from '@angular/core';
import { UserForm } from '../userForm';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  model: UserForm = new UserForm ("","","","")

  constructor(){}

  onSubmit(): void {
    console.log('Formulaire envoyé avec succès!');
    console.log(this.model);
  }

}
