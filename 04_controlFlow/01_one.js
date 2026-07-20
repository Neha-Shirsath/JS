//if-else
const temperature = 43
console.log(temperature)

if(temperature < 50){
    console.log("Temperature is lesser than 50.");
}else{
    console.log("Temperature is greater than 50.");
}
console.log("Temperature is equal to 50.")//always runs as it is ouside

const score = 200
if (score > 100){
    const power = "fly";
    console.log(`Power is ${power}.`)
}
//console.log(`Power is ${power}.`)//Outside scope variable connot be accesed for let and const


//shorthand notation
const balance = 10000
if(balance == 10000) console.log("Rich");

//nested
if(balance < 10000){
    console.log("Balance is less than 10000");
}
else if(balance > 10000){
    console.log("Balance is greater than 10000");
}
else{
    console.log("Balance is 10000");
}

const userLoggedIn = true;
const debitCard = true;
const loggedByEmail = true;
const loggedByGoogle = false;

if(userLoggedIn && debitCard){
    console.log("Continue.."); //&& for and   
}

if(loggedByEmail || loggedByGoogle){
    console.log("Continue.."); //|| for or   
}
