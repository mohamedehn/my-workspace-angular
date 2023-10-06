export class User{
    userName: string | null;
    email: string | null;
    password: string | null;
    adress: {
        street: string | null;
        number: number | null;
        city: string | null;
    }

    constructor(userName: string | null, email: string | null, password: string | null, 
        adress : {street: string | null, number: number | null, city: string | null}){
        this.userName = userName;
        this.email = email;
        this.password = password;
        this.adress = adress;
    }
}