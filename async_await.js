function delayP(sec){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(new Date().toISOString());
        }, sec * 1000);
    });
}

function myFunc() {
    return 'func';
}
async function myAsync() {
    const time = await delayP(3);
    console.log(time);
    return 'async';
}

myAsync().then((result) => {
    console.log(result);
})
// console.log(myFunc());
// console.log(myAsync());
// console.log(delayP(3));