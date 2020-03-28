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
var FileAccess;
(function (FileAccess) {
    // constant members
    FileAccess[FileAccess["None"] = 0] = "None";
    FileAccess[FileAccess["Read"] = 2] = "Read";
    FileAccess[FileAccess["Write"] = 4] = "Write";
    FileAccess[FileAccess["ReadWrite"] = 6] = "ReadWrite";
    // computed member
    FileAccess[FileAccess["G"] = "123".length] = "G";
})(FileAccess || (FileAccess = {}));
console.log(FileAccess.G);
