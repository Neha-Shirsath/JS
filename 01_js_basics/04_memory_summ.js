//primitive memory => Stack memory
let myName = "Neha"

console.log(myName);

let Name2 = myName
Name2 = "Sita"

console.log(myName);
console.log(Name2);//chnages are made to copy and returned

//Non primitive memory => Heap memory
let person1 = {
    name: "Neha",
    age: 20
}

let person2 = person1

person1.name = "Sita"

console.log(person1.name)
console.log(person2.name)
//changes are made to original data thats why same o/p returened for both 
// both refers to same og data


