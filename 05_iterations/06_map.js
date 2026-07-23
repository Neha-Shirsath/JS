//map => every elemnt for operations

const nums = [1, 2, 3, 4, 5]
const newNum = nums.map( (n) => n + 2 )
console.log(newNum);
const mulNum = nums.map((num) => {return num * 5})
console.log(mulNum);


//nested
const myNums = nums.map( (num) => num * 10).map( (num) => num + 1).filter( (num) => num%11 == 0)
console.log(myNums);
