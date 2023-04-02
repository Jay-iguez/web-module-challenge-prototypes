// 👇 COMPLETE YOUR WORK BELOW 👇
/* ❗❗ NOTE: PLEASE USE INDIVIDUAL KEYS FOR YOUR CONSTRUCTOR PARAMETERS, NOT OBJECTS. THE TESTS WILL NOT PASS WITH OBJECTS. ❗❗  */

/*
  TASK 1
    - Write a Person Constructor that initializes `name` and `age` from arguments.
    - All instances of Person should initialize with an empty `stomach` array.
    - Give instances of Person the ability to `.eat("someFood")`:
        + .eat() should recieve a string as a parameter and take some type of edible as an argument
        + When eating an edible, it should be pushed into the `stomach` array.
        + The `eat` method should have no effect if there are 10 items in the `stomach` array.
    - Give instances of Person the ability to `.poop()`:
        + When an instance poops, its `stomach` array should be empty.
    - Give instances of Person a method `.toString()`:
        + It should return a string with `name` and `age`. Example: "Mary, 50"
*/

function Person(name, age) {
  this.name = name
  this.age = age
  this.stomach = []
}

Person.prototype.eat = function (string) {
  if(!this.stomach.length > 10 && this.stomach.length <= 10) {
    this.stomach.push(string)
  } else if (this.stomach.length) {
    return console.log(`I'm full`)
  }
}

Person.prototype.poop = function () {
  this.stomach.length = 0
}

Person.prototype.toString = function () {
  return `${this.name}, ${this.age}`
}

const aPerson = new Person (`Javi`, '25')

console.log(`Task 1`, aPerson)

/*
  TASK 2
    - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
    - All instances built with Car:
        + should initialize with an `tank` at 0
        + should initialize with an `odometer` at 0
    - Give cars the ability to get fueled with a `.fill(gallons)` method
      + should take 'gallons' as an parameter which will take number of gallons as an argument
      + should add the gallons to `tank`.
    - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
        + Should cause the `odometer` to go up.
        + Should cause the the `tank` to go down taking `milesPerGallon` into account.
    - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
        + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/

function Car(model, milesPerGallon) {
  this.model = model
  this.milesPerGallon = milesPerGallon
  this.tank = 0
  this.odometer = 0
}

Car.prototype.fill = function (gallons) {
  return this.tank = this.tank + gallons
}

Car.prototype.drive = function(distance) {
    if (!this.tank == 0) {
    this.odometer = this.odometer + distance
    return this.tank = this.tank - (this.milesPerGallon / distance)
  }
}


const Honda = new Car (`Honda`, `25`)

console.log(`Task 2`, Honda)
console.log(Honda.fill(13))
console.log(Honda.tank)
console.log(Honda.drive(30))
console.log(Honda)
/*
  TASK 3
    - Write a Baby constructor subclassing Person.
    - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
    - Besides the methods on Person.prototype, babies also have the ability to `.play()`:
        + Should return a string "Playing with x", x being the favorite toy.
*/

function Baby(name, age, favoriteToy) {
  Person.call(this, name, age)
  this.favoriteToy = favoriteToy
}

Baby.prototype = Object.create(Person.prototype)

Baby.prototype.play = function () {
  return `Playing with ${this.favoriteToy}`
}

const bebeh = new Baby (`BB`, `1`, `Fortnite`)

console.log(`Task 3`, bebeh)
/* 
  TASK 4
  In your own words explain the four principles for the "this" keyword below:
  1. Global/Window binding is the concept of context where the 'this' keyword would grab items within the global scope of the window opposed to to a particular function.
  you would want to avoid binding anything to the window.
  2. Implicit binding is where the 'this' keyword would reference and grab context when on the left side of an object for the object's key name. You use it in those
  specifc instances of Consructor functions essentially in place of the actual referenced objects name.
  3. Explicit binding refers to where one would override an object's/functions parameters by using a .call or .apply method. You are essentially explicitely telling the function
  what to use, or defining it's context.
  4. New binding refers to where a Constructor function recieves new arguements and creates essentially a copy of it's own object's locations and fills them with the given object/keys data.
  You use this as a literal template to create multiple objects with the same methods and thus key/value pairs.
*/

///////// END OF CHALLENGE /////////

/* 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 */
function foo(){
  console.log('its working!');
  return 'bar';
}
foo();
module.exports = {
  foo,
  Person, 
  Car,
  Baby
}
