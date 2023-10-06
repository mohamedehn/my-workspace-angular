import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { User } from '../models/user.model';


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
    email : [''],
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
  this.formSubmitted = true;
  const formValue = this.userForm.value;
  // On vérifie que les valeurs sont définies avant de les assigner à newUser
  if (formValue.userName && formValue.credentials && formValue.adress) {
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
