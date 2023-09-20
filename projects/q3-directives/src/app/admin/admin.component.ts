import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})

export class AdminComponent {

  isAdmin : boolean = true

  constructor(){

  }

  changeAdmin (){
    this.isAdmin = !this.isAdmin
  }
}
