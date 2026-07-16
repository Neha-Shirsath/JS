//Functions
function myName(){
    console.log("N");
    console.log("e");
    console.log("h");
    console.log("a");    
}
myName()

function addNums(num1, num2){
    console.log(num1+num2)
}
addNums(1, 2)//correct way
console.log(addNums)//reference
console.log(addNums(2, 3))//functions returns undifined

function newAddNums(n1, n2){
    return n1+n2
}
console.log(newAddNums(4, 5))

function anotherWay(a, b){
    return a + b
}
const result = anotherWay(1, 1)
console.log(result)

function anotherWay(c, d){
    const result = c + d
    return result
}
console.log(anotherWay(10, 10))

function userLoggedIn(username = "user"){//default val user
    // if (username === undefined){
    //     // console.log("Please enter a valid username...")
    //     // return
    //     return "Please enter valid username..."
    // }
    if (!username){
        // console.log("Please enter a valid username...")
        // return
        return "Please enter valid username..."
    }
    return `${username} just logged in`
}
console.log(userLoggedIn("neha30"));
console.log(userLoggedIn());//undefined just logged in