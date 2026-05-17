// Without generics - need separate functions for each type
function getNumberValue(value: number): number {
  return value;
}
function getStringValue(value: string): string {
  return value;
}

// With generics - one function for all types
function getValue<T>(value: T): T {
  return value;
}

console.log(getValue<number>(21));
console.log(getValue<string>("Aman"));
console.log(getValue<boolean>(true));
console.log(getValue<number[]>([1, 2, 3, 4, 5]));
