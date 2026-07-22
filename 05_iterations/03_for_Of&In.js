//loop = array specific

//for-of loop for array
const arr = ["Neha", "Sita", "Lina"]
for(const num of arr){
    console.log(num);
}

//for-of loop for string
const msg = "Welcome to Website";
for(const m of msg){
    console.log(m);
}

//for-of loop for obj
// const programming = {
//     js : "javascript",
//     py : "python",
//     cpp : "c++"
// }
// for (const key of programming) {
//     console.log(key); 
// }//objects are not iterable like this (for-of loop)

//Maps => obj that has unique keys in order
const myMap = new Map()
myMap.set('Color' , 'Red')
myMap.set('Food' , 'Pasta')
myMap.set('Flower' , 'Lily')

for (const [key,value] of myMap) {
    // console.log(key);//key and value both printed in array
    console.log("Fav "+ key + " is " + value);//[key, value] both
}

//since obj not iterable by for of loop use for in loop
//for-in loop
const programming = {
    js : "javascript",
    py : "python",
    cpp : "c++"
}
for (const key in programming) {  
    //console.log(key);//only keys
    //console.log(programming[key]);//values
    console.log(key + " stands for " + programming[key]);
}

const newArr = [50, 100, 200, 400]
for (const key in newArr) {
    //console.log(key);//0 1 2 3
      console.log(newArr[key]);// values = 50, 100, 200, 400
}

//map doesnot work for for-in loop