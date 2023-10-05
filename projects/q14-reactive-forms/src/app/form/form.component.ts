import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../models/user.model';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit{

formSubmitted : boolean = false;


public userList!: User[];

public newUser! : any;

myForm = this.fb.group({
  userName : new FormControl('', Validators.required),
  email : new FormControl('',Validators.required),
  password : new FormControl('',Validators.required),
  adress : new FormGroup({
    street : new FormControl('',Validators.required),
    city : new FormControl('',Validators.required),
    number: new FormControl(Number,Validators.required)
  })
})

constructor(private fb : FormBuilder){
  this.userList = [];
}

ngOnInit(): void {
  
}

onSubmit(): void {
  this.formSubmitted = true;
  this.newUser = this.myForm.value;
  console.log(this.newUser);
  this.getUserList();
  this.userList.push(this.newUser);
}

getUserList(): User[] {
  return this.userList;
}

}
