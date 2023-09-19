import { Component } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})

export class UserProfileComponent {

  user : User;

  ageVisible : boolean = true;

  constructor() {

    this.user = new User('Doe', 'John', 25, '', 'https://randomuser.me/api/portraits/lego/2.jpg')
  
    };

  showAge(){
    this.ageVisible = !this.ageVisible
  }
}
