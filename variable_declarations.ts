// # var declarations

// var a = 10;

// function f() {
//     var message = "Hello, world!";

//     return message;
// }

// function f() {
//     var a = 10;
//     return function g() {
//         var b = a + 1;
//         return b;
//     }
// }

// var g = f();
// console.log(g());

// function f() {
//     var a = 1;

//     a = 2;
//     var b = g();
//     a = 3;

//     return b;

//     function g() {
//         console.log("g ");
//         return a;
//     }
// }

// console.log(f());

// function f(shouldInitialize: boolean) {
//     if (shouldInitialize) {
//         var x = 10;
//     }

//     return x;
// }

// console.log(f(true));    // returns '10'
// console.log(f(false));   // returns 'undefined'

// var mat: number[][] = [[1, 2, 3 ], [4, 5, 6, 7], [8, 9, 10], [11, 12, 13]];
// function sumMatrix(matrix: number[][]) {
//     var sum = 0;
//     for (var i = 0; i < matrix.length; i++) {
//         var currentRow = matrix[i];
//         console.log(currentRow);
//         for (var i = 0; i < currentRow.length; i++) {
//             sum += currentRow[i];
//         }
//     }

//     return sum;
// }
// console.log(mat.length);
// console.log(sumMatrix(mat));

// for (var i = 0; i < 10; i++) {
//     setTimeout(function() { console.log(i); }, 100 * i);
// }

// for (var i = 0; i < 10; i++) {
//     // capture the current state of 'i'
//     // by invoking a function with its current value
//     (function(i) {
//         setTimeout(function() { console.log(i); }, 100 * i);
//     })(i);
// }

// #let
// function f(input: boolean) {
//     let a = 100;

//     if (input) {
//         // Still okay to reference 'a'
//         let b = a + 1;
//         return b;
//     }

//     // Error: 'b' doesn't exist here
//     // return b;
// }

// a++;
// let a;

// function foo() {
//     return a;
// }

// // illegal call 'foo' befor 'a' is declared
// // runtimes should throw an error here
// console.log(foo());
// let a;

// function f(x) {
//     var x;
//     var x;

//     if (true) {
//         var x;
//     }
// }

// (function() {})();

// (function() {
//     console.log("hi");
// })();

// let testFunction = function hi() {
//     //
// }();
// let testFunction2 = function () {
//     //
// }();

// function f(x) {
//     let x = 100;
// }

// function g() {
//     let x = 100;
//     var x = 100;
// }

// function f(condition, x) {
//     if (condition) {
//         let x = 100;
//         return x;
//     }

//     return x;
// }

// console.log(f(false, 0));
// console.log(f(true, 0));

// function sumMatrix(matrix: number[][]) {
//     let sum = 0;
//     for (let i = 0; i < matrix.length; i++) {
//         var currentRow = matrix[i];
//         for (let i = 0; i < currentRow.length; i++) {
//             sum += currentRow[i];
//         }
//     }

//     return sum;
// }

// console.log(sumMatrix([[1, 2, 3], [4, 5]]));

// function theCityThatAlwaysSleeps() {
//     let getCity;

//     if (true) {
//         let city = "Seattle";
//         getCity = function() {
//             return city;
//         }
//     }

//     return getCity();
// }

// console.log(theCityThatAlwaysSleeps());

// for (let i = 0; i < 10; i++) {
//     setTimeout(function() { console.log(i); }, 100 * i);
// }

// function f([first, second]: [number, number]) {
//     console.log(first);
//     console.log(second);
// }

// f([1, 2]);

// let [first, ...rest] = [1, 2, 3, 4];
// console.log(first);
// console.log(rest);
// console.log(typeof rest);

// let [, second, , fourth] = [1, 2, 3, 4];
// console.log(second);
// console.log(fourth);

let tuple: [number, string, boolean] = [7, "hello", true];
// let [a, b, c] = tuple;

// let [a, b, c, d] = tuple;

// let [a, ...sexy] = tuple; // bc: [string, boolean]
// console.log(a);
// console.log(sexy);
// let [a, b, c, ...d] = tuple;

// let [a] = tuple;
// let [, b] = tuple;
// console.log(a);
// console.log(b);
// // console.log(c);
// // console.log(d);

// let o = {
//     a: "foo",
//     b: 12,
//     c: "bar"
// };
// let { a, b, c } = o;

// console.log(a);
// console.log(b);
// console.log(c);

// ({ a, b } = { a: "baz", b: 101 });

// let { a, ...passthrough} = o;

// console.log(a);
// console.log(passthrough);

// let total = passthrough.b + passthrough.c.length;
// console.log(total);

// let {a: newName1, b: newName2 } = o;
// console.log(newName1);
// console.log(newName2);

// let {a, b} : { a: string, b: number } = o;

// function keepWholeObject(wholeObject: {a: string, b?:number}) {
//     let { a, b = 1001 } = wholeObject;
// }

// type C = { a: string, b?: number }
// function f({ a, b}: C): void {

// }

// function f({a, b = 0} = { a: ""}) : void {
//     // ...
// }
// f({a: "yes"});  // ok, default b = 0
// f(); // ok, default to { a: "" }, which then defaults b = 0
// // f({}); // error, 'a' is required if you supply an argument

// let first = [1, 2];
// let second = [3, 4];
// let bothPlus = [0, ...first, ...second, 5];

// console.log(bothPlus);

// let defaults = { food: "spicy", price: "$$", ambiance: "noisy"};
// // let search = { ...defaults, food: "rich"};
// let search = { food: "rich", ...defaults};

// console.log(search);

// class C {
//     p = 12;
//     m() {

//     }
// }
// let c = new C();
// let clone = { ...c };
// clone.p;
// clone.m();