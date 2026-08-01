//Promise => eventually/in future executed
//promise created
const promiseOne = new Promise(function(resolve, reject){
    //do async task
    //db calls, network, cryptography

    setTimeout(function(){
        console.log("Async Task Completed.");
        resolve();
    },1000)
});

//consume promise => then is connected to resolve for that call resolve()
promiseOne.then(function(){
    console.log("Promise consumed.");
})

//without storing in variable
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async 2 Completed.");
        resolve();
    },1000)
}).then(function(){
    console.log("Promise 2 Consumed.");
})


const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({userName : "neha30", email : "neha30@gmail.com"});
    }, 1000)
});//we can also pass data/paras into resolve
promiseThree.then(function(user){
    console.log(user);    
});//then also pass it is in then so it can be accessed

//chaining then and catch
const newPromise = new Promise(function(resolve, reject){

    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username:"Lana", password:"123"});
        } else {
            console.log("ERROR: something went wrong!");
        }
    }, 1000)
});

newPromise.then(function(user){
    console.log(user.username);
    return user.username;
}).then(function(username){
    console.log(username);//gives username
}).catch(function(error){
    console.log(error);//if error=> catch=> prints error msg 
}).finally(() => console.log("Promise either resolved or rejected.."))


//using async-await
const newPromise2 = new Promise(function(resolve, reject){

    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({name:"Javascript", password:"123"});
        } else {
            console.log("ERROR: js went wrong!");
        }
    }, 1000)
});

async function consumenewPromise2(){
    try {
        const response = await newPromise2;
        console.log(response);        
    } catch (error) {
        console.log(error);
    }
}
consumenewPromise2()

//api fetch
async function getUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();//await json as it also take time to convert
        console.log(data);
    } catch (error) {
        console.log("ERROR :", error);         
    }
}
getUsers()

fetch('https://jsonplaceholder.typicode.com/users').then((response) => {
    return response.json();
}).then((data) => {
    console.log(data);
}).catch((error) => console.log(error))