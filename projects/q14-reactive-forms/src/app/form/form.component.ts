import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { User } from '../models/user.model';
import { emailValidator } from '../email-validator';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit{

formSubmitted : boolean = false;

public userList!: User[];

public newUser = new User(null,{email:null, password:null},{street:null,city:null,number:null});

userForm = this.fb.group({
  userName : ['', Validators.required],
  credentials: this.fb.group({
    email : ['', [Validators.required, emailValidator, Validators.email]],
    password : [''],
  }),
  adress : this.fb.group({
    street : [''],
    city : [''],
    number: [''],
  })
})

constructor(private fb : FormBuilder){
  this.userList = [];
}

ngOnInit(): void {
  
}

onSubmit(): void {
  const formValue = this.userForm.value;
  this.formSubmitted = true;
  // On vérifie que les valeurs sont définies avant de les assigner à newUser + vérification que le formulaire est valid
  if (formValue.userName && formValue.credentials && formValue.adress && this.userForm.valid) {
      this.newUser = formValue as User;
      console.log(this.newUser);
      this.getUserList();
      this.userList.push(this.newUser);
  };
};

getUserList(): User[] {
  return this.userList;
};

}
