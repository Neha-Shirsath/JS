//ES6 js

class user {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;        
    }

    encryptPassword(){
        return `${this.password}abc`;
    }

    toUpperCaseUser(){
        return `${this.username.toUpperCase()}`;
    }
}

const user1 = new user("Neha", "neha@gmail.com", "123")
console.log(user1);//user { username: 'Neha', email: 'neha@gmail.com', password: '123' }
console.log(user1.encryptPassword());//123abc
console.log(user1.toUpperCaseUser());//NEHA
const user2 = new user("Neha", "neha@gmail.com", user1.encryptPassword())
console.log(user2);


//without using class
function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;
}
User.prototype.encryptPassword = function(){
    return `${this.password}abc`;
}

User.prototype.toUpperCaseUser = function(){
    return `${this.username.toUpperCase()}`;
}

const User3  = new User("Lana", "lana@gmail.com", "456")
console.log(User3);
console.log(User3.encryptPassword());
console.log(User3.toUpperCaseUser());


