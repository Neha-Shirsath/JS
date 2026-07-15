//object literals

//symbol as key in obj
const mySymbol = Symbol("key1")

const MyInfo = {
    [mySymbol] : "mykey1",
    name : "Neha",
    email : "neha@gmail.com",
    location : "Japan",
    isLoggedIn : false,
    logindays : ["Monday", "Thursday"]
}

console.log(MyInfo)

console.log(MyInfo.name)//mostly used
console.log(MyInfo["name"])//more appropriate

console.log(MyInfo[mySymbol]);
console.log(typeof MyInfo[mySymbol]);//string bcz the value stored in symbol is string type

MyInfo.email = "neha30@google.com"
console.log(MyInfo)

//one way
MyInfo.greeting = function(){
    return "Hello JS user!!"
}
console.log(MyInfo.greeting);//function (anonymous)
console.log(MyInfo.greeting());//return sends the value back to the caller

//another way
MyInfo.greeting2 = function(){
    console.log("Wellcome...")
}
MyInfo.greeting2()//The function itself returns undefined (by default), only prints msg

MyInfo.greeting = function(){
    return `${this.name}` 
}
console.log(MyInfo.greeting());//returns Neha (use keyword this to refer val from same obj)