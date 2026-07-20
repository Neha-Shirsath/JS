const userEmail = "neha@gmail.com";

if(userEmail){
    console.log("User email is provided.");   
}//automatically considers true and executes

//falsy values => false, 0, -0, BigInt 0n, '', "", null, undefined, NaN

//truthy values => strings, " ", ' ', "0", 'false', [], {}, function(){}

const marks = []

if(marks.length === 0){
    console.log("Marks array is empty.");
}

const studInfo = {}

if(Object.keys(studInfo).length === 0){
    console.log("Student Info Object is empty.");
}


//Nullish coalensceing operator(??) = null undefined

// val1 = 5 ?? 10//5
// val1 = null ?? 10;//10
// val1 = undefined ?? 15 //15
// val1 = null ?? 20 ?? 10;//20
// val1 = null ?? undefined; //undefined
// val1 = undefined ?? null; //null
val1 = undefined ?? null ?? 10;
console.log(val1)


//Terniary Operator (if-else) (?)
//condition ? true : false

const price = 100;
price <= 50 ? console.log("Affordable") : console.log("Expensive");
