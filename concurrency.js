//  Callbacks

// function dosomething(callback){
//     callback();
// }
// function sayhi(){
//     console.log("Hi  !");
// }
// dosomething(sayhi);


// function judge(grade) {
//     switch (grade) {
//       case "A":
//         console.log("You got an", grade, "amazing");
//         break; 
//       case "B":
//         console.log("You got a", grade, "well done");
//         break;
//       case "C":
//         console.log("You got a", grade, "alright");
//         break;
//       case "D":
//         console.log("You got a", grade, "hmm . . .");
//         break;
//       default:
//         console.log("An", grade, "!what?!");
//     }
//   }
//   function getGrade(score,Callback){
//     let grade;
//     switch(true){
//         case score>=90:
//             grade="A";
//             break;
//         case score>=80:
//             grade="B";
//             break;
//         case score>=70:
//             grade="C";
//             break;
//         case score>=60:
//             grade="D";
//             break;
//         default:
//             grade="F";
//     }
//     Callback(grade);
// }
// getGrade(85,judge);


// setInterval(encourage, 500);

// function encourage() {
//   console.log("You're doing great!");
// }


// Promises

"// Promises: This function needs two parameters, and these parameters are callbacks. We have called them resolve and reject here. When resolve is called, the promise is presumed to be successful, and whatever is passed to resolve is returned and used as the promise's fulfillment value. When reject is called, the promise is considered to have failed, and whatever is passed to reject is used as the promise's rejection reason (often an error object or message)."

// let firstPromise = new Promise((resolve, reject) => {
//     let x = 20;
//     let y = 40;
//     if (x > 15) {
//         resolve(x);
//     } else {
//         reject("Too low");
//     }
// });

// // firstPromise
// firstPromise
//     .then((value1) => {
//         console.log("Resolved:", value1);
//     })
//     .catch((error) => {
//         console.log("Rejected:", error);
//     });

// const secondPromise = new Promise((resolve,reject)=>{
//     resolve("Success!!");
// }).then(value=>{
//     console.log(value);
//     return "WE";
// })
// .then(value=>{
//     console.log(value);
//     return "can";
// })
// .then(value=>{
//     console.log(value);
//     return "chain";
// })
// .then(value=>{
//     console.log(value);
//     return "promises";
// })
// .then(value=>{
//     console.log(value);
// })
// .catch(value=>{
//     console.log(value);
// }); 
// function say soemthing(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("Hello World!");
//         },2000);
//     });
// }
// async function name(params) {
    
// }
    
// }

// function doSomething(callback){
//     callback();
//     console.log("Hi! I am Himanshu");
// }
// function sayHi(){
//     console.log("Hi!");
// }
// doSomething(sayHi);

//async and await
// With the async keyword, we can make a function return a Promise. 
// This makes the Promise nicer to read and look a lot like synchronous ConvolverNode.

// function saySomething(x) {
//     return new Promise(resolve =>{
//         setTimeout(() =>{
//             resolve("something" + x);
//         }, 2000);
//     });
// }
// async function talk(x){
//     const words = await saySomething(x);
//     console.log(words);
// }
// talk(2);
// talk(4);
// talk(8);

//Event loop
// An event loop is a core part of asynchronous programming, especially in environments like JavaScript (browser and Node.js) and 
// Python (using asyncio). It continuously checks for and executes tasks such as I/O operations, timers, and callbacks.

//Call stack and callback queue

// console.log("Hi there");
// add(4,5);

// function add(x,y) {
//     return x+y;
// }

// console.log("Hi there");
// setTimeout(() => console.log("Sorry I'm late"),1000);
// console.log(add(4,5));

// function add(x, y) {
//     return x+y;
// }

//The setTimeout() task gets outsourced to the browser's API. When it's done, this appears in a special place the callback queue.When the call stack
//is empty, the event loop will check the callback queue for work to do.

console.log("Hi there");
setTimeout(() => console.log("Sorry I'm late"),0);
console.log(add(4,5));

function add(x,y) {
    return x+y;
}