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

/* 
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
*/

/* 
// FUNCTION RETURN TYPES:
type UserRole = "guest" | "member" | "admin";

type User = {
  username: string;
  role: UserRole;
};

const users: User[] = [
  { username: "john_doe", role: "member" },
  { username: "jane_doe", role: "admin" },
  { username: "guest_user", role: "guest" },
];

function fetchUserDetails(username: string): User {
  const user = users.find((user) => user.username === username);
  if (!user) {
    throw new Error(`User with username ${username} not found`);
  }

  return user;
}
  */

/*
// TS-SPECIFIC TYPE: "any":
let value = 1;
// let value: any = 1;
value.toUpperCase();
value = "Hi";
value.map();
*/

/* 

//UTILITY TYPE: "PARTIAL".
type User = {
  id: number;
  username: string;
  role: "member" | "contributor" | "admin";
};

// This would be a way to partial but is manually typed
// type UpdatedUser = {
//   id?: number;
//   username?: string;
//   role?: "member" | "contributor" | "admin";
// };

//This partial approach is the same as above but faster.
type UpdatedUser = Partial<User>;

const users: User[] = [
  { id: 1, username: "jane_doe", role: "member" },
  { id: 2, username: "john_doe", role: "contributor" },
  { id: 3, username: "guest_user", role: "admin" },
  { id: 4, username: "user_guest", role: "member" },
];

function updateUser(id: number, updates: UpdatedUser) {
  // Find the user in the array by the id
  const foundUser = users.find((user) => user.id === id);
  if (!foundUser) {
    console.log("User not found");
    return;
  }

  // Use Object.assign to update the found user in place
  Object.assign(foundUser, updates);
}

// Example updates:
updateUser(1, { username: "new_john_doe" });
updateUser(4, { role: "contributor" });

console.log(users);

*/

/*
//UTILITY TYPE: "OMIT".
type User = {
  id: number;
  username: string;
  role: "member" | "contributor" | "admin";
};

type UpdatedUser = Partial<User>;

let nextUserId = 1;

const users: User[] = [
  { id: nextUserId++, username: "jane_doe", role: "member" },
  { id: nextUserId++, username: "john_doe", role: "contributor" },
];

function updateUser(id: number, updates: UpdatedUser) {
  const foundUser = users.find((user) => user.id === id);
  if (!foundUser) {
    console.log("User not found");
    return;
  }

  // Use Object.assign to update the found user in place
  Object.assign(foundUser, updates);
}

function addNewUser(newUser: Omit<User, "id" | "user">): User {
  const user: User = {
    id: nextUserId++,
    ...newUser,
  };

  users.push(user);
  return user;
}

//example usage
addNewUser({ username: "joe_schmoe", role: "member" });
console.log(users);
*/

/* 
// GENERICS
const gameScores = [14, 21, 33, 42, 59];

const favoriteThings = [
  "raindrops on roses",
  "whiskers on kittens",
  "bright copper kettles",
  "warm woolen mittens",
];

const voters = [
  { name: "Alice", age: 100 },
  { name: "Bob", age: 32 },
];

function getLastItem<Type>(array: Type[]): Type | undefined {
  return array[array.length - 1];
}

console.log(getLastItem(gameScores));
console.log(getLastItem(favoriteThings));
console.log(getLastItem(voters));

// Another short example of using "Generics"
function addToArray<T>(array: T[], item: T): T[] {
  array.push(item);
  return array;
}
*/

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

E: Learned to avoid "any" since it defeats the purpose of TS:

E.1: The "any" type tells TS that a variable can hold a value of any type. 
E.2: This means: No Type Restrictions & All Operations Allowed.

F: Learned about "void" return type:

F.1 The void return type in TS is used when a function doesn't explicitly return a value.
F.2 You don't need to use the return keyword in a void function.
F.3 Often used for functions that perform side effects, such as modifying variables, logging to the console, or making network requests.


G: Utility Types

G.1: Like functions, they take other "types" in as parameters and return new types with some changes. Built-in to TS, perform commonly needed modifications to existing types.

G.2: Use "Generics" syntax using angle brackets (<>) for example: Partial<User>. When using utility types, the 1st letter must be capitalized: "Partial".

G.3: Partial type modifies the type you pass in and turns all properties into optional properties.

G.4: It's important to use Partial carefully, especially when working with large objects. If you make too many properties optional, it can make your code less predictable and potentially lead to errors.

G.5: Other Utility Types:

-`Required`: Makes all properties of a type required.
-`Readonly`: Makes all properties of a type read-only.
-`Pick`: Creates a new type with only a subset of properties from an existing type.
-`Exclude`: Creates a new type with all properties from an existing type except for a specified subset.
-`Omit`: Takes in a type AND a string (or union of strings) property names, and returns a new type with those properties removed. The opposite of `Pick`. Syntax: Omit<Type, Keys>.
 
G.6: In JavaScript, Object.assign() is a method used to copy the values of all enumerable own properties from one or more source objects to a target object. It returns the modified target object. 

G.7: Object.assign(target, ...sources);
- target: The object that will receive the copied properties.
- sources: One or more objects from which to copy the properties.

H: Generics

H.1: Generics are like templates for functions and types. They allow you to write code that can work with different data types without knowing those types beforehand, making your code more flexible and reusable.
H.2: Add flexibility to existing functions and types, etc.
H.3: The angle brackets "<>" introduce type parameters. These act as placeholders for specific types that will be provided when the generic function or type is used.
H.4: "T" is a naming convention for a single type parameter, but you can use more descriptive names like ItemType or ElementType to improve readability, especially when you have multiple type parameters.
H.5: Explicit Return Types: You can explicitly specify the return type of a generic function, as we did in the getLastItem example. This helps clarify the function's behavior and ensures type safety.

*/
