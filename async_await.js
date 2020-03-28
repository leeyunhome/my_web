function delayP(sec){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(new Date().toISOString());
        }, sec * 1000);
    });
}

function normalFun() {
    return 'wow';
}
async function myAsync() {
    const result = await normalFun();
    // const result = await delayP(3).then((time) => {
    //     return 'x';
    // });
    console.log(result);
    return 'async';
}

myAsync().then((result) => {
    console.log(result);
});

// function myFunc() {
//     return 'func';
// }
// async function myAsync() {
//     const time = await delayP(3);
//     console.log(time);
//     return 'async';
// }

// myAsync().then((result) => {
//     console.log(result);
// })
// // console.log(myFunc());
// // console.log(myAsync());
// // console.log(delayP(3));