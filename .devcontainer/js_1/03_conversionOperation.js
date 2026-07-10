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