// Basic Interface
interface Person {
  name: string;
  age: number;
  isStudent?: boolean; //This is optional property.
  readonly marks: number;
}

const student: Person = {
  name: "Aman",
  age: 21,
  marks: 92,
};
console.log(student);
