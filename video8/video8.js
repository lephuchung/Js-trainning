let obj = {
    name : 'hung',
    address : 'Hai Phong',
    email: 'lephuchung003@gmail.com'
}

console.log(`ten la: `,obj.name);
console.log(`dia chi la: ${obj.address}`);
console.log(`email la: ${obj['email']}`);

obj.name = `Le Phuc Hung`;
console.log(`ten la: `,obj.name);

let b = 'name';
obj[b]= 'thay doi';
console.log(`ten la: `,obj.name);
// su dung [] khi thuoc tinh truyen vao la mot bien
