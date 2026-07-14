const array1 = ["Neha", "Gita", "Sita"]
const array2 = ["Ram", "Shyam", "Naman"]

// array1.push(array2)
// console.log(array1);//array2 pushed as a element in array1

// const newArray = array1.concat(array2)
// console.log(newArray);//concats or combines two arrays give array

//spread => most preferred
const anotherNew = [...array1, ...array2]
console.log(anotherNew);//gives combined array

const nestedArray = [1, 2, 3, [4, 5], 7, [8, 0, [2, 9]]]
const flatArray = nestedArray.flat(Infinity)
console.log(flatArray);

console.log(Array.isArray("Neha"));
console.log(Array.from("Neha"));
console.log(Array.from({name : "Neha"}));//we have to tell key or val to convrt array

let val1 = 30;
let val2 = 8;
let val3 = 2005;
console.log(Array.of(val1, val2, val3));






