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
var Direction;
(function (Direction) {
    Direction["Up"] = "UP";
    Direction["Down"] = "DOWN";
    Direction["Left"] = "LEFT";
    Direction["Right"] = "RIGHT";
})(Direction || (Direction = {}));
var directions = [0 /* Up */, 1 /* Down */, 2 /* Left */, 3 /* Right */];
