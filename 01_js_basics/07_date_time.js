let myDate = new Date()

console.log(typeof(myDate))//object

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString('en-IN'));
console.log(myDate.toLocaleTimeString('en-IN'));


let createNewDate = new Date(2026, 7 , 30)
console.log(createNewDate.toDateString());

let createNewDate2 = new Date(2026, 7 , 30, 10, 15, 4)
console.log(createNewDate2.toLocaleString());

let date2 = new Date("01-15-2026")
console.log(date2.toLocaleString());

let TimeStamp = Date.now()

console.log(TimeStamp);
console.log(date2.getTime());

console.log(Math.floor(Date.now()/1000))//milisecds to seconds

console.log(date2.getDay());//Thursday
console.log(date2.getMonth()+1);//

console.log(date2.toLocaleString('default',{
    weekday: "narrow"
}
));//default => style of date , narrow => short form of weekday
