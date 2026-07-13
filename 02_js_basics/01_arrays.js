const myArray = [1, 2, 3, 4, 5]

console.log(typeof myArray);//object

console.log(myArray);
console.log(myArray[0]);

myArray[0] = 8
const anotherarray = myArray
console.log(anotherarray);
console.log(myArray);//reference shared => changes in original copy


const newArray = new Array(1, 6, 12)
console.log(newArray);

newArray.push(18)
console.log(newArray);//add element from end

newArray.pop()
console.log(newArray);//remove last element

newArray.unshift(18)
console.log(newArray);//add element from start

newArray.shift()
console.log(newArray);//removes element from start

console.log(newArray.indexOf(12));//2
console.log(newArray.indexOf(23));//-1 => as it is not in array

console.log(newArray.includes(6));//true

const newArray2 = newArray.join()
console.log(newArray);
console.log(newArray2);//1,6,12
console.log(typeof newArray2);//string

//slice
const arrayA = [0, 1, 2, 3, 4, 5]
console.log("Array A: ", arrayA);
console.log(arrayA.slice(1,3));//[1,2] => last index element not included
console.log("Array A: ", arrayA);//no change in original array

//splice
console.log("Array B: ", arrayA);
console.log(arrayA.splice(1,3));//[1,2,3] => last index element included
console.log("Array B: ", arrayA);//[0,4,5] => change in original array
