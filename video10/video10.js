console.log('hello world from js');

let a = 5;
let b = 5;
let c = '5';

console.log(a==b);// chi so sanh gia tri in ra true
console.log(a===b);// so sanh gia tri va kieu du lieu in ra true
console.log(a===c);// so sanh gia tri va kieu du lieu in ra false

// Empty
let d = {};
console.log(d); // in ra {}

// Null
let e = null;
console.log(e); // in ra null

// Undefined
let f;
console.log(f); // in ra undefined

// undefined se xuat hien khi su dung bien chua khoi tao gia tri
// null se xuat hien khi su dung bien rong (chua chiem bo nho)
// empty se xuat hien khi su dung bien rong (da chiem bo nho)
