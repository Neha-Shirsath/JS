//Reduce
const myArr = [1, 2, 3]
const redArr = myArr.reduce( function(accumulator, current_value){
    console.log(`accumulator : ${accumulator} and current value : ${current_value}`)
    return accumulator + current_value;   
},0)
// accumulator : 0 and current value : 1
// accumulator : 1 and current value : 2
// accumulator : 3 and current value : 3
//accumulator initializes with 0 and current val with 1st array member then result stored in accumulator


//by arrow func
const redNew = myArr.reduce( (accumulator, current_value) => accumulator + current_value,0)
console.log(redNew)
