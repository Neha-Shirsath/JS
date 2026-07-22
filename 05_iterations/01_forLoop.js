//for loop

for (let i = 0; i <= 10; i++) {
    const element = i;
    if(element == 5){
        console.log("5 is a prime no.")
    }
    console.log(i);
}

for (let i = 0; i <= 10 ; i++) {
    console.log(`Outer element : ${i}`);
    for (let j = 0; j <= 10 ; j++) {
        console.log(`Inner element : ${j} and outer element : ${i}`);
    }
}

for (let i = 1; i <= 10 ; i++) {
    console.log(`\nTable of ${i}`);
    for (let j = 1; j <= 10 ; j++) {
        console.log(i + " * " + j + " = " + i*j);
    }
}

const myArray = ["Neha", "Lana", "Ariana"]
console.log(myArray.length);//3
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
}


//break
for (let i = 0; i <= 10; i++) {
    const element = i;
    if(element == 5){
        console.log("Detected 5");
        break;//stops at this msg 
    }
    console.log(i);
}

for (let i = 0; i <= 10; i++) {
    const element = i;
    if(element == 5){
        console.log("Detected 5");
        continue;//only prints thi msg and continue without printing 5
    }
    console.log(i);
}

