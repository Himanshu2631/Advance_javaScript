//Create a map
// const fruits = new Map([
//     ["apples",500],
//     ["banana",300],
//     ["oranges",200]
// ]);
// console.log(fruits);

// //Create a map
// const fruits = new Map();
// //Set map values
// fruits.set("apples",500);
// fruits.set("banana",300);
// fruits.set("oranges",200);

// console.log(fruits);

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

// let text="";
// for(const x of fruits.keys()){
//     text+=x;
// }

// let text="";
// for(const x of fruits.values()){
//     text+=x;
// }

// const apples={name:'Apples'};
// const bananas={name:'Bananas'};
// const oranges={name:'Oranges'};

// //Create a map
// const fruits = new Map();
// fruits.set(apples,250);
// fruits.set(bananas,200);
// fruits.set(oranges,300);

//Create an array
// const fruits={
//     (name:"apples",quantity:300)
//     (name:"bananas",quantity:500)
//     (name:"oranges",quantity:200)
//     (name:"kiwi",quantity:150)
// }
// function myCallback({quantity}){
//     return quantity>200?"ok":"low";
// }
// //Group by quantity
// const result = Map.groupBy(fruits,myCallback);
// console.log(result);


//Create an Object
// const person={
//     firstName:"John",
//     lastName:"Doe",
//     age:50

// };
// //Destructing
// let{lastName:name}=person;

//Create a String
// let name = "GurukulTheSchools";
// //Destructing
// let[a1,a2,a3,a4,a5]= name;
// console.log(a1);
// console.log(a2);
// console.log(a3);
// console.log(a4);
// console.log(a5);

// const fruits = ["Bananas","Oranges","Apples","Mangoes"];

// //Destructing
// let[fruit1,,,fruit2]=fruits;
// console.log(fruit1);

// const fruits = ["Bananas","Oranges","Apples","Mangoes"];
// let{[0]:fruit1,[1]:fruit2}=fruits;
// console.log(fruit1);
// console.log(fruit2);

// const numbers = [10,20,30,40,50,60,70];

// const[a,b,...rest]=numbers


// const fruits = new Map({
//     [apples,250];
//     [bananas,200];
//     [oranges,300];

// });
// let text="";
// for(const[key,value]of fruits){
//     text+=key+"is"+value;
// }
// console.log(text);

// const fruits=["Banana","Orange","Apple","Mango"];
// fruits.includes("Mango")
// const fruits=["Banana","Orange","Apple","Mango"];
// fruits.include("Banana",3);
// console.log(fruits)
//The include() method is case sensitive

//Trailing comma
// const arr=[
//     "one",
//     "two",
//     "three",,
// ];
// console.log(arr);

// const sparseArray=[1,,,4,5,,];
// console.log(sparseArray)

// const person={
//     firstName:"John",
//     lastName:"Davis",
//     age:30,
// }
// console.log(person);

// const person={
//     firstName:"John",

//     ,
//     age:30,
// }


