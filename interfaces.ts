// #Interfaces
// #Our First Interface

// interface LabeledValue {
//     label: string;
// }

// function printLabel(labeledObj: LabeledValue) {
//     console.log(labeledObj.label);
// }

// let myObj = { size: 10, label: "Size 10 Object"};
// printLabel(myObj);

// ////#Optional Properties
// interface SquareConfig {
//     color?: string;
//     width?: number;
//     [propName: string]: any;
// }

// function createSquare(config: SquareConfig): {color: string; area: number} {
//     let newSquare = {color: "white", area: 100};
//     if (config.color) {
//         newSquare.color = config.color;
//     }
//     if (config.width) {
//         newSquare.area = config.width * config.width;
//     }
//     return newSquare;
// }

// let mySquare = createSquare({color: "black"});
// let mySquare2 = createSquare({});
// let mySquare3 = createSquare({width: 25});
// let mySquare4 = createSquare({width: 100, opacity: 0.5} as SquareConfig);
// let mySquare5 = createSquare({width: 100, opacity: 0.5});

// let squareOptions = { colour: "red", width: 100};
// let mySquare6 = createSquare(squareOptions);
// // console.log(mySquare);
// // console.log(mySquare2);
// // console.log(mySquare3);
// console.log(mySquare4);
// console.log(mySquare5);
// console.log(mySquare6);

// Readonly properties
// interface Point {
//     readonly x: number;
//     readonly y: number;
// }

// let p1: Point = {x: 10, y: 20};
// // p1.x = 5; // error!

// let a: number[] = [1, 2, 3, 4];
// let ro: ReadonlyArray<number> = a;
// // ro[0] = 12; // error!
// // ro.push(5); // error!
// // ro.length = 100; // error!
// // a = ro; // error!

// a = ro as number[];

// // #Function Types
// interface SearchFunc {
//     (source: string, subString: string): boolean;
// }

// let mySearch: SearchFunc;
// let mySearch2: SearchFunc;
// mySearch = function(src: string, sub: string) {
//     let result = src.search(sub);
//     return result > -1;
// }
// mySearch2 = function(src, sub) {
//     let result = src.search(sub);
//     return result > -1;
// }

//// #Indexable Types

// interface StringArray {
//     [index: number]: string;
// }

// let myArray: StringArray;
// myArray = ["Bob", "Fred"];

// let myStr: string = myArray[0];

// class Animal {
//     name: string;
// }

// class Dog extends Animal {
//     breed: string;
// }

// interface NotOkay {
//     [x: string]: Animal;
//     [x: number]: Dog;
// }

// interface NumberDictionary {
//     [index: string]: number;
//     length: number; // ok, length is a number
//     name: string;   // error, the type of 'name' is not a subtype of the indexer
// }

interface NumberDictionary {
    [index: string]: number | string;
    length: number; // ok, length is a number
    name: string;   // error, the type of 'name' is not a subtype of the indexer
}

interface ReadonlyStringArray {
    readonly [index: number]: string;
}

let myArray: ReadonlyStringArray = ["Alice", "Bob"];
console.log(myArray[1]);
// myArray[2] = "Mallory"; // error!

// #Class Types
// #Implementing an interface
// interface ClockInterface {
//     currentTime: Date;
//     setTime(d: Date): void;
// }

// class Clock implements ClockInterface {
//     currentTime: Date = new Date();
    
//     setTime(d: Date) {
//         this.currentTime = d;
//     }
//     constructor(h: number, m: number) { }
// }

// interface ClockConstructor {
//     new (hour: number, minute: number);
// }

// class Clock implements {
//     currentTime: Date;
//     constructor(h: number, m: number) { }
// }


// interface ClockConstructor {
//     new (hour: number, minute: number): ClockInterface;
// }
// interface ClockInterface {
//     tick(): void;
// }

// function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
//     return new ctor(hour, minute);
// }

// class DigitalClock implements ClockInterface {
//     constructor(h: number, m: number) { }
//     tick() {
//         console.log("beep beep");
//     }
// }

// class AnalogClock implements ClockInterface {
//     constructor(h: number, m: number) { }
//     tick() {
//         console.log("tick tick");
//     }
// }

// let digital = createClock(DigitalClock, 12, 17);
// let analog = createClock(AnalogClock, 7, 32);

interface ClockConstructor {
    new (hour: number, minute: number);
}

interface ClockInterface {
    tick();
}

const Clock: ClockConstructor = class Clock implements ClockInterface {
    constructor(h: number, m: number) {

    }
    tick() {
        console.log("beep beep");
    }
}