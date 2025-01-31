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

/*
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
 */

// LITERAL TYPES & UNION LITERAL TYPES

// Literal Types ex:
let myName: "Izzy" = "Izzy1"; // Error! Type '"Izzy1"' is not assignable to type '"Izzy"'.
const myName2: "Izzy" = "Izzy1"; // Error! Type '"Izzy1"' is not assignable to type '"Izzy"'.

// Union Literal Types ex:
type UserRole = "guest" | "member" | "admin";
let userRole: UserRole = "member";

// I can also nest the same options in a different "type"
type User = {
  username: string;
  role: "guest" | "member" | "admin";
};

/* NOTES:
A: The "type" keyword creates a new name for a type. This exists only in TS and is great for readability and code reuse. By convention, the name that we give our type starts with a capital letter ex: type Food.

B: For "typing arrays" you can teach TS that a type is an array ex:
"let ages: number[] = [100, 101]"; but if is a primite data type I can write  
"let ages = [100, 101]" and TS will understand that this is an array.

B.1: 
V.1 let people: Person[] = [person1, person2];
V.2 let people: Array<Person> = [person1, person2];

These two versions do the same its just different syntax.

C: Literal types allow you to specify the exact value a variable can hold.  Instead of a broad type like "string", you're saying, "This variable must be this specific string".

C.2: Union Literal Types: they act as a form of content control, restricting a variable to a specific set of string (or other primitive) values. Enforcing Specific Values:  Sometimes, you want to restrict a variable to a very specific set of values.  Think of things like:

type Direction = "North" | "East" | "South" | "West";
let heading: Direction = "North"; // Perfectly fine
heading = "South"; // Also fine
heading = "Up"; // Error! "Up" is not a valid Direction

D: Type Narrowing: Works very well with union literal types. Inside a "switch" statement or an "if" statement that checks the value of a variable with a union literal type, TypeScript can narrow down the type to a specific literal within that block of code.

D.1: Type narrowing can be used when we write a function or within a scope and don't determine its data type. TypeScript expects us to narrow down the type.
*/
