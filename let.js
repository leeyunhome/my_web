// function varTest() {
//     var x = 1;
//     if (true) {
//         var x = 2;
//         console.log(x);
//     }
//     console.log(x);
// }

// varTest();

// function letTest() {
//     let x = 1;
//     if (true) {
//         let x = 2;
//         console.log(x);
//     }
//     console.log(x);
// }

// letTest();

// 브라우저와 노드의 글로벌 차이점
// var x = 'global';
// let y = 'global';
// console.log(`x: ${this.x}`);
// console.log(this.y);

// 생성자와 함께 사용하여 클로저를 사용하지 않고 비공개 변수를 만들고 접근할 수 있다.
// var Thing;

// {
//     let privateScope = new WeakMap();
//     let counter = 0;

//     Thing = function() {
//         this.somProperty = 'foo';

//         privateScope.set(this, {
//             hidden: ++counter,
//         });
//     };

//     Thing.prototype.showPublic = function() {
//         return this.somProperty;
//     };

//     Thing.prototype.showPrivate = function() {
//         return privateScope.get(this).hidden;
//     };
// }

// console.log(typeof privateScope);

// var thing = new Thing();
// var thing2 = new Thing();

// console.log(thing);

// console.log(thing.showPublic());
// console.log(thing.showPrivate());
// console.log(thing2.showPrivate());

// function do_something() {
//     console.log(bar);
//     console.log(foo);
//     var bar = 1;
//     let foo = 2;
// }

// do_something();

// console.log(typeof undeclaredVariable);

// console.log(typeof i);
// let i = 10;

// function test() {
//     var foo = 33;
//     if (true) {
//         let foo = (foo + 55);
//     }
// }
// test();

// function go(n) {
//     console.log(n);

//     for (let n of n.a) {
//         console.log(n);
//     }
// }

// go({a: [1, 2, 3]});

// var a = 1;
// var b = 2;

// if (a === 1) {
//     var a = 11;
//     let b = 22;

//     console.log(a);
//     console.log(b);
// }

// console.log(a);
// console.log(b);

// const numLivesForCat = 9;

// const kitty = {
//     name: "Aurora",
//     numLives: numLivesForCat,
// }

// // Error
// kitty = {
//     name: "Danielle",
//     numLives: numLivesForCat
// }

// kitty.name = "Rory";
// kitty.name = "Kitty";
// kitty.name = "Cat";
// kitty.numLives--;

// #destructuring
// let input = [1, 2];
// let [first, second] = input;
// console.log(first);
// console.log(second);
// console.log(`----------swap--------------`)

// first = input[0];
// second = input[1];
// [first, second] = [second, first];
// console.log(first);
// console.log(second);

