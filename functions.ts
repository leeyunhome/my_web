// function add(x, y) {
//     return x + y;
// }

// let myAdd = function(x, y) { return x + y; };

// console.log(add(1, 2));
// console.log(myAdd(2, 3));

// let z = 100;

// function addToZ(x: number, y: number): number {
//     return x + y + z;
// }

// console.log(addToZ(1, 2));

// let myAdd = function(x: number, y: number): number { return x + y; };

// console.log(myAdd(1, 2));

// #https://www.typescriptlang.org/docs/handbook/functions.html#writing-the-function-type

// let myAdd: (x: number, y: number) => number =
//     function(x: number, y: number): number { return x + y; };

// let myAdd: (baseValue: number, increment: number) => number =
//     function(x: number, y: number): number { return x + y; };

// let myAdd: (baseValue: number, increment: number) => number =
//     function(x: number, y: number): number { return x + y; };

// #https://www.typescriptlang.org/docs/handbook/functions.html#inferring-the-types

// myAdd has the full function type
// let myAdd = function(x: number, y: number): number { return x + y; };

// The parameters 'x' and 'y' have the type number
// let myAdd: (baseValue: number, increment: number) => number = 
//     function(x, y) { return x + y; };

// #https://www.typescriptlang.org/docs/handbook/functions.html#optional-and-default-parameters

// function buildName(firstName: string, lastName: string) {
//     return firstName + " " + lastName;
// }

// let result1 = buildName("Bob");
// let result2 = buildName("Bob", "Adams", "Sr.");
// let result3 = buildName("Bob", "Adams");

// function buildName(firstName: string, lastName?: string) {
//     if (lastName)
//     return firstName + " " + lastName;
//     else
//     return firstName;
// }

// let result1 = buildName("Bob");
// // let result2 = buildName("Bob", "Adams", "Sr.");
// let result3 = buildName("Bob", "Adams");

// console.log(result1);
// console.log(result3);

// function buildName(firstName: string, lastName = "Smith") {
//     return firstName + " " + lastName;
// }

// let result1 = buildName("Bob");

// let result2 = buildName("Bob", undefined);
// // let result3 = buildName("Bob", "Adams", "Sr.");
// // let result4 = buildName("Bob", "Adams");

// function buildName(firstName: string, lastName?:string) {

// }

// function buildName2(firstName: string, lastName = "Smith") {

// }


// function buildName(firstName = "Will", lastName: string) {
//     return firstName + " " + lastName;
// }

// // let result1 = buildName("Bob");
// // let result2 = buildName("Bob", "Adams", "Sr.");
// let result3 = buildName("Bob", "Adams");
// let result4 = buildName(undefined, "Adams");

// console.log(result4);

// #https://www.typescriptlang.org/docs/handbook/functions.html#rest-parameters

// function buildName(firstName: string, ...restOfName: string[]) {
//     return firstName + " " + restOfName.join(" ");
// }

// let employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKinzie");

// console.log(employeeName);

// function buildName(firstName: string, ...restOfName: string[]) {
//     return firstName + " " + restOfName.join(" ");
// }

// let buildNameFun: (fname: string, ...rest: string[]) => string = buildName;

// let deck = {
//     suits: ["hearts", "spades", "clubs", "diamonds"],
//     cards: Array(52),
//     createCardPicker: function() {
//         return () => {
//             let pickedCard = Math.floor(Math.random() * 52);
//             let pickedSuit = Math.floor(pickedCard / 13);
    
//             return {suit: this.suits[pickedSuit], card: pickedCard % 13};
//         }
//     }
// }

// let cardPicker = deck.createCardPicker();
// let pickedCard = cardPicker();

// alert("card: " + pickedCard.card + " of " + pickedCard.suit);

// interface Card {
//     suit: string;
//     card: number;
// }
// interface Deck {
//     suits: string[];
//     cards: number[];
//     createCardPicker(this: Deck): () => Card;
// }
// let deck: Deck = {
//     suits: ["hearts", "spades", "clubs", "diamonds"],
//     cards: Array(52),
//     // NOTE: the function now explicitly specifies that its callee must be of type Deck
//     createCardPicker: function(this: Deck) {
//         return () => {
//             let pickedCard = Math.floor(Math.random() * 52);
//             let pickedSuit = Math.floor(pickedCard / 13);
    
//             return {suit: this.suits[pickedSuit], card: pickedCard % 13};
//         }
//     }
// }

// let cardPicker = deck.createCardPicker();
// let pickedCard = cardPicker();

// console.log("card: " + pickedCard.card + " of " + pickedCard.suit);

// interface UIElement {
//     addClickListener(onclick: (this: void, e: Event) => void): void;
// }
// class Handler {
//     info: string;
//     onClickBad(this: Handler, e: Event) {
//         this.info = e.message;
//     }
// }

// let h = new Handler();
// uiElement.addClickListener(h.onClickBad);

// class Handler {
//     info: string;
//     onClickBad(this: Handler, e: Event) {
//         this.info = e.message;
//     }
// }
// let h = new Handler();
// uiElement.addClickListener(h.onClickBad); // error!

// class Handler {
//     info: string;
//     onClickGood(this: void, e: Event) {
//         console.log('clicked!');
//     }
// }
// let h = new Handler();
// uiElement.addClickListener(h.onClickGood);

// class Handler {
//     info: string;
//     onClickGood = (e: Event) => { this.info = e.message }
// }

// #https://www.typescriptlang.org/docs/handbook/functions.html#overloads

// let suits = ["hearts", "spades", "clubs", "diamonds"];

// function pickCard(x): any {

//     if (typeof x == "object") {
//         let pickedCard = Math.floor(Math.random() * x.length);
//         return pickedCard;
//     }

//     else if (typeof x == "number") {
//         let pickedCard = Math.floor(x / 13);
//         return { suit: suits[pickedCard], card: x % 13};
//     }
// }

// let myDeck = [{suit: "diamonds", card: 2}, { suit: "spades", card: 10 }, 
//     { suit: "hearts", card: 4 }];

// let pickedCard1 = myDeck[pickCard(myDeck)];
// console.log("card: " + pickedCard1.card + " of " + pickedCard1.suit);

// let pickedCard2 = pickCard(15);
// console.log("card: " + pickedCard2.card + " of " + pickedCard2.suit);

let suits = ["hearts", "spades", "clubs", "diamonds"];

function pickCard(x: {suit: string; card: number;}[]): number;
function pickCard(x: number): {suit: string; card: number;};
function pickCard(x): any {

    if (typeof x == "object") {
        let pickedCard = Math.floor(Math.random() * x.length);
        return pickedCard;
    }

    else if (typeof x == "number") {
        let pickedSuit = Math.floor(x / 13);
        return { suit: suits[pickedSuit], card: x % 13};
    }
}

let myDeck = [{ suit: "diamonds", card: 2}, {suit: "spades", card: 10}, 
{suit: "hearts", card: 4}];

let pickedCard1 = myDeck[pickCard(myDeck)];
console.log("card: " + pickedCard1.card + " of " + pickedCard1.suit);

let pickedCard2 = pickCard(15);
console.log("card: " + pickedCard2.card + " of " + pickedCard2.suit);
