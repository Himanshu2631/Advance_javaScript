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
  // Output: That's a wonderful jacket, Bob!
