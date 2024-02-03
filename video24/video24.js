console.log('hello world from js');

let arr = [1, 23, 40, 1000, 50];
arr.sort();
console.log(arr);

// sort se sap xep theo alphabet

arr.sort((a, b) =>{
    return a - b;
})
console.log(arr);

// sort theo gia tri