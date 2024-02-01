let a = 5;
let b = 6;
let c = 6.9;
let s1 = '5';
let s2 = 'a';
let s3 = '100';


console.log(a+b); //11
console.log(a+c); //11.9
console.log(a+s1); //55
console.log(typeof(a+s1)); //string
console.log(a+s2); //5a
console.log(a*s1); //25
console.log(typeof(a*s1)); // number
console.log(a*s2); //NaN
console.log(s3+a); //1005
console.log(a-s3); //-95
console.log(s3/a); //20 
console.log(s3/s1); //20
console.log(s3/s2); //NaN
console.log(s3/3); //33.333...  
// Ngoai toan tu cong thi js co xu huong ep kieu ve number