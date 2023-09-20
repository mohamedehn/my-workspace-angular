export class User {
    lastName: string;
    firstName: string;
    age: number;
    quote: string;
    photo: string;
  
    constructor(lastName: string, firstName: string, age: number, quote: string, photo: string) {
      this.lastName = lastName;
      this.firstName = firstName;
      this.age = age;
      this.quote = quote;
      this.photo = photo;
    }
  }
  