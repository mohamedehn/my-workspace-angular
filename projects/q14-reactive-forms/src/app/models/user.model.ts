export class User{
    userName: string | null;
    credentials :{
        email: string | null;
        password: string | null;
    }
    adress: {
        street: string | null;
        number: number | null;
        city: string | null;
    }

    constructor(userName: string | null, credentials : {email: string | null, password: string | null}, 
        adress : {street: string | null, number: number | null, city: string | null}){
        this.userName = userName;
        this.credentials = credentials;
        this.adress = adress;
    }
}