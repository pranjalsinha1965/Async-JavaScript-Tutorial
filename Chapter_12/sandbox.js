//  console.log(1);
//  console.log(2);

//  setTimeout(() => {
//     console.log('Callback function fired');
//  }, 2000);

//  console.log(3);
//  console.log(4);

const getTodos = (resource, callback) => {
    const request = new XMLHttpRequest();

 request.addEventListener('readystatechange', () => {
    if(request.readyState === 4 && request.status === 200)
    {
        const data = JSON.parse(request.responseText);
        callback(undefined, data);
        resolve(data);
        // console.log(request, request.responseText);
    }
    else if(request.readyState === 4)
    {
        reject('error getting resource');
        // callback('could not fetch the data', undefined);
    }
 });
 
//  https://jsonplaceholder.typicode.com/todos/
 request.open('GET', resource);
 request.send();

};

// getTodos('todos/luigi.json', (err, data) => {
//     console.log(data);
//     getTodos('todos/mario.json', (err, data) => {
//         console.log(data);
//         getTodos('todos/shaun.json', (err, data) => {
//             console.log(data);
//         });
//     });
// });

const getSomething = () => {
    return new Promise((resolve, reject) => {
        //fetch something
        // resolve('some data');
        reject('some error');
    });
};

getSomething().then((data) => {
    console.log(data);
}, (err) => {
    console.log(err);
});

getSomething().then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});

