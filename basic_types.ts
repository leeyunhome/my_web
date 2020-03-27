let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

let color: string = "blue";
color = 'red';

let fullName: string = `Bob Bobbington`;
let age: number = 37;
let sentence: string = `Hello, my name is ${ fullName }.

I'll be ${age + 1} years old next month`;

// let list: number[] = [1, 2, 3];
let list: Array<number> = [1, 2, 3, 4];

// Declare a tuple type
let x: [string, number];
// Initialize it
x = ["hello", 10];

// Initialize it incorrectly
// x = [10, "hello"];

console.log(x[0].substring(3));
// console.log(x[1].substring(1));

// x[3] = "world"; // Error, Property '3' does not exist on type '[string, number]'.
// console.log(x[5].toString());   // Error, Property '5' does not exist on tpe '[string, number]'.

// enum Color {Red, Green, Blue}
// // let c: Color = Color.Blue;
// let colorName: string = Color[2];

// console.log(colorName);

// #Any
let notSure: any = 4;
// notSure = "maybe a string instead";
// notSure = false;
// console.log(notSure.ifItExists());
// console.log(notSure.toFixed());

// let prettySure: Object = 4;
// prettySure.toFixed();   // Error: Property 'toFixed' doesn't exist on type 'Object'.


// console.log(1 instanceof Number);

// function warnUser(): void {
//     console.log("This is my warning message");
// }

// warnUser();

// let unusable: void = undefined;
// console.log(unusable);

// let u: undefined = undefined;

function error(message: string): never {
    throw new Error(message);
}

// error("에로");

// function fail() {
//     return error("Something failed");
// }

// fail();

// function infiniteLoop(): never {
//     while (true) {
//         console.log("infiniteLoop");
//     }
// }

// infiniteLoop();

// #Object
// declare function create(o: object | null): void;

// create({ prop: 0 }); // OK
// create(null); // OK

// create(42);
// create("string");
// create(false);
// create(undefined);

// #Type assertions

let someValue: any = "this is a string";

// let strLength: number = (<string>someValue).length;
let strLength: number = (someValue as string).length;

console.log(strLength);