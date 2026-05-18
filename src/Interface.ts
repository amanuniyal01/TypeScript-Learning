// Basic Interface
interface Person {
  name: string;
  age: number;
  isStudent?: boolean; 
  readonly marks: number;
}

const student: Person = {
  name: "Aman",
  age: 21,
  marks: 92,
};
console.log(student);
