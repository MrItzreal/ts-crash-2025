/*
//EXPLICITLY TYPED VARIABLES:
let myName: string = "Izzy";
let numberOfWheels: number = 4;
let isStudent: boolean = false;

// DEFINING CUSTOM TYPES
// Example #1:
type Food = string;
let favoriteFood: Food = "pizza";

// DEFINING CUSTOM TYPES
// Example #2:
type Address = {
  street: string;
  city: string;
  country: string;
};

type Person = {
  name: string;
  age: number;
  isStudent: boolean;
  address?: Address;
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
  address: {
    street: "123 Main",
    city: "Anytown",
    country: "USA",
  },
};

function displayInfo(person) {
  console.log(`${person.name} lives at ${person.address?.street}`);
}

displayInfo(person1);
 */

// TYPING ARRAYS
let ages: number[] = [100, 101];
ages.push(true);

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

let people: Person[] = [person1, person2];
// let people: Array<Person> = [person1, person2];

/* NOTES:
-The "type" keyword creates a new name for a type. This exists only in TS and is great for readability and code reuse. By convention, the name that we give our type starts with a capital letter ex: type Food.

-For "typing arrays" you can teach TS that a type is an array ex:
"let ages: number[] = [100, 101]"; but if is a primite data type I can write  
"let ages = [100, 101]" and TS will understand that this is an array.

1-) 
V.1 let people: Person[] = [person1, person2];
V.2 let people: Array<Person> = [person1, person2];

These two versions do the same its just different syntax.

*/

// NEXT TOPIC
