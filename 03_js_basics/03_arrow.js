//this keyword
const user = {
    username : "Neha",
    age : 20,
    welcomeUser : function(){
        console.log(`${this.username}, welcome to website.`);//this refers to current context    
        console.log(this);   
    }
}
console.log(this); //{} global is empty, this in browser => window
user.welcomeUser()
user.username = "Sita"
user.welcomeUser()


function another1(){
    console.log(this)
}
another1()//too much info abt this

function another(){
    let username = "Ramya"
    console.log(this.username)//not accessible in function => undefined
}
another()

const anotherWay = function(){
    let username = "Ramya"
    console.log(this.username)//not accessible in function => undefined
}
another()

//arrow ( =>)

const arrowTest = () => {
    let username = "Ramya"
    console.log(this.username)//undefined 
}
arrowTest()

const arrowTest2 = () => {
    console.log(this)//empty {}
}
arrowTest2()

const mathArrow = (num1, num2) => {
    return num1 + num2 + 2;
}
console.log(mathArrow(5, 1));


const addTwo = (n1, n2) => n1 + n2
console.log(addTwo(1, 2))

const addTwo2 = (n1, n2) => (n1 + n2)
console.log(addTwo2(5, 2))

const addTwo3 = function(n1, n2){
    (n1 + n2)
}
console.log(addTwo(1, 2))

// this.name = "John" // John array fun referes to thhis outside surrounding scope instaed of its parent obj
const person = {
  name: "John",
  greet: () => {
    console.log(this.name);
  }
};
person.greet(); //node => undefined => uses this from surrounding obj, browser => window

