// const tinderUser = {}//non singleton object
// console.log(tinderUser)

//singleton object
const tinderUser = new Object()//singleton

console.log(tinderUser)

tinderUser.name = "Neha";
tinderUser.email = "neha@google.com";
tinderUser.age = 20;

console.log(tinderUser)

const normalUser = {
    name : {
        fullname : {
            firstname : "Neha",
            surname : "Gupta"
        }
    },
    age : "22",
    email : "neha30@microsoft.com"
}
console.log(normalUser);
console.log(normalUser.name.fullname.surname);


//combine objects
const obj1 = { 1: "a", 2: "b"}
const obj2 = { 3: "c", 4: "d"}
const obj3 = { 5: "e", 6: "f"}

const combinedObj = Object.assign({}, obj1, obj2, obj3)
console.log(combinedObj);//{} act as a target obj that holds all sorce obj 1,2,3

//another way using spread
const newCombined = {...obj1, ...obj2, ...obj3}
console.log(newCombined);

console.log(tinderUser.length);//undefined bcz object does not have length property

//to print only keys from object
console.log(Object.keys(tinderUser));//returns keys in array form
console.log(Object.keys(tinderUser).length);//no of keys in obj

//to print only values from object
console.log(Object.values(tinderUser));//returns vals in array form
console.log(Object.values(tinderUser).length);//no of vals in obj

console.log(Object.entries(tinderUser));//no of keys-vals in obj

console.log(tinderUser.hasOwnProperty("age"));//yes=>true else false
