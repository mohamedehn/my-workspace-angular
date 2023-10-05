export class User{
    userName: string;
    email: string;
    password: string;
    adress: any;
    street: string;
    number: number;
    city: string;

    constructor(userName: string, email: string, password: string, adress : any, street: string, number: number, city: string){
        this.userName = userName;
        this.email = email;
        this.password = password;
        this.adress = adress;
        this.street = street;
        this.number = number;
        this.city = city
    }
}