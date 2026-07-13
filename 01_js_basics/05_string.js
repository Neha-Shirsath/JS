//string interpolation
let name = "Neha"
let age = 22

console.log(`Hello, my name is ${name.toUpperCase()} and my age is ${age}`);

//another way to assign string

let name2 = new String("Sitaram")

console.log(typeof(name2));//object(key value pairs => (position of each letter in word : each letter))
console.log(name2[0]);

console.log(name2.__proto__);

console.log(name2.length);

console.log(name2.toLowerCase());

console.log(name2.charAt(3));
console.log(name2.indexOf('r'));

const newName = name2.substring(0,4)
console.log(newName);

const newName2 = name2.slice(-3,6)
console.log(newName2);

const anotherString = "  Hello  "
console.log(anotherString);
console.log(anotherString.trim());

const url = "https://neha.com/neha%20sita"

console.log(url.replace('%20','-'));

console.log(url.includes('neha'));

const newName3 = "Neha-ss-com"

console.log(newName3.split('-'));



