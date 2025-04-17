// (()=>{
//     console.log("run right away");
// })();

// function getRecursive(nr) {
//     console.log(nr);
//     getRecursive(--nr);
// }

// getRecursive(3);

// function getRecursive(nr) {
//     console.log(nr);
//     if(nr > 0) {
//         getRecursive(--nr);
//     }
// }
// getRecursive(3);

// function logRecursive(nr){
//     console.log("Started function:", nr);
//     if(nr > 0) {
//         logRecursive(nr-1);
//     }else{
//         console.log("done with recursion");
//     }
//     console.log("Ended function:",nr);
// }

// logRecursive(3);

// //the performance of recursion is slightly worse than the performance of regular irretation using a loop.
// //  So if this cause a bottleneck situation that will really slow

// function doOuterFunctionStuff(nr) {
//     console.log("Outer Function");
//     doInnerFunctionStuff(nr);

//     console.log("Inner Function");

//     console.log(x+7);
//     console.log("I can access outer variables:",nr)
// }

// function doOuterFunctionStuff(nr) {
//     doInnerFunctionStuff(nr);
//     function doInnerFunctionStuff(x) {
//         let z = 10;
//     }
//     console.log("Not accessible",z);
// }
// doOuterFunctionStuff(2);

// //Anonymous functions
// function doingStuffAnonymously() {
//     console.log("Not so secret though.");
// }

// //Here how to turn it into ano

// //Function callbacks
// function doFlexibleStuff(executeStuff) {
//     executeStuff();
//     console.log("Inside doFlexibleStuffFunction")
// }

// functionVariable();

// let youGotThis = function () {
//     console.log("You are doig really well,keep coding!");
// };

// setTimeout(youGotThis, 1000);
// setInterval(youGotThis, 1000);

//Quiz 1
// let val = 10;
// function tester(val){
//     val+=10;
//     if(val < 100){
//         return tester(val);
//     }
//     return val;
// }
// tester(val);
// console.log(val);

// Quiz 2
// let testFunction = function(){
//     console.log("Hello");
// }();

//Quiz 3
// (function () {
//    console.log("Welcome");
// })();
// (function () {
//     let firstName = "Laurence";
// })();
// let result = (function () {
//     let firstName = "Laurence";
//     return firstName;
// })();
// console.log(result);
// (function (firstName) {
//     console.log("My name is" + firstName);
// })("Laurence");

// Quiz 4
// let test2 = (num) => num+5;
// console.log(test2(14));


//Quiz 5
var addFive1 = function addFive1(num) {
    return num + 2;
};
let addFive2 = (num) => num + 2;
console.log(addFive1(14));

