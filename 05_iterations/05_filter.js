// const coding = ["Javascript", "Python", "C", "C++"]

// const values = coding.forEach((item) => {
//     console.log(item);
//     return item;
// })
// console.log(values);//undefined (foreach doesnt return vals)


//filter => condition on elements
const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const values = myArray.filter((num) => num > 4)

// const values = myArray.filter((num) =>{
//     return num > 4
// })

 const values = myArray.filter((num) => (num > 4))

console.log(values);

//using foreach
const newValues = []
myArray.forEach( (num) => {
    if (num > 4) {
        newValues.push(num)
    }
})
console.log(newValues)


const bookData = [
    {Name : "Book1", Genre : "History", PublishYr : 1970},
    {Name : "Book2", Genre : "Fiction", PublishYr : 2000},
    {Name : "Book3", Genre : "Comedy", PublishYr : 1985},
    {Name : "Book4", Genre : "Mystry", PublishYr : 1992},
    {Name : "Book5", Genre : "Adventure", PublishYr : 2009},
    {Name : "Book6", Genre : "History", PublishYr : 1980},
    {Name : "Book7", Genre : "Science", PublishYr : 2005},
    {Name : "Book8", Genre : "Humor", PublishYr : 2015},
    {Name : "Book9", Genre : "Biography", PublishYr : 1978},
    {Name : "Book10", Genre : "Fiction", PublishYr : 1974},
]

let bookUser = bookData.filter((bk) => bk.Genre === "Fiction")
console.log(bookUser);

bookUser = bookData.filter((bk) => {
    return bk.Genre === "History" && bk.PublishYr >= 1980
})
console.log(bookUser);

bookUser = bookData.filter((bk) => {
    return bk.Genre === "Biography" || bk.PublishYr >= 2005
})
console.log(bookUser);