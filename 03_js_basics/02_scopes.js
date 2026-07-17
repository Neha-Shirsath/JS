let a = 400

if(true){
    let a = 2;
    const b = 5;
    var c = 8
    console.log("Local scope: ",a);
}
// console.log(a);//not accessible ouside scope
// console.log(b);//not accessible ouside scope
console.log(c);//accessible ouside scope and can redefined => not used

console.log("Global scope: ",a);//400


//closure
function one(){
    const username = "Neha";

    function two(){
        const platform = "Youtube";
        console.log(username)//Neha => child func can access parent func
    }
    // console.log(platform)//not accessible outside func
    console.log(username)
    two()
}
// console.log(platform);
// console.log(username);
// one()


//one way of function declaration
console.log(firstWay(4));//5 => accessible
function firstWay(num){
    return num + 1;
} 
// console.log(firstWay(4));


//another way of function declaration => function in variable
// console.log(secondWay(9));//cannt access => error
const secondWay = function(num){
    return num + 1;
} 
console.log(secondWay(9));
