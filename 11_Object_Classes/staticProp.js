class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){ //sabhi ko access nahi milenga
        return `123`;
    }
}

const prasad = new User("Prasad");
console.log(prasad.createId())

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email = email;
    }
}

const iPhone = new Teacher('iPhone', "i@phone.cpm");
