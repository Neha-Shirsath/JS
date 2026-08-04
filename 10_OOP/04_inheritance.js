//inheritance => super()

class user {
    constructor(name) {
        this.name = name;
    }
    logIn(){
        console.log(`${this.name} is Logged In.`);
    }
}

class Teacher extends user {
    constructor(name, email, password){
        super(name)
        this.email = email;
        this.password = password;
    }
    addCourse(branch){
        console.log(`Course is added by ${this.name}`);
    }
}

const user1 = new user("Neha")
console.log(user1);
user1.logIn()

const teach1 = new Teacher("Neha","neha@gmail.com", "123");
console.log(teach1);
teach1.addCourse()
