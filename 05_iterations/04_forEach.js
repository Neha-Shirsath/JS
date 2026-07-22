//forEach func for Array

const coding = ["Javascript", "Python", "C", "C++"]
coding.forEach(function (item){
    console.log(item); 
})

//arrow function
coding.forEach((value) => {
    console.log(value);
})

//declaring func 
function printArray(item){
    console.log(item);
}
coding.forEach(printArray)


const names = ["Neha", "Sita", "Hina", "Lina"]
names.forEach((name, index, arr) => {
    console.log(name, index, arr); 
})

//objects in array
const languages = [
    {
        languageName : "Javascript",
        fileName : "js"
    },
    {
        languageName : "Python",
        fileName : "py"
    },
    {
        languageName : "C++",
        fileName : "cpp"
    },
    {
        languageName : "Ruby",
        fileName : "rb"
    }
]

languages.forEach( (item) => {
    //console.log(item); //prints each object
    //console.log(item.languageName)//language name values
    console.log(item.fileName);//file name values   
})