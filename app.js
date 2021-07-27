console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
class Person{
 constructor(name,pets,residence,hobbies){
     this.name= name;
     this.pets = pets;
     this.residence = residence;
     this.hobbies = hobbies;
 }
 info(){
     console.log(`My name is ${this.name}. I have ${this.pets} pets. I live in ${this.residence}. I am a ${this.occupation}. I enjoy ${this.hobbies}.`);
 }
 greeting (){
     console.log("Welcome");
 }
}
 class Coder extends Person{
 constructor(name,pets,residence,hobbies){
     super(name,pets,residence,hobbies);
    this.occupation ="Full Stack Web Developer";
 }
 greeting(guest ='User'){
 console.log(` Hello ${guest} ! Need me to make a website?`)
 }
 }
 

let taiyanna = new Coder ("Taiyanna", 0, "Atlanta", ["kickboxing"]);

taiyanna.info();
taiyanna.greeting("Sebrina");

