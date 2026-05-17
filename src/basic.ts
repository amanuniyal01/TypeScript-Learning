// Primitives - That store single values.
let message: string = "Hello TypeScript";
let age: number = 19;
let isValidToVote: boolean = true;
console.log(message, age, isValidToVote);

// Arrays
let fruits: string[] = ["Apple", "Banana", "Mango"];
let count: number[] = [1, 2, 3, 4, 5];
let mixArray = [1, 2, 3, "Aman", "Anurag"];
console.log(fruits, count, mixArray);

// Tuples
let person: [string, number] = ["Aman", 21];
console.log(person);

// ENUM
enum Color {
  Red = "Red",
  Blue = "Blue",
}
let favcolor: Color = Color.Blue;
console.log(favcolor);

// Any type(avoid id possible)
let randomValue:any=10
randomValue="Any type"

// Unknown(safer than any)