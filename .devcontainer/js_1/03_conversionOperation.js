let someNumber = null

console.log(typeof(someNumber));

let intNumber = Number(someNumber)
console.log(intNumber);


console.log(typeof(intNumber));

let isLoggedIn = 1

console.log(typeof(isLoggedIn));

let booleanLoogedIn = Boolean(isLoggedIn)
console.log(typeof(booleanLoogedIn));


//"30" => Number() => 30
//"30abc" => Number() => NaN =>type = Number
//NULL => Number() => 0
//undefined => Number() => NaN
//true => Number() => 1
//false => Number() => 0

//1 => Boolean() => true
//"neha" => Boolean() => true
//0 => Boolean() => false
//"" => Boolean() => false

// *************Operations******************

let value = 3
let negValue = -value

console.log(negValue);

console.log(3+2);
console.log(3-2);
console.log(3*2);
console.log(3**2);
console.log(3/2);
console.log(3%2);

let str1 = "Hello"
let str2 = " Neha"
console.log(str1+str2)

console.log("1" + 2)//12
console.log(1 + "2")//12
console.log("1" + "2")//12
console.log("1" + 2 + 2)//122
console.log(1 + 2 + "2")//32

let val1 = 50
++val1;
console.log(val1)//1 + 50 => prefix

let val2 = 50
val2++;
console.log(val2)//50 + 1 => postfix

