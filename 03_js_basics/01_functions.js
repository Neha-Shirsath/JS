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

function numbers(val1, val2, ...nums){
    //...nums => REST operator
    return nums;
}
console.log(numbers(200, 400, 5000, 10));//val1 => 200, val2 => 400, nums =[5000, 10]

//obj in functions
const user = {
    name: "Neha",
    price: 199
}

function handleObj(anyobject){
    console.log(`Username is ${anyobject.name} and price is ${anyobject.price}`)   
}
//handleObj(user)
handleObj({
    name: "Neha",
    price: 199
})

//array in functions
const newArray = [300, 600, 800]

function handleArray(anyArray){
    // return anyArray;
    return anyArray[2];
}
// console.log(handleArray(newArray));
console.log(handleArray([2, 8, 12]));

