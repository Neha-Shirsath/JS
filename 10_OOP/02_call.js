//call => current execution context gives to another function
// borrowing methods from another object or explicitly setting the this value.
function setUsername(user){
    this.user = user;
    console.log("called");
    
}

function createUser(username, email, password){
    setUsername.call(this, username);//its own this bcz setUsername's this disseapears

    this.email = email;
    this.password = password;
}

const user1 = new createUser("Neha", "neha@gmail.com", "neha30")
console.log(user1);
