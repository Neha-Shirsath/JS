const score = 300
console.log(score);

const value = new Number(100)
console.log(value);

console.log(value.toString().length);

const valueAnother = new Number(500.569)
console.log(valueAnother.toFixed(2));//500.57

console.log(valueAnother.toPrecision(4));

const hundreads = 1000000
console.log(hundreads.toLocaleString('en-IN'));//indian std 

console.log(Math.abs(-3));//3(removes signs)
console.log(Math.round(9.7));//10
console.log(Math.ceil(3.2));//4(ceil => top val)
console.log(Math.floor(3.2));//3

console.log(Math.pow(2,34));

console.log(Math.min(7,5,3,9));
console.log(Math.max(7,5,3,9));

console.log(Math.random());//bet 0-1

console.log(Math.random()*10)
console.log((Math.random()*10) + 1)