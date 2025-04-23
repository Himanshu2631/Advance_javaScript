//Create a map
// const fruits = new Map([
//     ["apples",500],
//     ["banana",300],
//     ["oranges",200]
// ]);
// console.log(fruits);

// //Create a map
const fruits = new Map();
//Set map values
fruits.set("apples",500);
fruits.set("banana",300);
fruits.set("oranges",200);

console.log(fruits);

//get method
// console.log(fruits.get("apples")); //returns 500

//Javascript Map Method
// console.log(fruits.size);
// console.log(fruits.delete("apples"));  //delete() method
// console.log(fruits.clear);

//Map.has()
// console.log(fruits.has("oranges"));

//Map.forEach()
// let text="";
// fruits.forEach(function(value,key){
//     text+=key+'='+value;
// })
// console.log(text);

//Map.entries()
// let text="";
// for(const x of fruits.entries()){
//     text+=x;
// }

let text="";
for(const x of fruits.keys()){
    text+=x;
}