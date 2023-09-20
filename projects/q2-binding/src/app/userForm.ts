export class UserForm {
    lastName: string;
    firstName: string;
    email: string;
    password: string;
  
    constructor(lastName: string, firstName: string, email: string, password: string) {
      this.lastName = lastName;
      this.firstName = firstName;
      this.email = email;
      this.password = password;
    }
  }
  