//Immediately Invoked Function Expression(IIFE)

//defining function directly and executed
(function enter() {
    console.log("DB Connected")
})();// so that it is not affected by global scope and call immediately

//defining function directly with return
console.log((function addNo(){
    return 3 + 4;
})());

//storing fun in variable and print inside
const newEnter = (function(){
    console.log("DB CONNECTED!")
})();

//storing in variable by printing with return
const newEnter3 = console.log((function(){
    return "DB connected....."
})());


//arrow fun
//without storing at variable
(() => {
    console.log(5-1);
})();

//without storing and print
console.log((() => (2-1))());

//storing in variable by printing in function
const newMath2 = (() => console.log(4 + 2))();

//storing in variable by printing with return 
const newMath = console.log((() => {return 4 + 1 })());//named iife


//simple iife
((name) => 
    console.log(`${name} entered!`)
)("Neha")
