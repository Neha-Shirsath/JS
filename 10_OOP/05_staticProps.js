//static =>  call them using the class name, not an object created from the class
class user {
    constructor(username) {
        this.username = username;
    }

    logIn(){
        console.log(`${this.username} logged in.`);
    }

    static createID(){
        console.log(`${parseInt(Math.random() * 100) + 1}`);//o/p = user1.createID is not a function
    }
}

const user1 = new user("Neha");
console.log(user1);
user1.logIn();
// user1.createID();

class teacher extends user {
    constructor(username, email){
        super(username);
        this.email = email;
    }
}

const t1 = new teacher("Neha", "n@gmail.com");
console.log(t1);
t1.logIn();
t1.createID();//o/p => t1.createID is not a function