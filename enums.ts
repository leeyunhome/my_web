// enum Direction {
//     Up = 1,
//     Down,
//     Left,
//     Right,
// }

// enum Responses {
//     No = 0,
//     Yes = 1,
// }

// function respond(recipient: string, message: Responses): void {
//     // ...
//     console.log(`${recipient}'s respond is ${message}`);
// }

// respond("Princess Caroline", Responses.Yes)

// enum E {
//     A = getSomeValue(),
//     B, // Error! Enum member must have initializer.
// }

// #https://www.typescriptlang.org/docs/handbook/enums.html#string-enums
enum Direction {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT",
}

// #https://www.typescriptlang.org/docs/handbook/enums.html#heterogeneous-enums
// enum BooleanLikeHeterogeneousEnum {
//     No = 0,
//     Yes = "YES",
// }

// #https://www.typescriptlang.org/docs/handbook/enums.html#computed-and-constant-members
// E.X is constant:
// enum E { X, Y, Z}

// enum E2 {
//     A = 1, B, C
// }

// console.log(E.X + 1);
// console.log(E.Y);
// console.log(E.Z);

// enum FileAccess {
//     // constant members
//     None,
//     Read    = 1 << 1,
//     Write   = 1 << 2,
//     ReadWrite = Read | Write,
//     // computed member
//     G = "123".length
// }

// console.log(FileAccess.G);

// enum ShapeKind {
//     Circle,
//     Square,
// }

// interface Circle {
//     kind: ShapeKind.Circle;
//     radius: number;
// }

// interface Square {
//     kind: ShapeKind.Square;
//     sideLength: number;
// }

// let c: Circle = {
//     kind: ShapeKind.Square, // Error! Type 'ShpaeKind.Square' is not assignable to type 
//                             // 'ShapeKind.Circle'.
//     radius: 100,
// }

// enum E {
//     Foo,
//     Bar,
// }

// function f(x: E) {
//     if (x !== E.Foo || x !== E.Bar) {
//         //
//         // Error! This condition will always return 'true'
//         // since the types 'E.Foo' and 'E.Bar have no overlap.
//     }
// }

// enum E {
//     X, Y, Z
// }

// function f(obj: { X: number, Y: number, Z: number }) {
//     return obj.Z;
// }

// console.log(f(E));

// enum LogLevel {
//     ERROR, WARN, INFO, DEBUG
// }

// /**
//  * This is equvalent to:
//  * type LogLevelStrings = 'ERROR' | 'WARN' | 'INFO' | 'DEBUG'
//  */
// type LogLevelStrings = keyof typeof LogLevel;

// function printImportant(key: LogLevelStrings, message: string) {
//     const num = LogLevel[key];
//     if (num <= LogLevel.WARN) {
//         console.log('Log level key is: ', key);
//         console.log('Log level value is: ', num);
//         console.log('Log level message is: ', message);
//     }
// }

// printImportant('ERROR', 'This is a message');

// enum Enum {
//     A
// }
// let a = Enum.A;
// let nameOfA = Enum[a];

// console.log(nameOfA);

// const enum Enum {
//     A = 1,
//     B = A * 2
// }

// const enum Directions {
//     Up,
//     Down,
//     Left,
//     Right
// }

// let directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right]

declare enum Enum {
    A = 1,
    B,
    C = 2
}
