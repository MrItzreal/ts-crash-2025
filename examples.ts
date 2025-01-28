//  EXPLICITLY TYPED VARIABLES:
let myName: string = "Izzy";
let numberOfWheels: number = 4;
let isStudent: boolean = false;

// DEFINING CUSTOM TYPES:
// Example #1:
type Food = string;
let favoriteFood: Food = "pizza";

// Example #2:
type Person = {
  name: string;
  age: number;
  isStudent: boolean;
};

let person1: Person = {
  name: "Izzy",
  age: 28,
  isStudent: false,
};

let person2: Person = {
  name: "Sue",
  age: 48,
  isStudent: true,
};

/* NOTES:
-The "type" keyword creates a new name for a type. This exists only in TS and is great for readability and code reuse. By convention, the name that we give our type starts with a capital letter ex: type Food.

*/

// NEXT TOPIC
