// const add = (a, b) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(a + b);
//         }, 2000);
//     })
// }; 

const doWork = async (a, b) => {
    // const sum = await add(1 , 99)
    // return sum;
    const sum = await setTimeout(() => {
        return a + b;
    }, 2000); 

    return sum();
};

doWork(1 , 99).then((result) => {
    console.log('result', result)
}).catch(e => console.log(err));