// function identity(arg: number): number {
//     return arg;
// }

// function identity(arg: any): any {
//     return arg;
// }

// console.log(identity("hello"));
// console.log(identity(1));
// console.log(identity({name: 'leehyerim', age: 32}));

// function identity<T>(            arg: T): T {
//     return arg;
// }



// let output = identity<string>("myString");  // type of output will be 'string'


// console.log(output);
// console.log(identity("hello"));
// console.log(identity(1));
// console.log(identity({name: 'leehyerim', age: 32}));

// #https://www.typescriptlang.org/docs/handbook/generics.html#working-with-generic-type-variables
// function identity<T>(arg: T): T {
//     return arg;
// }

// function loggingIdentity<T>(arg: T[]): T[] {
//     console.log(arg.length);
//     return arg;
// }

// function loggingIdentity<T>(arg: Array<T>): Array<T> {
//     console.log(arg.length);
//     return arg;
// }

// console.log(loggingIdentity<number>([1, 2, 3]));

// #https://www.typescriptlang.org/docs/handbook/generics.html#generic-types
// function identity<T>(arg: T): T {
//     return arg;
// }

// let myIdentity: <T>(arg: T) => T = identity;

// function identity<T>(arg: T): T {
//     return arg;
// }

// let myIdentity: <T>(arg: T) => T = identity;

// function identity<T>(arg: T): T {
//     return arg;
// }

// let myIdentity: {<T>(arg: T): T} = identity;

// interface GenericIdentityFn {
//     <T>(arg: T): T;
// }

// function identity<T>(arg: T): T {
//     return arg;
// }

// let myIdentity: GenericIdentityFn = identity;

// interface GenericIdentityFn<T> {
//     (arg: T): T;
// }

// function identity<T>(arg: T): T {
//     return arg;
// }

// let myIdentity: GenericIdentityFn<number> = identity;

// #https://www.typescriptlang.org/docs/handbook/generics.html#generic-classes
class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;
}

// let myGenericNumber = new GenericNumber<number>();
// myGenericNumber.zeroValue = 0;
// myGenericNumber.add = function(x, y) { return x + y; };

// let stringNumeric = new GenericNumber<string>();
// stringNumeric.zeroValue = "";
// stringNumeric.add = function(x, y) { return x + y; };

// console.log(stringNumeric.add(stringNumeric.zeroValue, "test"));

interface Lengthwise {
    length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);    // Now we know it has a .lenth property, so no more err
    return arg;
}

const obj = {
    name: 'leehyerim',
    age: 32,
    sex: 'female'
}
// loggingIdentity(3); // Error, number doesn't have a .length property

// loggingIdentity([1, 2, 3, 4, 5, 6, 7]);
// loggingIdentity({length: 45, age: 32, weight: 55});
// loggingIdentity("hellomynameis");
// loggingIdentity(obj.name);

// #https://www.typescriptlang.org/docs/handbook/generics.html#using-type-parameters-in-generic-constraints
// function getProperty<T, K extends keyof T>(obj: T, key: K) {
//     return obj[key];
// }

// let x = { a: 1, b: 2, c: 3, d: 4};
// let result = getProperty(x, "a"); // okay
// let result2 = getProperty(x, "c"); // okay
// // getProperty(x, "m");    // error: Argument of type 'm' isn't assignable to 'a' | 'b' | 'c' | 'd'.
// console.log(result);
// console.log(result2);


// #https://www.typescriptlang.org/docs/handbook/generics.html#using-class-types-in-generics
function create<T>(c: {new(): T; }): T {
    return new c();
}

class BeeKeeper {
    hasMask: boolean;
}

class ZooKeeper {
    nametag: string;
}

class Animal {
    numLegs: number;
}

class Bee extends Animal {
    keeper: BeeKeeper;
}

class Lion extends Animal {
    keeper: ZooKeeper;
}

function createInstance<T extends Animal>(c: new () => T): T {
    return new c();
}

createInstance(Lion).keeper.nametag;    // typechecks!
createInstance(Bee).keeper.hasMask;     // typechecks!
