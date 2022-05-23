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
  Enum is a type of data structures
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

/*

  Union Types => |

*/

function addOrConcat(a: number | string, b: number | string): number | string {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  }
  return `${a}${b}`;
}
console.log(addOrConcat(10, 20));
console.log('John', 'Doe');

// eslint-disable-next-line no-irregular-whitespace
// Literal types => uses values ​literal type

let c = 10;
c = 0b1010001;

//c = 'blabla';

console.log(c);

const v = 2;

let test = 100 as const; //eslint-disable-line

//test = 20 -> Error

function choseColor(color: 'Red' | 'Green' | 'Blue'): string {
  return color;
}

console.log(choseColor('Red'));
//console.log(choseColor('pink'));

/*
  Type Alias => create a name for a specific type
*/

type Age = number;

type colorRGB = 'Red' | 'Green' | 'Blue';
type colorCMYK = 'Ciano' | 'Magenta' | 'Yellow' | 'Black';

type myColor = colorRGB | colorCMYK;

type Person = {
  name: string;
  lastName: string;
  city: string;
  age: Age;
  weight?: number;
  color: myColor;
};

const person: Person = {
  name: 'John',
  lastName: 'Doe',
  city: 'New York',
  age: 36,
  weight: 300,
  color: 'Black',
};

console.log(person);

/*
  Intersection Types => &
*/

type hasName = { name: string };
type hasLastName = { lastName: string };
type hasAge = { age: number };
type PersonM = hasName & hasLastName & hasAge;

const pessoa: PersonM = {
  name: 'Fulano',
  lastName: 'kn',
  age: 25,
};

type AB = 'A' | 'B';
type AC = 'A' | 'C';
type Intersection = AB & AC;

const result: Intersection = 'A';
console.log(result);

/*
  Functions like types
*/

const sayHi: (name: string) => void = (name) => {
  console.log(`Hi ${name}`);
};

console.log(sayHi('John'));

type MapStringsCallback = (item: string) => string;

function mapStrings(arr: string[], callbackfn: MapStringsCallback): string[] {
  const newArr: string[] = [];
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    newArr.push(callbackfn(item));
  }
  return newArr;
}

const abc = ['a', 'b', 'c'];

const abcMapped = mapStrings(abc, (item: string) => {
  return item.toUpperCase();
});

console.log(abcMapped);

/*
  Structural type
*/

type User = {
  username: string;
  password: string;
};

type VerifyUserFn = (user: User, sentValue: User) => boolean;

const verifyUser: VerifyUserFn = (user, sentValue) => {
  return (
    user.username === sentValue.username && user.password === sentValue.password
  );
};
const dbUser = {
  username: 'John',
  password: '1234',
};

const sentUser = {
  username: 'John',
  password: '1234',
};

console.log('As senhas sao iguais?', verifyUser(dbUser, sentUser));

sentUser.password = 'hala madrid';

console.log('As senhas sao iguais?', verifyUser(dbUser, sentUser));

/*
  Type assertions
*/

const $body = document.querySelector('body');

if ($body) {
  $body.style.background = 'red';
}

// Non-null assertion (!).
const $body2 = document.querySelector('body')!;
$body2.style.background = 'green';

// Type assertion
const $body3 = document.querySelector('body') as HTMLBodyElement;

$body3.style.background = 'gray';

const $input = document.querySelector('input') as unknown as number;
