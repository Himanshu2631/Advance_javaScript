// // Classes and Objects.
// // Objects are the collection of the properties and methods.

// class ClassName{
//     constructor(prop1, prop2){                // first element of the class is constructor.
//         this.prop1 = prop1;
//         this.prop2 = prop2;
//     }
// }
// let Obj = new ClassName("arg1", "arg2");
// console.log(Obj.prop1);
// console.log(Obj.prop2);



// class Dog{
//     constructor(dogName, Weight, color,Breed){
//         this.dogName = dogName;                               // this.dogName is a formal argument, and dogName is the variable
//         this.Weight = Weight;
//         this.color = color;
//         this.Bread = Breed;
//     }
// }
// let dog = new Dog("JavaScript", 2.4, "brown", "chihuahua");
// console.log(dog.dogName);
// console.log(dog.Weight);
// console.log(dog.color);
// console.log(dog.Breed);

// // There can only be one constructor in a class.




// class Person{
//     constructor(firstName, lastName){
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
// }
// let p = new Person("Maaike", "van Putten");
// console.log("Hi",p.firstName);




//// When defining these methods, we don't need to use the function keyword. we start directly with the name.

//  class Person{
//     constructor(firstName,lastName){
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
//     greet(){
//         console.log("Hi there! I'm",this.firstName);
//     }
//  }
//  let p = new Person()


// class Person {
//     constructor(firstname, lastname) {
//       this.firstname = firstname;
//       this.lastname = lastname;
//     }
  
//     greet() {
//       console.log("Hi there! I'm " + this.firstname); // added space after "I'm"
//     }
  
//     compliment(name, object) {
//       return "That's a wonderful " + object + ", " + name + "!"; // improved spacing & punctuation
//     }
//   }

//   let person = new Person("Alice", "Smith");

//   person.greet();  

  
//   let msg = person.compliment("Bob", "jacket");
//   console.log(msg);  
/*
class Person {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }

  greet() {
    console.log("Hi there! I'm", this.firstname);
  }
}

let p = new Person("Maaike", "van Putten");
p.greet();
*/
//Properties:- Properties are sometimes called fields, hold the data of the class.

// class Person {
//   constructor(firstname, lastname) {
//     this.firstname = firstname;
//     this.lastname = lastname;
//   }
// }

// let p = new Person("Maaike", "van Putten");
// console.log("Hi", p.firstname);

// class Person {
//   #firstname
//   #lastname
//   constructor(firstname, lastname) {
//      this.#firstname = firstname;
//      this.#lastname = lastname;
//     }
// }
//  let p = new Person("Maaike", "van Putten");
//  console.log(p.firstname);

// class Person {
//   constructor(firstname, lastname){
//     if(firstname.startsWith("M")){
//       this.#firstname = forstname;
//     }else {
//       this.#firstname = "M" + firstname;
//     }
//     this.#lastname = lastname;
//   }
// }

// let p = new Person("kay", "Moon");

// class Person {
//   #firstname;
//   #lastname;
//   constructor(firstname, lastname) {
//      this.#firstname = firstname;
//      this.#lastname = lastname;
//     }

//   get firstname() {
//      return this.#firstname;
//   }
//   set firstname(firstname) {
//     this.#firstname = firstname;
//   }
//   get lastname() {
//     return this.#lastname;
//   }
//   set lastname(lastname) {
//    this.#lastname = lastname;
//   }
// }
// let p = new Person("Maria","Saga");
// console.log(p.firstname);

//Inheritance

// class Vehicle {
//   constructor(color, currentSpeed, maxSpeed){
//     this.color = color;
//     this.currentSpeed = currentSpeed;
//     this.maxSpeed = maxSpeed;
//   }
//   move() {
//     console.log("moving at", this.currentSpeed);
//   }
//   accelerate(amount) {
//     this.currentSpeed += amount;
//   }
// }


// class Vehicle{
//   constructor(color, currentSpeed,maxspeed){
//       this.color = color;
//       this.currentSpeed = currentSpeed;
//       this.maxspeed = maxspeed;
//   }
//   move(){
//       console.log("Moving at",this.currentSpeed);    // here use this : talking about a perticuler class.
//   }
//   accelerate(amount){
//       this.currentSpeed += amount;
//   }
// }
// class Motorcycle extends Vehicle{

//   constructor(color,currentSpeed,maxspeed,fuel){
//       super(color,currentSpeed,maxspeed);
//       this.fuel = fuel;
//   }
//   doWheelie(){
//       console.log("Driving on one wheel!");
//   }
// }
// let Motor = new Motorcycle("Black", 0, 250,"Gasoline");
// console.log(Motor.color);
// console.log(Motor.currentSpeed);
// console.log(Motor.maxspeed);
// console.log(Motor.fuel);
// Motor.accelerate(50);
// Motor.move();
//We cannot access any Motorcycle specific properties or methods in our Vehicle class.

//Prototypes

// class Person{
//   constructor(firstname,lastname){
//       this.firstname=firstname;
//       this.lastname=lastname;
//   }
//   greet(){
//       console.log("hi there");
//   }
// }
// Person.prototype.introduce=function(){
//   console.log("Hi,I'm",this.firstname);
// };
// Person.prototype.favoriteColor="green";
// let p=new Person("Maria","Saga");
// console.log(p.favoriteColor);
// p.introduce();


