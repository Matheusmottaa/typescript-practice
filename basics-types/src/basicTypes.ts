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

for (const prop in otherObj) {
  console.log(`${prop} = ${otherObj[prop]}`);
}
