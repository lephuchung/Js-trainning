console.log('hello world from JS');
let a = {
    name: 'Hung',
    age: 21
}

let arr = ['Man U', 'Chelsea', 2, 'Juventus'];
console.log(`arr[2] = ${arr[1]}`);
console.log(`arr[3] = ${arr[2]}`);

// bo phan tu cuoi cung
arr.pop();
console.log(arr);

// them 1 phan tu vao cuoi
arr.push('hehe');
console.log(arr);

// lay cac phan tu tu 1 den 3
console.log(arr.splice(1, 3));

let family = [
    { name: 'Hung', age: '21' },
    { name: 'Noris', age: '21' }
];

console.log(family);
console.log(family[1]);