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