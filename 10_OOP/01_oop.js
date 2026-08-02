//Object Literals
const user = {
    username: "Neha",
    userID: 101,

    getDetails : function(){
        console.log("Logged in");
        console.log(this);
    }
}
console.log(user.userID);
user.getDetails()

//constructor object
function userInfo(username, age, isLoggedIn){
    this.username = username;
    this.age = age;
    this.log = isLoggedIn;


    this.greeting = function(){
        console.log(`Welcome ${this.username}`);        
    }
    // return this;
}
const user1 = new userInfo("Kat", 21, true);
const user2 = new userInfo("John", 30, false);//without new keyword it overwrites with other instance

console.log(user1);
console.log(user2);

//new keyword => empty parenthesis/ new obj creates
//construction func call due to new keyword
//all args injected in this keyword 
//gives in func
