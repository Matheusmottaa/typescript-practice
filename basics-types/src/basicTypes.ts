const numbers: number[] = [3, 4, 8, 10];

const sumOfArray = numbers.reduce((x: number, y: number) => {
  return x + y;
});

console.log(sumOfArray);

const multi: (x: number, y: number) => number = (x, y) => x * y;

console.log(multi(20, 30));

// Any type accepts all data types that exist in javascript

function showArguments(arg: any) {
  return arg;
}

console.log(showArguments([2, 3, 5, 7]));
console.log(showArguments({ name: 'John Doe' }));
console.log(showArguments(null));
console.log(showArguments((x: number) => x));
console.log(showArguments(20 % 6));

// The void type means empty, as in numerical set theory

function returnNothing(...rest: string[] | number[]): void {
  console.log(rest.join(' | '));
}

console.log(returnNothing('John Doe', 'Real Madrid', 'LA Lakers'));

console.log(returnNothing(20, 10, 2));

// Typing an Object

const obj: Record<string, unknown> = {
  key1: 'Just something',
  key2: 2,
};

obj.key3 = 'Hello';

for (const prop in obj) {
  console.log(`${prop} = ${obj[prop]}`);
}

// Another way to type an object.

const otherObj: {
  readonly name: string;
  lastName: string;
  driverLicense?: boolean;
  [key: string]: unknown;
} = {
  name: 'Joh',
  lastName: 'Doe',
  driverLicense: true,
};

otherObj.age = 72;
otherObj.weight = 200;

// Type Array

function sumArgs(...numbers: Array<number>): number {
  return numbers.reduce((accumulated, current) => accumulated + current);
}

function namesToUpperCase(...names: string[]): string[] {
  return names.map((name) => name.toUpperCase());
}

console.log(sumArgs(1, 2, 3, 5));
console.log(
  namesToUpperCase(
    'nikola tesla',
    'richard feyman',
    'cristiano ronaldo',
    'lionel messi',
  ).join(', '),
);

/*
Type Tuple is an array with specific types and a defined size.
This type only exists in typescript
*/

const data: readonly [number, boolean, string, number?] = [10, true, 'Hi'];

for (let i = 0; i < data.length; i++) {
  console.log(data[i]);
}

/*
  Types null and undefined
*/

let x: unknown = process.argv[2];

typeof x === 'undefined' ? (x = 20) : (x = 'hello');

console.log(x);

function squareOf(x?: any): number | null {
  if (typeof x !== 'number') {
    return null;
  }
  return x ** 2;
}

console.log(squareOf(3));
console.log(squareOf());

/*
  Type never => use to show an error with a function or something like that
*/

function makeError(): never {
  throw new Error('There is an error ');
}

// makeError();

/*
  Enum is a data structure in typescript
*/

enum Colors {
  red,
  blue,
  yellow,
}

console.log(Colors);
console.log(Colors.red);
console.log(Colors[1]);

function choseAColor(color: Colors): void {
  console.log(Colors[color]);
}

choseAColor(Colors.red);

/*
  Type unknown is like a type any but more safe
*/

let y: unknown;

// eslint-disable-next-line prefer-const
y = (): number => {
  return 20;
};

console.log(y);
